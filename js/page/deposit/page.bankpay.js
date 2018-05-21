/**
 * Created by Ricky on 2017/3/23.
 */

define(['page', 'address', 'business'], function (page, address, business) {
    var self = new page('bankpay');

    self.param = {
        proposalId: '',
        createTime: '',
        amount: '',
        validTime: '',
        status: '',
        payeeName: '',
        payeeBankType: '',
        payeeCardNo: ''
    };
    self.data.bankListData = [];
    self._resetOrder = false;

    self.request = function () {
        return [
            {
                app: 'bankList',
                service: 'payment',
                functionName: 'getBankTypeList'
            },
            {
                app: 'topupRequest',
                service: 'payment',
                functionName: 'getManualTopupRequestList'
            },
            {
                app: 'payment',
                service: 'payment',
                functionName: 'getOnlineTopupType',
                data: {
                    merchantUse: 2, // 1--普通充值， 2--开户充值
                    clientType: 1 // 1--浏览器， 2--手机APP
                }
            },
            {
                app: 'bankName',
                service: 'payment',
                functionName: 'requestBankTypeByUserName',
                data: {
                    clientType: 1 // 1--浏览器， 2--手机APP
                }
            }
        ];
    };

    self.init = function() {
        if (self.data.topupRequest) {
            var data = self.data.topupRequest;
            var now = new Date();
            var limitTime = new Date(data.data.validTime);
            var validTime, payeeBankType;
            for (var i = 0; i < self.data.bankList.length; i++) {
                if (self.data.bankList[i].id == data.data.bankTypeId)
                    payeeBankType = self.data.bankList[i].name;
            }

            if (limitTime > now) {
                validTime = mcm.tool.formatDate(data.data.validTime, "m月d日 h:i");
            } else {
                validTime = '已超时';
            }

            mcm.tool.insertObject(self.param, {
                proposalId: data.proposalId,
                createTime: mcm.tool.formatDate(data.createTime, "m月d日 h:i"),
                amount: data.data.amount,
                validTime: validTime,
                status: business.orderStatus[data.status],
                payeeName: data.data.cardOwner,
                payeeCardNo: data.data.bankCardNo,
                payeeBankType: payeeBankType
            });

            self._resetOrder = true;
        }

        self.loadBankList();
        self.loadFilter();
        self._super.init.call(self);
    };

    self.loadBankList = function(){
      self.data.bankListData = [];
    };

    self.loadFilter = function(e){

        let event = $(e)[0] ? $(e)[0] : null ;
        if (event) {
            let depositMethod = event.currentTarget.value || '';
            console.log(self.data.bankName);
            let bankTypeResult = self.data.bankName.data.filter(item=>{
                if(item.depositMethod == depositMethod){
                    return item
                }
            })

            let bankResult = '<option value=""></option>';
            if(bankTypeResult.length > 0 && bankTypeResult[0].data){
              bankTypeResult[0].data.forEach(item=>{
                  bankResult += '<option value="'+item.id+'">'+item.name+'</option>'
              })
            }
            $('#bankAccountType').html(bankResult);
            if(depositMethod == 4 || depositMethod == 5){
                $('#bankAccountTypeDiv').hide();
            }else{
                $('#bankAccountTypeDiv').show();
            }
        }
    }
    self.onEnter = function () {
        self.initModules();
        if (!self.data.topupRequest) {
            self.resultNode.hide();
            self.formNode.show();
        } else {
            self.resultNode.show();
            self.formNode.hide();
        }
    };

    self.initModules = function () {
        mcm.validate(self.formNode, {
            depositMethod: {
                error: '请选择付款方式'
            },
            bankTypeId: {
                error: '请选择收款银行',
                check: function(val, formData, rules){
                    var result = true;
                    if(formData.depositMethod!='4' && formData.depositMethod !='5' && !val){
                        result = false;
                    }
                    return result;
                }
            },
            lastBankcardNo: {
                error: '请输入账号后三位',
                check: function (val) {
                    return /\d{3}/.test(val);
                }
            },
            realName: {
                error: '请输入开户姓名'
            },
            provinceId: {
                error: '请选择省会'
            },
            amount: {
                error: '请输入存款金额',
                check: function (val) {
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 100) {
                        error = '您好，手工存款单笔最低存款金额100元，单日存款金额无上限。如果存款金额低于100元，将无法提交存款提案，还请您留意。'
                    }

                    return error;
                }
            }
        }, function (data) {

            data.amount = Number(data.amount);
            var requestData = {service: 'payment', data: data};
            var successTips = '';
            if (self._resetOrder) {
                requestData.functionName = 'modifyManualTopupRequest';
                delete requestData.data.depositMethod;
                requestData.data.proposalId = self.param.proposalId;
                successTips = '修改手工存款申请成功';
            } else {
                requestData.functionName = 'requestManualTopup';
                successTips = '提交手工存款申请成功';
            }

            mcm.net.send(requestData).then(function (result) {
                var payeeBankType;
                if (self._resetOrder) {
                    mcm.tool.insertObject(self.param, {
                        proposalId: result.proposalId,
                        amount: data.amount
                    });
                } else {
                    for (var i = 0; i < self.data.bankList.length; i++) {
                        if (self.data.bankList[i].id == result.result.bankTypeId) {
                            payeeBankType = self.data.bankList[i].name;
                        }
                    }
                    var amount = data.amount;
                    if(data.depositMethod == 4 || data.depositMethod == 5){
                        amount = result.result.changeAmount || '';
                    }
                    var createData = {
                        proposalId: result.proposalId,
                        createTime: mcm.tool.formatDate(result.result.createTime, "m月d日 h:i"),
                        amount: amount,
                        validTime: mcm.tool.formatDate(result.result.validTime, "m月d日 h:i"),
                        status: business.orderStatus[result.status],
                        payeeName: result.result.cardOwner,
                        payeeCardNo: result.result.bankCardNo,
                    }
                    if(payeeBankType){
                        createData.payeeBankType = payeeBankType
                    }
                    mcm.tool.insertObject(self.param, createData);
                }
                mcm.alert.sp('bankpay', successTips, 'normal', [{
                    name: '确定',
                    then: function () {
                        self.formNode.hide();
                        self.resultNode.show();
                    }
                }]);
            });
        });

        address(self.addressNode, {
            province: {
                dom: '#province',
                defaultOption: self.data.topupRequest ? self.data.topupRequest.data.provinceId : false
            },
            city: {
                dom: '#city',
                defaultOption: self.data.topupRequest ? self.data.topupRequest.data.cityId : false
            },
            area: {
                dom: '#area',
                defaultOption: self.data.topupRequest ? self.data.topupRequest.data.districtId : false
            }
        });
    };

    self.cancelOrder = function() {
        mcm.alert.sp(self.url, '您确定要取消申请吗?', 'normal', [{
            name: "确定",
            then: function() {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelManualTopupRequest',
                    data: {
                        proposalId: self.param.proposalId
                    }
                }).then(function() {
                    self._resetOrder = false;
                    mcm.alert.sp(self.url, '您的手工存款申请已取消', 'normal', [{
                        name: '确定',
                        then: function() {
                            mcm.renderer.refresh(self);
                        }
                    }, {
                        name: '取消'
                    }]);
                });
            }
        }, {
            name: "取消"
        }]);
    };

    self.applyCheckAgain = function() {
        self._resetOrder = true;
        self.resultNode.hide();
        self.formNode.show();
        self.formNode.find('#depositMode').prop('disabled', 'true');
    };

    return self;
});
