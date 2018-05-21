/**
 * Created by Ricky on 2017/3/28.
 */

define(['page', 'progress', 'common'], function (page, progress, common) {
    var self = new page('withdrawals');

    self._delay = true;

    self.input = {
        amount: ''
    };

    self.param = {
        overage: null
    };

    self.request = function () {
        return [{
            app: 'reward',
            service: 'reward',
            functionName: 'getRewardTask',
            data: {
                playerId: mcm.cache.getPlayerId()
            }
        }, {
            app: 'bankList',
            service: 'payment',
            functionName: 'getBankTypeList'
        }];
    };

    self.onEnter = function () {
        //todo 获取用户余额
        mcm.cache.loadOverage();

        if (!mcm.cache.getUserInfoFromCache().bankAccount) {
            mcm.alert.sp(self.url, '请前往【基本资料】页面修改绑定银行卡！', 'alert', [{name: '确定', then: function() {
                mcm.route.changeUrl('personal');
            }}]);
        } else {
            mcm.validate(self['formNode'], {
                amount: {
                    check: function (s) {
                        var error = true;
                        var balance = mcm.cache.getOverage();

                        if (s == '') {
                            error = '请输入提现金额';
                        } else if (isNaN(s)) {
                            error = '请输入数字';
                        } else if (s > balance) {
                            error = '提款金额不能超过账户余额';
                        } else if (s < 100) {
                            error = '提款金额必须大于100元';
                        }
                        return error;
                    }
                }
            }, function () {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'applyBonus',
                    data: {
                        bonusId: 1,
                        amount: Number(self.input.amount),
                        honoreeDetail: ' '
                    }
                }).then(function (result) {

                    mcm.alert.sp(self.url, '申请成功', 'normal', [{name: '确定'}]);
                    self.input.amount = '';
                    mcm.cache.loadOverage();
                })
            });
        }

        if (self.data['reward'])
            new progress({
                container: self.progressNode,
                anchors: [0, self.data['reward']['requiredUnlockAmount'].div(2), self.data['reward']['requiredUnlockAmount']],
                current: self.data['reward']['unlockedAmount'],
                isRoundAnchor: false
            });

        mcm.net.send({
            service: 'player',
            functionName: 'getCreditDetail'
        }).then(function (result) {
            if(result && result.gameCreditList) {
                for(var x = 0; result.gameCreditList.length > x; x++)
                {
                    var gameCredit = parseInt(result.gameCreditList[x].validCredit);
                    if(!isNaN(gameCredit) && gameCredit > 0) {
                        var isLast = result.gameCreditList.length - 1 === x ? true : false;
                        var data = {};
                        data.credit = gameCredit
                        data.playerId = mcm.cache.getUserInfoFromCache().playerId;
                        data.providerId = result.gameCreditList[x].providerId;
                        transferFromGame(data, isLast);
                    }
                }
            }
        });

        mcm.schedule.addEventListener('getOverage', self.updateOverage, self);
    };

    var transferFromGame = function (data, isLast) {
        if (!data.credit) {
            return;
        }

        mcm.net.send({
            service: 'game',
            functionName: 'transferFromProvider',
            data: data
        }).then(function() {
            if(isLast) {
                mcm.renderer.refresh(self);
            }
        });
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('getOverage', self);
        self._super.onExit.call(self);
    };

    //todo 更新用户余额回调
    self.updateOverage = function (sender, eventData) {
        var promo = mcm.cache.getLockCredit();
        self.param.overage = common.formatCurrency(promo >= 0 ? eventData + promo : eventData);
    };

    return self;
});
