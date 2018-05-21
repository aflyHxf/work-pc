/**
 * Created by Ricky on 2017/4/11.
 */

define(['page', 'swiper', 'common', 'clipboard'], function (page, swiper, common, clipboard) {
    var self = new page('fastsearch');

    self._delay = true;

    self.request = function() {
        return [{
            app: 'getDomainList',
            service: 'partner',
            functionName: 'getDomainList'
        }];
    };

    self.param = {
        monthTopUp:null,
        monthGetBonus:null,
        monthBonus:null,
        monthPlayerWin:null,
        monthActivePlayers:null,
        monthNewPlayers:null,
        monthTimeLeft:null,
        totalNewPlayers:null,
        totalTopUpPlayers:null,
        totalValidPlayers:null,
        commissionValue:null
    };

    self.onEnter = function() {
        //开启复制功能
        new clipboard(self.copyMenuNode.get(0));

        new swiper('#amountDataSwipeNode', {
            pagination: '#amountDataSwipeNode .swiper-navbar',
            paginationClickable: true,
            loop: true,
            autoplay: 3000
        });

        new swiper('#clientDataSwipeNode', {
            pagination: '#clientDataSwipeNode .swiper-navbar',
            paginationClickable: true,
            loop: true,
            autoplay: 3000
        });

        new swiper('#extraDataSwipeNode', {
            pagination: '#extraDataSwipeNode .swiper-navbar',
            paginationClickable: true,
            loop: true,
            autoplay: 3000
        });

        mcm.net.send({
            service: 'partner',
            functionName: 'getStatistics',
            data: {
                queryType: 'month'
            }
        },true).then(function (result) {
            self.param.monthTopUp = common.formatCurrency(result['topup']);
            self.param.monthGetBonus = common.formatCurrency(result['getBonus']);
            self.param.monthBonus = common.formatCurrency(result['bonus']);
            self.param.monthPlayerWin = common.formatCurrency(result['playerWin']);
            self.param.monthActivePlayers = result['activePlayers'];
            self.param.monthNewPlayers = result['newPlayers'];
        }).fail(function (result) {
            self.param.monthTopUp = '维护中';
            self.param.monthGetBonus = '维护中';
            self.param.monthBonus = '维护中';
            self.param.monthPlayerWin = '维护中';
            self.param.monthActivePlayers = '维护中';
            self.param.monthNewPlayers = '维护中';
        });

        var startTime = new Date();
        startTime.setDate(1);
        startTime.setHours(0);
        startTime.setMinutes(0);
        var endTime = new Date();
        mcm.net.send({
            service: 'partner',
            functionName: 'getPartnerPlayerRegistrationStats',
            data: {
                startTime: mcm.tool.formatDate(startTime, 'y-m-d h:i'),
                endTime: mcm.tool.formatDate(endTime, 'y-m-d h:i')
            }
        }, true).then(function (result) {
            self.param.totalNewPlayers = result.totalNewPlayers;
            self.param.totalTopUpPlayers = result.totalTopUpPlayers;
            self.param.totalValidPlayers = result.totalValidPlayers;
        }).fail(function (result) {
            self.param.totalNewPlayers = '维护中';
            self.param.totalTopUpPlayers = '维护中';
            self.param.totalValidPlayers = '维护中';
        });

        mcm.net.send({
            service:'partner',
            functionName:'getPartnerCommissionValue'
        }, true).then(function (result) {
            self.param.commissionValue = result.amount;
        }).fail(function (result) {
            self.param.commissionValue = '维护中';
        });

        var monthTimeLeftTimer = setInterval(function() {
            var now = new Date();
            var nextMonth= new Date();

            nextMonth.setMonth(nextMonth.getMonth() + 1);
            nextMonth.setDate(0);
            nextMonth.setHours(0);
            nextMonth.setMinutes(0);
            nextMonth.setSeconds(0);

            var difference = new Date(nextMonth - now);
            var days = difference.getDate();
            var hours = 23 - now.getHours();
            var minutes = 59 - now.getMinutes();

            self.param.monthTimeLeft = days + '天' + hours + '时' + minutes + '分';
        }, 1000);
    };

    self.openPopupOfRegister = function() {
        mcm.route.popUp('registersubuser');
    };

    self.openPopupOfWithdrawal = function() {
        mcm.route.popUp('withdrawal');
    };

    self.giveTips= function() {
        mcm.alert.sp('register', '暂未开放，敬请期待！！', 'normal', [{name: '确定'}]);
    };

    return self;
});