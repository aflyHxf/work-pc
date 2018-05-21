/**
 * Created by Ricky on 2017/5/3.
 */

define(['popup', 'common'], function (popup, common) {
    var self = new popup('registersubuser');

    self.onEnter = function () {
        self.checkValidCode();

        mcm.validate(self.formNode, {
            name: {
                error: '请输入用户名',
                check: function(s) {
                    return Boolean(s);
                }
            },
            password: 'password',
            repassword: {
                error: '两次输入的密码不一致',
                check: function(s, formData) {
                    return s == formData.password;
                }
            },
            realName: {
                error: '请输入真实姓名'
            },
            email: {
                check: function(s, formData, rules) {
                    var error = true;

                    if (s == '') {
                        error = '请输入您的邮箱地址'
                    } else if (!rules.mail(s)) {
                        error = '您输入的邮箱地址有误，请重新输入'
                    }
                    return error;
                }
            },
            phoneNumber: 'mobile',
            captcha: 'smscode'
        }, function(data) {
            delete data.repassword;
            data.domain = location.hostname;
            data.partnerName = mcm.cache.getUserInfoFromCache()['name'];

            mcm.net.send({
                service: 'player',
                functionName: 'createPlayerPartner',
                data: data
            }).then(function() {
                self.close();
                mcm.alert.sp('register', '<div style="text-align: left;">您的会员资料为：<br>会员账号：' + data.name + '<br>真实姓名：' + data.realName + '<br>手机号码：' + data.phoneNumber + '<br>邮箱地址：' + data.email + '</div>', 'normal', [{name: '确定'}]);
            });
        });

        self._super.onEnter.call(self);
    };

    self.checkValidCode = function () {
        mcm.net.send({
            service: 'player',
            functionName: 'captcha'
        }, true).then(function (result) {
            var code = common.arrayBufferToBase64(result.data);
            self['validImg'].attr('src', 'data:image/png;base64,' + code);
        });
    };

    return self;
});
