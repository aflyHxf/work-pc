/**
 * Created by Ricky on 2017/7/20.
 */

define(['popup'], function (popup) {
    var self = new popup('resetpassword');

    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };

    self.onEnter = function() {

        mcm.validate(self.formNode, {
            password: {
                error: '密码格式不正确请重新输入',
                check: function (val, formData, rules) {
                    return rules.password(val);
                }
            },
            smsCode: 'smscode',
            phoneNumber: 'mobile'
        }, function(data) {
            mcm.net.send({
                service: 'player',
                functionName: 'resetPasswordViaPhone',
                data: data
            }).then(function() {
                mcm.alert.sp(self.url, '尊敬的会员您好，您的密码已经修改完成，请使用新的密码进行登录!', 'alert',[{name: '确定', then: function() {
                    mcm.route.popUp('login');
                }}]);
            });
        });

        self._super.onEnter.call(self);
    };

    self.phoneCode = function (e) {
        var target = $(e.currentTarget);
        var phoneNum = mcm.tool.formToObject(self.formNode)['phoneNumber'];

        if (!/^1[3587][0-9]{9}$/.test(phoneNum))
            return mcm.alert.sp(self.url, '您输入的手机号码不正确', 'alert', [{name: '确定'}]);

        if (target.hasClass('disabled'))
            return;

        mcm.net.send({
            service:'player',
            functionName:'getSMSCode',
            data: {
                phoneNumber: phoneNum,
                platformId: mcm.platformId,
                purpose: "resetPassword"
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