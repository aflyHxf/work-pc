/**
 * Created by Ricky on 2017/3/23.
 */

define(['page'], function (page) {
    var self = new page('unionpay');

    self.input = {
        amount:''
    };

    self.onEnter = function () {
        mcm.validate('.submit-form', {
            amount: {
                error: '请输入存款金额',
                check: function(val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 50) {
                        error = '存款金额不能小于50元'
                    }
                    return error;
                }
            }
        }, function () {
            mcm.net.send({
                service: 'payment',
                functionName: 'createOnlineTopupProposal',
                data: {
                    topupType: 8,
                    amount: self.input.amount,
                    merchantUseType: 1,
                    clientType: 1
                }
            }).then(function (result) {
                var address = result['topupDetail']['paymentURL'];
                mcm.alert.sp(self.url, '是否立刻前往充值页面进行充值', 'normal', [{
                    name: '确定', then: function () {
                        window.open(address);
                    }
                }, {name: '取消'}])
            })
        });
    };
    return self;
});
