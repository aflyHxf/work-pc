/**
 * Created by Ricky on 2017/3/23.
 */

define(['page', 'business'], function (page, business) {
    var self = new page('wechatpay_manual');

    self.request = function() {
        // return [];
        return [{
            app: "wechatpayOrder",
            service: "payment",
            functionName: "getWechatTopupRequestList"
        }, {
            app: 'amountLimit',
            service: 'payment',
            functionName: 'getPlayerWechatPayStatus'
        }];
    };

    self.param = {
        proposalId: '',
        amount: '',
        status: '',
        validTime: '',
        createTime: '',
        weChatQRCode: '',
        weChatAccount: '',
        weChatName: '',
        wechatQRCode: '',
        wechatAccount: '',
        wechatName: '',
    };

    self.init = function() {
        var depositedOrderInfo = self.data.wechatpayOrder;
        if (self.data.wechatpayOrder) {
            mcm.tool.insertObject(self.param, {
                proposalId: depositedOrderInfo.proposalId,
                amount: depositedOrderInfo.data.amount,
                status: business.orderStatus[depositedOrderInfo.status],
                validTime: mcm.tool.formatDate(depositedOrderInfo.data.validTime, "m月d日 h:i"),
                createTime: mcm.tool.formatDate(depositedOrderInfo.createTime, "m月d日 h:i"),
                weChatQRCode: depositedOrderInfo.data.weChatQRCode || '',
                weChatAccount: depositedOrderInfo.data.weChatAccount || '',
                weChatName: depositedOrderInfo.data.weChatName || '',
                wechatQRCode: depositedOrderInfo.data.wechatQRCode || '',
                wechatAccount: depositedOrderInfo.data.wechatAccount || '',
                wechatName: depositedOrderInfo.data.wechatName || depositedOrderInfo.data.name
            });

        }

        self._super.init.call(self);
    };

    self.onEnter = function() {
        if (self.data.wechatpayOrder) {
            self.QRCodeNode[0].src = self.param.weChatQRCode;
            self.formNode.hide();
            self.resultNode.show();
        } else {
            self.formNode.show();
            self.resultNode.hide();
        }
        mcm.validate(self.formNode, {
            amount: {
                check: function(val) {
                    let maxDepositAmount = self.data.amountLimit.maxDepositAmount ? self.data.amountLimit.maxDepositAmount: 0;
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 10) {
                        error = '存款金额不能小于10元'
                    } else if (val > self.data.amountLimit.maxDepositAmount) {
                        error = '存款金额不能大于' + maxDepositAmount + '元'
                    }

                    return error;
                }
            },
            wechatName: {
                error: '请输入您的微信账号'
            }
        }, function(formData) {
            let postData = {}
            postData.amount = Number(formData.amount);
            postData.notUseQR = true;
            postData.clientType = 1;
            mcm.net.send({
                service: 'payment',
                functionName: 'requestWechatTopup',
                data: postData
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
                            weChatQRCode: result.result.weChatQRCode || '',
                            weChatAccount: result.result.weChatAccount || '',
                            weChatName: result.result.weChatName || '',
                            wechatQRCode: result.result.wechatQRCode || '',
                            wechatAccount: result.result.wechatAccount || '',
                            wechatName: result.result.wechatName || result.result.name || ''
                        });
                        console.log(result);
                        self.QRCodeNode[0].src = result.result.weChatQRCode;
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
                    functionName: 'cancelWechatTopup',
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
