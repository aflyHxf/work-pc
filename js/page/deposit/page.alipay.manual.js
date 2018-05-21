/**
 * Created by Ricky on 2017/3/23.
 */

define(['page', 'business'], function (page, business) {
    var self = new page('alipay_manual');

    self.request = function() {
        return [{
            app: "alipayOrder",
            service: "payment",
            functionName: "getAlipayTopupRequestList"
        }, {
            app: 'amountLimit',
            service: 'payment',
            functionName: 'getAlipaySingleLimit'
        }];
    };

    self.param = {
        proposalId: '',
        amount: '',
        status: '',
        validTime: '',
        createTime: '',
        alipayQRCode: '',
        alipayAccount: '',
        alipayName: ''
    };

    self.init = function() {
        var depositedOrderInfo = self.data.alipayOrder;
        if (self.data.alipayOrder) {
            mcm.tool.insertObject(self.param, {
                proposalId: depositedOrderInfo.proposalId,
                amount: depositedOrderInfo.data.amount,
                status: business.orderStatus[depositedOrderInfo.status],
                validTime: mcm.tool.formatDate(depositedOrderInfo.data.validTime, "m月d日 h:i"),
                createTime: mcm.tool.formatDate(depositedOrderInfo.createTime, "m月d日 h:i"),
                alipayQRCode: depositedOrderInfo.data.alipayQRCode,
                alipayAccount: depositedOrderInfo.data.alipayAccount,
                alipayName: depositedOrderInfo.data.alipayName
            });
        }

        self._super.init.call(self);
    };

    self.onEnter = function() {
        if (self.data.alipayOrder) {
            self.QRCodeNode[0].src = self.param.alipayQRCode;
            self.formNode.hide();
            self.resultNode.show();
        } else {
            self.formNode.show();
            self.resultNode.hide();
        }
        mcm.validate(self.formNode, {
            amount: {
                check: function(val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 10) {
                        error = '存款金额不能小于10元'
                    } else if (val > self.data.amountLimit.singleLimit) {
                        error = '存款金额不能大于' + self.data.amountLimit.singleLimit + '元'
                    }

                    return error;
                }
            },
            alipayName: {
                error: '请输入您的支付宝账号'
            }
        }, function(formData) {
            mcm.net.send({
                service: 'payment',
                functionName: 'requestAlipayTopup',
                data: formData
            }).then(function(result) {
                mcm.alert.sp(self.url, '您的转账申请已经提交！', 'alert', [{
                    name: '确定',
                    then: function() {
                        mcm.tool.insertObject(self.param, {
                            proposalId: result.proposalId,
                            amount: result.result.amount,
                            status: business.orderStatus[result.status],
                            validTime: mcm.tool.formatDate(result.result.validTime, "m月d日 h:i"),
                            createTime: mcm.tool.formatDate(result.result.createTime, "m月d日 h:i"),
                            alipayQRCode: result.result.alipayQRCode,
                            alipayAccount: result.result.alipayAccount,
                            alipayName: result.result.alipayName
                        });
                        self.QRCodeNode[0].src = result.result.alipayQRCode || '';
                        self.formNode.hide();
                        self.resultNode.show();
                    }
                }]);
            });
        });
    };

    self.cancelOrder = function() {
        mcm.alert.sp(self.url, '您确认要取消此次充值吗？', 'alert', [{
            name: "确定",
            then: function() {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelAlipayTopup',
                    data: {
                        proposalId: self.param.proposalId
                    }
                }).then(function() {
                    mcm.alert.sp(self.url, '您的转账订单已取消!', 'alert', [{
                        name: "确定",
                        then: function() {
                            self.formNode[0].reset();
                            self.resultNode.hide();
                            self.formNode.show();
                        }
                    }]);
                });
            }
        }, {
            name: "取消"
        }]);
    };

    return self;
});
