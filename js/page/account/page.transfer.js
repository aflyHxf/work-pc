/**
 * Created by Ricky on 2017/5/22.
 */

define(['page', 'progress'], function (page, progress) {
    var self = new page('transfer');

    self.param = {
        overage:''
    };

    self._delay = true;

    self.request = function () {
        return [{
            app: 'gamesInfo',
            service: 'game',
            functionName: 'getProviderList',
            data: {
                platformId: mcm.platformId,
                playerId: mcm.cache.getUserInfoFromCache().playerId
            }
        }, {
            app: 'getReward',
            service: 'reward',
            functionName: 'getRewardTask',
            data: {
                playerId: mcm.cache.getUserInfoFromCache().playerId
            }
        }]
    };

    self.onEnter = function () {
        self.param.overage = mcm.cache.getOverage();
        self.param.overage = self.param.overage.toFixed(2);
        self.getBalanceFromPlatform();

        self.formNode.on('click', 'tr', function () {
            var currentDom = $(this);
            var status = Number(currentDom.data('status'));

            if (!status)
                return mcm.alert.sp(self.url, '正在维护中 请稍后重试！', 'alert', [{name: '确定'}]);

            currentDom.addClass('active').siblings().removeClass('active');

            currentDom.find('input').prop('checked', true);
        });

        if (self.data['getReward'])
            new progress({
                container: self.progressNode,
                anchors: [0, self.data['getReward']['requiredUnlockAmount'].div(2), self.data['getReward']['requiredUnlockAmount']],
                current: self.data['getReward']['unlockedAmount'],
                isRoundAnchor: false
            });

        mcm.schedule.addEventListener('getOverage',self.updateOverage,self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('getOverage',self);
        self._super.onExit.call(self)
    }

    self.getBalanceFromPlatform = function () {
        var gameInfo;
        self.data.GameProviderCredit = {};

        for (var i = 0; i < self.data.gamesInfo.length; i++) {
            gameInfo = self.data.gamesInfo[i];
            mcm.net.send({
                service: 'game',
                functionName: 'getGameProviderCredit',
                data: {
                    providerId: gameInfo.providerId
                }
            }, true).then(function(result) {
                var credit = result.credit.toFixed(2);
                var providerId = result.providerId;

                self.data.GameProviderCredit[providerId] = credit; // 缓存游戏余额到 this.data.GameProviderCredit

                self.formNode.find('#game-balance-' + providerId).html(credit + '元');
            }, function(providerId) {
                self.formNode.find('#game-balance-' + providerId).html('无法获取');
            }.bind(this, gameInfo.providerId));
        }
    };

    self.onSubmit = function (e) {
        e.preventDefault();
        var data = mcm.tool.formToObject(e.target);
        // hardcore the game providerId , so user wont forget to choose
        data.providerId = 69;
        var operation = data.operation;
        delete data.operation;
        data.playerId = mcm.cache.getUserInfoFromCache().playerId;

        if (!data.providerId)
            return mcm.alert.sp(self.url, '请选择要操作的游戏大厅!', 'alert',[{name: '确定'}]);

        if (operation == 1) { //转出到本地
            self.transferFromGame(data);
        } else if(operation == 0) { //转入到游戏
            self.transferFromLocal(data);
        }
    };

    self.transferFromGame = function (data) {
        mcm.net.send({
            service: 'game',
            functionName: 'transferFromProvider',
            data: data
        }).then(function() {
            self.formNode.find('.active').find('[id~="game-balance-"]').html('0元');

            mcm.cache.updateUserInfo();
            mcm.alert.sp(self.url, '已完成转账 请查收', 'alert',[{name: '确定'}]);
            mcm.renderer.refresh(self);
        });
    };

    self.transferFromLocal = function (data) {
        mcm.net.send({
            service: 'game',
            functionName: 'transferToProvider',
            data: data
        }).then(function() {
            mcm.cache.updateUserInfo();
            mcm.alert.sp(self.url, '已完成转账 请查收', 'alert',[{name: '确定'}]);
            mcm.renderer.refresh(self);
        });
    };

    self.updateOverage=function (sender,value) {
        if(value)
            self.param.overage = value;
            self.param.overage = self.param.overage.toFixed(2);

    };

    return self;
});
