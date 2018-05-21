/**
 * Created by Ricky on 2017/4/24.
 */

define(['popup'], function (popup) {
    var self = new popup('modifypassword');

    self._delay = true;

    self.onEnter = function() {

        mcm.validate(self.formNode, {
            oldPassword: {
                error: '请输入旧密码'
            },
            newPassword: {
                error: '密码格式不正确请重新输入',
                check: function (val, formData, rules) {
                    return rules.password(val);
                }
            },
            rePassword: {
                error: '两次输入的密码不一致',
                check: function (val, formData) {
                    return val == formData.newPassword;
                }
            },
            smsCode: {
                error: '您输入的验证码不正确',
                check: function (val, formData, rules) {
                    return rules.smscode(val);
                }
            }
        }, function(data) {
            delete data.rePassword;
            delete data.phoneNumber;
            data.playerId = mcm.cache.getPlayerId();
            // data.partnerId = mcm.cache.getPartnerId();

            mcm.net.send({
                service: 'player',
                functionName: 'updatePassword',
                data: data
            }).then(function() {
                self.close();

                mcm.cache.setLogout();
                mcm.route.changeUrl('home');
                history.pushState(null, {}, '#home');
                return mcm.alert.sp(self.url, '尊敬的会员您好，您的密码已经修改完成，请使用新的用户密码进行登录!', {name: '确定', then: function() {
                    mcm.route.popUp('login');
                }});
            });
        });

        self._super.onEnter.call(self);
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);
        var phoneNum = mcm.cache.getUserInfoFromCache().phoneNumber;

        if (target.hasClass('disabled'))
            return;

        mcm.net.send({
            service:'player',
            functionName:'sendSMSCodeToPlayer',
            data: {
                platformId: mcm.platformId,
                purpose: "updatePassword"
            }
        }).then(function (result) {
            target.addClass('disabled');
            var time = 60, now = 1;
            var loop = function () {
                if (now >= time) {
                    target.html('获取验证码');
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒后重新发送验证码';
                target.html(text);
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

    return self;
});