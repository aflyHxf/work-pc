/**
 * Created by Ricky on 2017/4/24.
 */

define(['popup', 'address'], function (popup, address) {
    var self = new popup('modifybank');

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

      // if (!mcm.cache.getUserInfoFromCache().bankAccount) {
          mcm.validate(self.formNode, {
              bankAccountName: {
                  error: '请输入收款人姓名'
              },
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
              if(data.bankAccount === ''){
                  delete data.bankAccount;
              }
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
                  mcm.alert.sp(self.url, '银行资料修改成功!','normal', [{name: '确定'}]);
                  mcm.renderer.refresh(self);
              });
          });

        var userBank = mcm.cache.getUserInfoFromCache();
        address(self.addressNode, {
            province: {
                dom: '#province',
                defaultOption:userBank.bankAccountProvinceId || ''
            },
            city: {
                dom: '#city',
                defaultOption:userBank.bankAccountCityId || ''
            },
            area: {
                dom: '#area',
                defaultOption:userBank.bankAccountDistrictId || ''
            }
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
                purpose: "updateBankInfo"
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
