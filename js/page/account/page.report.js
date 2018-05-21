/**
 * Created by wildeChen on 2017/4/10.
 */

define(['page', 'template', 'layDate'], function (page, template) {
    var self = new page('report');

    self.input = {
        lobby: '',
        type: '2',
        status:'',
        page: 1
    };

    self.param = {
        betAmount: ''
    };

    self.subModel = template.compile(mcm.page['reportController']);

    self.controller = template.compile(mcm.page['pageController']);

    self.cache = {
        model: null
    };

    self.topupStatus = {
      1:'手工存款',
      2:'在线支付',
      3:'支付宝充值',
      4:'个人微信'
    }

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

        if (request.length > 0)
            return request;
    };

    self.init = function () {
        self.cache.model = self.subModel({type: 'bet', data: self.data});
        self._super.init.call(self);
    };

    self.switch = function (e) {
        var target = $(e.target);
        if (target.hasClass('active'))
            return;

        target.siblings().removeClass('active');
        target.addClass('active');

        self.appendTemplate(self.subModel({type: target.data('type'), data: self.data}), '.reportArea');
        self.bindView();
        self.spreadView();
    };

    self.date = function (e) {

        let minDateString = self.getMinDate();
        let maxDateString = self.getDateFormat();

        laydate({
            format: 'YYYY-MM-DD hh:mm',
            isclear: false,
            istime: true,
            min: minDateString,
            max: maxDateString
        });
    };

    self.getMinDate = function(){

        // limited user can search data within 14 day
        let maxDate =  new Date().getTime();
        let day14 = 14 * 24 * 60 * 60 * 1000;
        let timestamp = maxDate - day14;

        let minDateData = new Date(timestamp);
        let minDate = self.getDateFormat(minDateData);
        return minDate;
    }

    self.getDateFormat = function(dateData){

        if(!dateData){
            dateData = new Date();
        }
        let yy = dateData.getFullYear();
        let mm = dateData.getMonth() + 1;
        let dd = dateData.getDate();

        let minDate = yy + '-' + self.setDateZero(mm) + '-' + self.setDateZero(dd);
        return minDate;
    }

    self.setDateZero = function (date) {
        return date < 10 ? '0' + date : date;
    }

    self.betRecord = function () {

        mcm.net.send({
            service: 'consumption',
            functionName: 'search',
            data: {
                providerId: self.input.lobby,
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val()
            }
        }).then(function (result) {
            self.param.betAmount = mcm.tool.formatCurrency(result['stats']['totalAmount']);
        })
    };

    self.savingRecord = function (value) {
        var record = mcm.page['rechargeRecord'];
        var every = 10;
        mcm.net.send({
            service: 'payment',
            functionName: 'getTopupHistory',
            data: {
                topUpType: self.input.type,
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * every),
                requestCount: every,
                sort: false
            }
        }).then(function (result) {
            var records = result['records'];
            var stats = result['stats'];
            $('.rechargeTable').html(template.compile(record)({list: records, stats: stats, topupStatus: self.topupStatus}));
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'savingRecord'
            }), '.page-controller');
            self.bindView();
        })
    };

    self.withdrawRecord = function (value) {
        var record = mcm.page['withdrawRecord'];
        var every = 10;
        mcm.net.send({
            service: 'payment',
            functionName: 'getBonusRequestList',
            data: {
                status: self.input.status,
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * every),
                requestCount: every,
                sort: false
            }
        }).then(function (result) {
            var records = result['records'];
            var stats = result['stats'];
            self.appendTemplate(template.compile(record)({list: records, stats: stats}),'.withdrawTable');
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'withdrawRecord'
            }), '.page-controller');
            self.bindView();
        })
    };

    self.promotionRecord = function (value) {
        var record = mcm.page['promotionRecord'];
        var every = 10;
        mcm.net.send({
            service: 'reward',
            functionName: 'getPlayerRewardList',
            data: {
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * every),
                requestCount: every,
                sort: false
            }
        }).then(function (result) {
            var records = result['records'];
            var stats = result['stats'];
            self.appendTemplate(template.compile(record)({list: records, stats: stats}),'.promotionTable');
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'promotionRecord'
            }), '.page-controller');
            self.bindView();
        })
    };

    /**
     * 取消提款提案
     * @param e
     */
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

    /**
     * 取消优惠活动申请
     * @param e
     */
    self.cancelPromotion = function (e) {

    };

    return self;
});
