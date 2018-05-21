/**
 * Created by Ricky on 2017/5/9.
 */

define(['popup', 'common'], function (popup, common) {
    var self = new popup('loginbyphone');

    self.input = {
        phoneNumber: null
    };

    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };

    self.phoneValid = function (dom, name) {
        if (dom == '')
            return '请填写' + name;
        if (isNaN(dom) || dom.indexOf('.') != -1 || dom.length != 11)
            return name + '格式错误';
        return '';
    };

    self.openRegisterPopup = function () {
        mcm.route.popUp('register');
    };

    self.switchLoginByNormal = function () {
        mcm.route.popUp('login');
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);

        if (target.hasClass('disabled'))
            return;

        var result = self.phoneValid(self.input.phoneNumber,'手机号码');

        if (result != '')
            return mcm.alert.sp(self.url, result, 'alert', [{name: '确定'}]);

        mcm.net.send({
            service:'player',
            functionName:'getSMSCode',
            data: {
                phoneNumber:self.input.phoneNumber,
                platformId: mcm.platformId,
                purpose: "login"
            }
        }).then(function (result) {
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

    self.onEnter = function() {
        mcm.validate(self.formNode, {
            phoneNumber: 'mobile',
            smsCode: {
                error: '您输入的验证码不正确',
                check: function (val, formData, rules) {
                    return rules.smscode(val);
                }
            }
        }, function(data) {
            mcm.net.load({
                service: 'player',
                functionName: 'loginPlayerPartnerWithSMS',
                data: data
            }, 'loginResponse');
        });

        mcm.schedule.addEventListener('loginResponse',self.loginResponse,self);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('loginResponse',self);
        self._super.onExit.call(self);
    };

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            mcm.alert.sp(self.url, '登录成功', 'normal', [{name: '确定'}], 2);
            mcm.renderer.update_out(self.url);
            self.attempt = 0;
            if (!mcm.tool.isOwnEmpty(history.state)) {
                var url = history.state.url;
                var search = history.state.search;
                history.replaceState({}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            }
        } else {
            mcm.alert.sp(self.url, eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
            if (eventData['data'] && eventData['data']['noOfAttempt']){
                self.attempt = eventData['data']['noOfAttempt'];
                if(self.attempt > 3){
                    self.checkValidCode();
                    self['captchaNode'].show();
                }
            }
        }
    };

    return self;
});
