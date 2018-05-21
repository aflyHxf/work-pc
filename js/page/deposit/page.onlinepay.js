/**
 * Created by Mark on 2018/4/13.
 */

define(['page'], function (page) {
    var self = new page('onlinepay');

    self.input = {
        amount:'',
        topupType:''
    };
    self.onlineTopupListTXT = '';
    self.request = function () {
        return {
          app: 'onlineTopupType',
          service: 'payment',
          functionName: 'getOnlineTopupType',
          data: {
              merchantUse: 1, // 1--普通充值， 2--开户充值
              clientType: 1 // 1--浏览器， 2--手机APP
          }
        };
    };

    // app: 'amountLimit',
    // service: 'payment',
    // functionName: 'getMerchantSingleLimits'

    self.init = function() {

        if (!self.data.onlineTopupType instanceof Array) {
          return;
        }

        for (var i = 0; i < self.data.onlineTopupType.length; i++) {
          switch (self.data.onlineTopupType[i].type) {
            case 1:
              self.data.onlineTopupType[i].name = "网银支付";
              self.data.onlineTopupType[i].icon = "icon-online";
              break;
            case 2:
              self.data.onlineTopupType[i].name = "微信扫码";
              self.data.onlineTopupType[i].icon = "icon icon-wechatPay";
              break;
            case 3:
              self.data.onlineTopupType[i].name = "支付宝扫码";
              self.data.onlineTopupType[i].icon = "icon icon-aliPay";
              break;
            case 4:
              self.data.onlineTopupType[i].name = "微信支付";
              self.data.onlineTopupType[i].icon = "icon icon-wechatPay";
              break;
            case 5:
              self.data.onlineTopupType[i].name = "支付宝支付";
              self.data.onlineTopupType[i].icon = "icon icon-aliPay";
              break;
            case 6:
              self.data.onlineTopupType[i].name = "快捷支付";
              self.data.onlineTopupType[i].icon = "icon icon-fastPay";
              break;
            case 7:
              self.data.onlineTopupType[i].name = "QQ扫码";
              self.data.onlineTopupType[i].icon = "icon icon-qqPay";
              break;
            case 8:
              self.data.onlineTopupType[i].name = "银联扫码";
              self.data.onlineTopupType[i].icon = "icon icon-netPay";
              break;
            case 9:
              self.data.onlineTopupType[i].name = "京东扫码";
              self.data.onlineTopupType[i].icon = "icon-jdPay";
              break;
            case 10:
              self.data.onlineTopupType[i].name = "微信wap";
              self.data.onlineTopupType[i].icon = "icon icon-wechatPay";
              break;
            case 11:
              self.data.onlineTopupType[i].name = "支付宝wap";
              self.data.onlineTopupType[i].icon = "icon icon-aliPay";
              break;
            case 12:
              self.data.onlineTopupType[i].name = "QQwap";
              self.data.onlineTopupType[i].icon = "icon icon-qqPay";
              break;
            case 13:
              self.data.onlineTopupType[i].name = "点卡(PCard)";
              self.data.onlineTopupType[i].icon = "";
              break;
            case 14:
              self.data.onlineTopupType[i].name = "京东wap";
              self.data.onlineTopupType[i].icon = "icon-jdPay";
              break;
          }
        }
        self.getOnlineTopupLimit();
        self._super.init.call(self);
    };

    self.getOnlineTopupLimit = function(){
        self.onlineTopupList = {};
        var data = self.data.onlineTopupType;
        if(data.length > 0){
            self.onlineTopupListTXT = '单笔充值限额最低10元，';
            data.forEach(function(topup){
                self.onlineTopupList[topup.maxDepositAmount] = self.onlineTopupList[topup.maxDepositAmount] || {merchantName:[], value:0};
                self.onlineTopupList[topup.maxDepositAmount].value = topup.maxDepositAmount;
                self.onlineTopupList[topup.maxDepositAmount].merchantName.push(topup['name']);
            })
        }

        var topupList = [];
        if(Object.keys(self.onlineTopupList).length > 0){

            topupList = Object.keys(self.onlineTopupList);
            topupList = topupList.sort();
            topupList.forEach(function(topupData, index){
                var name = self.onlineTopupList[topupData].merchantName.join('、');
                var maxDepositAmount = self.onlineTopupList[topupData].value || 0;

                if(maxDepositAmount > 0){
                    self.onlineTopupListTXT += name +'单笔充值上限最高'+maxDepositAmount+'元';
                    if(topupList.length != (index +1)){
                      self.onlineTopupListTXT += '，';
                    }else{
                      self.onlineTopupListTXT += '。';
                    }
                }
            })
        }

    }

    self.choosetopup = function(e){
        var id = $(e.currentTarget).data('id');
        self.input.topupType = id;
        $('.btn-submit-online').removeClass('select-topup');
        $(e.currentTarget).addClass('select-topup');
    }

    self.onEnter = function () {
        mcm.validate(self.formNode, {
            amount: {
                error: '请输入存款金额',
                check: function(val) {
                    console.log(self.formNode);
                    var error = true;
                    if (val == '') {
                        error = '请输入存款金额';
                    } else if (val < 10) {
                        error = '存款金额不能小于10元'
                    }

                    if(!self.input.topupType){
                        error = '请先选择在线充值方式';
                    }
                    // else if (val > self.data.amountLimit.singleLimitList.wechat) {
                    //     error = '存款金额不能大于' + self.data.amountLimit.singleLimitList.wechat + '元'
                    // }
                    return error;
                }
            }
        }, function () {
            console.log(self.input.topupType);
            mcm.net.send({
                service: 'payment',
                functionName: 'createOnlineTopupProposal',
                data: {
                    topupType: self.input.topupType,
                    amount: self.input.amount,
                    merchantUseType: 1,
                    clientType: 1
                }
            }).then(function (result) {
                var address = result['topupDetail']['paymentURL'];
                console.log(address);
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
