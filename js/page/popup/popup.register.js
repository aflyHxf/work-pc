/**
 * Created by Ricky on 2017/3/22.
 *
 * Addition by Wilde on 2017/4/17.
 */

define(['popup', 'common'], function (popup, common) {
    var self = new popup('register');

    self.input = {
        realName: null,
        phoneNumber: null,
        email: null,
        account: null,
        password: null,
        confirmPassword: null,
        recommend: null,
        validCode: null,
        smsCode: null
    };

    self.attempt = 0;

    self.Verify = {
        'realNameNode': 'chineseInput-真实姓名',
        'phoneNumberNode': 'phoneValid-手机号码',
        'accountNode': 'nonChineseInput-账户名',
        'passwordNode': 'nonChineseInput-密码',
        'confirmPassNode': 'confirmPass-确认密码',
        'validCodeNode': 'nonChineseInput-验证码',
        'smsCodeNode': 'nonChineseInput-手机验证码'
    };

    self.onEnter = function () {

        // self.checkValidCode();

        var key = mcm.tool.getSearch();
        if(key.r){
            var partner = $('#recommend');
            partner.attr('readonly', 'readonly');
            self.input.recommend = key.r;
        }

        mcm.validate(self['formNode'], {
            name: {
                check: function (s) {
                    // if(!/^[A-Za-z0-9]{6,19}$/.test(s) || /^[A-Za-z]+$/.test(s) || /^[0-9]+$/.test(s))
                    //     return '请输入6~19位英文和数字组合，不能全英文或全数字';
                    if(!/^[A-Za-z0-9]{6,19}$/.test(s))
                        return '请输入6~19位英文和数字组合';

                    mcm.net.send({
                        service: 'player',
                        functionName: 'isValidUsername',
                        data: {
                            name: s
                        }
                    });

                    return true;
                }
            },
            password:'password',
            confirmPassword:{
                check:function (s,form) {
                    if(s != form['password'])
                        return '两次输入的密码不同';
                    return true;
                }
            },
            realName:'isNotEmpty',
            email:'mail'
            // phoneNumber:'mobile',
            // smsCode:'smscode'

        },function () {
            var data = {
                name: self.input.account,
                password: self.input.password,
                realName: '', //self.input.realName,
                // phoneNumber: self.input.phoneNumber,
                email: self.input.email,
                smsCode: '0000', // self.input.validCode,
                domain: 'http://' + location.hostname,
                sourceUrl: document.referrer
            };

            var key = mcm.tool.getSearch();
            if (key && key.r){
                data['partnerName'] = key.r;
            }else{
                if (self.input.recommend)
                    data['referral'] = 'p' + self.input.recommend;
            }

            mcm.net.load({
                service: 'player',
                functionName: 'create',
                data: data
            }, 'loginResponse');
        });

        mcm.schedule.addEventListener('loginResponse',self.loginResponse,self);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        self.resetView();
        mcm.schedule.removeEventListener('loginResponse',self);
        self._super.onExit.call(self);
    };

    self.checkValidCode = function () {
        mcm.net.send({
            service: 'player',
            functionName: 'captcha'
        }, true).then(function (result) {
            var code = common.arrayBufferToBase64(result.data);
            self['validImg'].attr('src', 'data:image/png;base64,' + code);
        })
    };

    self.phoneValid = function (dom, name) {
        if (dom == ''||dom == null)
            return '请填写' + name;
        if (isNaN(dom) || dom.indexOf('.') != -1 || dom.length != 11)
            return name + '格式错误';
        return '';
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);

        if (target.hasClass('disabled'))
            return;

        var result = self.phoneValid(self.input.phoneNumber, '手机号码');

        if (result != '')
            return mcm.alert.sp(self.url, result, 'alert', [{name: '确定'}]);


        mcm.net.send({
            service: 'player',
            functionName: 'getSMSCode',
            data: {
                phoneNumber: self.input.phoneNumber,
                name: self.input.account,
                purpose: "registration",
                platformId: mcm.platformId
            }
        }).then(function () {
            target.addClass('disabled');
            var html = target.find('div');
            var time = 120, now = 1;
            var loop = function () {
                if (now >= time) {
                    html.html('点击获取验证码');
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒后重新发送验证码';
                html.html(text);
                now++;
                setTimeout(function () {
                    loop();
                }, 1000);
            };
            setTimeout(function () {
                loop()
            }, 1000);
        })
    };

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            // mcm.alert.sp(self.url, '<div style="text-align: left;">欢迎加入捕鱼皇<br>您的会员资料为：<br>会员账号：' + eventData.data.name + '<br>真实姓名：' + eventData.data.realName + '<br>手机号码：' + eventData.data.phoneNumber + '<br>邮箱地址：' + eventData.data.email + '</div>', 'normal', [{name: '确定', then: function () {
            //     window.open(location.origin);
            // }}]);
            mcm.alert.sp(self.url, '<div style="text-align: left;">欢迎加入捕鱼皇<br>您的会员资料为：<br>会员账号：' + eventData.data.name  + '<br>手机号码：' + eventData.data.phoneNumber + '<br>邮箱地址：' + eventData.data.email + '</div>', 'normal', [{name: '确定', then: function () {
                window.open(location.origin);
            }}]);
            mcm.net.load({
                service: 'player',
                functionName: 'addClientSourceLog',
                data: {
                    sourceUrl: document.referrer,
                    playerName: self.input.account,
                    clientType: 'web',
                    accessType: 'register'
                }
            }, 'none', true);
            self.resetView('input', '');

            mcm.renderer.update_out(self.url);
            self.attempt = 0;

            history.replaceState({}, '', '#wechatpay_manual?pid=transaction');
            mcm.route.changeUrl('wechatpay');
        } else {
            mcm.alert.sp(self.url, eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
        }
    };

    return self;
});
