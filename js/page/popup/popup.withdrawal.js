/**
 * Created by Ricky on 2017/6/1.
 */

define(['popup', 'common'], function (popup, common) {
    var self = new popup('withdrawal');

    self.request = function () {
        return [{
            app: 'partner',
            service: 'partner',
            functionName: 'get'
        }];
    };

    self.onEnter = function () {
        mcm.validate(self.formNode, {
            amount: {
                check: function (val, formData) {
                    var error = true;

                    if (val == '') {
                        error = '请输入充值金额';
                    } else if (isNaN(val)) {
                        error = '请输入数字';
                    } else if (val == '0') {
                        error = '提款金额不能为零';
                    } else if (val > self.data.partner.credits) {
                        error = '提款金额不能大于可用余额';
                    }

                    return error;
                }
            }
        }, function (formData) {
            mcm.net.send({
                service:'partner',
                functionName:'applyBonus',
                data:{
                    bonusId:'001',
                    amount: Number(formData.amount),
                    honoreeDetail:{
                        mobile:110
                    }
                }
            }).then(function (result) {
                mcm.alert.sp(self.url, '申请提款成功', 'normal', [{name: '确定'}]);
            });
        });

        self._super.onEnter.call(self);
    };

    return self;
});
