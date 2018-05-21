/**
 * Created by Ricky on 2017/4/11.
 */

define(['page', 'progress', 'address'], function (page, progress, address) {
    var self = new page('personal');

    self._delay = true;

    self.request = function() {
        return [{
            app: 'bankList',
            service: 'payment',
            functionName: 'getBankTypeList'
        },{
            app: 'smsSettings',
            service: 'platform',
            functionName: 'getPlatformSmsGroups',
            data: {'platformObjId': mcm.cache.getUserInfoFromCache().playerLevel.platform}
        }]
    };

    self.onEnter = function() {
        if (!mcm.cache.getUserInfoFromCache().bankAccount) {
            mcm.validate(self.bankFormNode, {
                bankAccountName: {
                    error: '请输入收款人姓名'
                },
                bankAccount: 'bankcard',
                bankName: {
                    error: '请选择开户行'
                },
                bankAccountType: {
                    error: '请选择账户性质'
                },
                bankAccountProvince: {
                    error: '请选择开户城市'
                },
                bankAddress: {
                    error: '请输入开户银行地址'
                }
            }, function(data) {
                data.playerId = mcm.cache.getUserInfoFromCache().playerId;

                mcm.tool.insertObject(self.param, data);

                mcm.net.send({
                    service: 'partner',
                    functionName: 'updatePaymentInfo',
                    data: data
                },true);

                mcm.net.send({
                    service: 'player',
                    functionName: 'updatePaymentInfo',
                    data: data
                }).then(function(result) {
                    mcm.cache.updateUserInfo();
                    mcm.renderer.refresh(self);
                    mcm.alert.sp(self.url, '银行资料修改成功!','normal', [{name: '确定'}]);
                });
            });

            address(self.addressNode, {
                province: {
                    dom: '#province'
                },
                city: {
                    dom: '#city'
                },
                area: {
                    dom: '#area'
                }
            });
        }
    };

    self.openModifyPasswordPopup = function() {
        mcm.route.popUp('modifypassword');
    };

    self.openModifyBankPopup = function() {
        mcm.route.popUp('modifybank');
    };

    self.requestSMSCode = function() {
        mcm.net.send({
            service: 'player',
            functionName: 'sendSMSCodeToPlayer',
            data: {
                purpose: "updateBankInfoFirst",
                platformId: mcm.platformId
            }
        }).then(function () {
            var target = $("#requestSMSCodeForBank")
            target.addClass('disabled');
            target.attr('disabled', true);
            var time = 120, now = 1;
            var loop = function () {
                if (now >= time) {
                    target.html('获取验证码');
                    target.attr('disabled', false);
                    target.removeClass('disabled');
                    return;
                }
                var text = (time - now) + '秒';
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
    }

    self.smsSettingSubmit = function(e) {
        e.preventDefault();
        var sendData = {};
        var data = mcm.tool.formToObject(e.target);
        for (var i in self.data.smsSettings) {
            if(data.hasOwnProperty(i)) {
                self.data.smsSettings[i].list.forEach(v => {
                    sendData[v] = true;
                })
            } else {
                self.data.smsSettings[i].list.forEach(v => {
                    sendData[v] = false;
                })
            }
        }
        mcm.net.send({
            service: 'player',
            functionName: 'updateSmsSetting',
            data: sendData
        }).then(function () {
            mcm.alert.sp(self.url, '您的短信设置已经生效', 'normal', [{name: '确定'}]);
        });
    };

    return self;
});
