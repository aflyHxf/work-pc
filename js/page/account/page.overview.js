/**
 * Created by Ricky on 2017/4/4.
 */

define(['page', 'progress'], function (page, progress) {
    var self = new page('overview');

    self.param = {
        totalCredit: 0,
        overage: null,
        totalOverage: null
    };

    self.request = function () {
        var request = [];
        var providerList = mcm.cache.getProviderList();
        if (providerList.length == 0) {
            request.push({
                app: 'providerList',
                service: 'game',
                functionName: 'getProviderList',
                data: {
                    platformId: mcm.platformId,
                    playerId: mcm.cache.getPlayerId()
                }
            });
        } else {
            self.data.providerList = providerList;
        }

        var endDay = mcm.tool.getOneDateBeforeToday(0, 2);
        var startDay = mcm.tool.getOneDateBeforeToday(60, 1);
        if (startDay && endDay)
            request.push({
                app: 'withdraw',
                service: 'payment',
                functionName: 'getBonusRequestList',
                data: {
                    startTime: startDay,
                    endTime: endDay,
                    startIndex: 0,
                    requestCount: 10,
                    sort: false,
                    proposalStatus: ''
                }
            });

        //todo 获取存款提交
        request.push({
            app: 'saving',
            service: 'payment',
            functionName: 'getManualTopupRequestList'
        });

        //todo 获取活动进度
        request.push({
            app: 'reward',
            service: 'reward',
            functionName: 'getRewardTask',
            data: {
                playerId: mcm.cache.getPlayerId()
            }
        });

        request.push({
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        });

        mcm.net.send({
            service: 'player',
            functionName: 'getCreditDetail',
            data: {}
        }).then(function (data) {
            self.param.totalCredit = 0;
            if (data) {
                var creditDetail = data;
                var validCredit = Number(creditDetail.credit);
                var gameCredit = 0;
                var groupCredit = 0;
                if (creditDetail.gameCreditList && creditDetail.gameCreditList.length > 0) {
                    creditDetail.gameCreditList.map(function (game) {
                        if (game.validCredit && game.validCredit !== "unknown") {
                            gameCredit += Number(game.validCredit);
                        }
                    });
                }

                if (creditDetail.lockedCreditList && creditDetail.lockedCreditList.length > 0) {
                    creditDetail.lockedCreditList.map(function (group) {
                        if (group.validCredit && group.validCredit !== "unknown") {
                            groupCredit += Number(group.validCredit);
                        }
                    })
                }

                self.param.totalCredit = validCredit + gameCredit + groupCredit;
                self.param.totalCredit = mcm.tool.formatCurrency(self.param.totalCredit);
            }

        });

        if (request.length > 0)
            return request;
    };

    self.init = function () {
        self.data.providerList.forEach(function (provider) {
            self.param[provider['name']] = '加载中';
        });

        self._super.init.call(self);
    };

    self.onEnter = function () {
        var providerList = mcm.cache.getProviderList();
        if (providerList.length == 0) {
            self.data.providerList.forEach(function (provider) {
                mcm.cache.addProvider({
                    providerId: provider['providerId'],
                    name: provider['name'],
                    nickName: provider['nickName'],
                    status: provider['status'],
                    credit: null
                })
            });
        }

        //todo 请求游戏大厅余额
        mcm.cache.getProviderList().forEach(function (provider) {
            mcm.net.send({
                service: 'game',
                functionName: 'getGameProviderCredit',
                data: {
                    providerId: provider['providerId']
                }
            }, true).then(function (result) {
                self.param[provider['name']] = mcm.tool.formatCurrency(result.credit);
            }).fail(function () {
                self.param[provider['name']] = '维护中';
            })
        });

        //todo 获取用户余额
        mcm.cache.loadOverage();

        //todo 活动进度条
        if (self.data['reward'])
            new progress({
                container: self.progressNode,
                anchors: [0, self.data['reward']['requiredUnlockAmount'].div(2), self.data['reward']['requiredUnlockAmount']],
                current: self.data['reward']['unlockedAmount'],
                isRoundAnchor: false
            });

        mcm.schedule.addEventListener('getOverage', self.updateOverage, self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('getOverage', self);
        self._super.onExit.call(self);
    };

    //todo 更新用户余额回调
    self.updateOverage = function (sender, eventData) {
        var promo = mcm.cache.getLockCredit();
        self.param.overage = mcm.tool.formatCurrency(promo >= 0 ? eventData + promo : eventData);
        if (self.data['reward']){
            self.param.totalOverage = mcm.tool.formatCurrency(eventData.add(self.data['reward']['currentAmount']));
        }
    };

    //todo 取消提款提案
    self.cancelWithdraw = function (e) {
        var id = $(e.currentTarget).data('id');
        mcm.alert.sp(self.url, '是否取消该笔提款申请', 'normal', [{
            name: '确定', then: function () {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelBonusRequest',
                    data: {
                        proposalId: id
                    }
                }).then(function () {
                    mcm.renderer.refresh(self);
                    mcm.alert.sp(self.url, '取消提案成功' || '未知错误', 'normal', [{name: '确定'}]);
                })
            }
        }, {name: '取消'}])
    };

    //todo 取消存款提案
    self.cancelSaving = function (e) {
        var id = $(e.currentTarget).data('id');
        mcm.alert.sp(self.url, '是否取消该笔存款申请', 'normal', [{
            name: '确定', then: function () {
                mcm.net.send({
                    service: 'payment',
                    functionName: 'cancelManualTopupRequest',
                    data: {
                        proposalId: id
                    }
                }).then(function () {
                    mcm.renderer.refresh(self);
                    mcm.alert.sp(self.url, '取消提案成功' || '未知错误', 'normal', [{name: '确定'}]);
                })
            }
        }, {name: '取消'}])
    };

    return self;
});