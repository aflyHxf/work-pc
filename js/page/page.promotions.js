/**
 * Created by Ricky on 2017/3/31.
 */

define(['page', 'activity', 'promoConfig'], function (page, activity, promoConfig) {
    var self = new page('promotions');

    self.init = function () {
        self.data.promotion = activity;
        self.data.promoConfig = promoConfig;
        self.data.rewardStatus = {
          '0':'未达成',
          '1':'可领取',
          '2':'已领取'
        }
        self.data.week = {}
        self.convertSignInfo();
        self._super.init.call(self);
    };

    self.request = function () {
        return [{
            app: 'rewardList',
            service: 'reward',
            functionName: 'getRewardList'
        }]
    };

    self.onEnter = function () {
        self._articles = self.parentNode.find('.promotion-article-wrapper');
        var banners = self.parentNode.find('.promotion-banner');
        var slideDownBtns = self.parentNode.find('.btn-prime');

        self.checkAvailablePromotions();
        self.checkIfLogin();

        slideDownBtns.on('click', function() {
            var index = slideDownBtns.index(this);
            self.switchArticle(index);
        });

        banners.on('click', function() {
            var index = banners.index(this);
            self.switchArticle(index);
        });

        self._super.onEnter.call(self);
    };

    self.checkAvailablePromotions = function () {
        var keywords = Object.keys(self.data.promotion);

        for (var i = 0; i < keywords.length; i++) {
            for (var j = 0; j < self.data.rewardList.length; j++) {
                if (keywords[i] == self.data.rewardList[j].code){
                  self._articles.eq(i).find('.btn-submit').css('display', 'block');
                }else if(keywords[i] == 'vip'){
                  self._articles.eq(i).find('.btn-submit').css('display', 'block');
                }
            }
        }
    };

    self.checkIfLogin = function() {
        if (mcm.cache.isLogin()) {
            self._articles.find('.btn-survey').css('display', 'block');
        }
    }

    self.switchArticle = function(index) {
        var article = self._articles.eq(index);

        self._articles.not(article).removeClass('slideDown');
        article.toggleClass('slideDown');

        article.find('#day1').html(self.data.week[0]);
        article.find('#day2').html(self.data.week[1]);
        article.find('#day3').html(self.data.week[2]);
        article.find('#day4').html(self.data.week[3]);
        article.find('#day5').html(self.data.week[4]);
        article.find('#day6').html(self.data.week[5]);
        article.find('#day7').html(self.data.week[6]);
    };
    self.convertSignInfo = function(){
        var keywords = Object.keys(self.data.promotion);

        if(keywords.indexOf('qrlb') != -1){
            mcm.net.send({
                service: 'reward',
                functionName: 'getSignInfo',
                data: {
                    code: 'qrlb',
                    platformId: mcm.platformId
                }
            }).then(function (data) {
                if(data.list && data.list.length > 0){
                  data.list.forEach(function(sign, index){
                      self.data.week[index] = self.data.rewardStatus[sign.status];
                  })
                }
            },function(err){
                console.log(err);
            });
        }
    }

    self.applyCZTHA = function(e) {

        if (mcm.cache.isLogin()) {
            var code = 'chtha';
            var topUpData = { code: code };
            var promoConfig = self.data.promoConfig.activity || {};
            self.applyRewardWithTopup(code);
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试申请', 'alert', [{name: '确定', then: function () {
                mcm.route.popUp('login');
            }}]);
        }
    };

    self.applyCZTHB = function(e) {

        if (mcm.cache.isLogin()) {
            var code = 'chthb';
            var topUpData = { code: code };
            var promoConfig = self.data.promoConfig.activity || {};
            self.applyRewardWithTopup(code);
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试申请', 'alert', [{name: '确定', then: function () {
                mcm.route.popUp('login');
            }}]);
        }
    };

    self.applyPromotion = function(e) {
        var target = $(e.target);
        var functionName = target.data('functionname');

        if (mcm.cache.isLogin()) {
            var index = self.parentNode.find('li').index(target.parents('li'));
            var keywords = Object.keys(self.data.promotion);
            var code = keywords[index];
            var topUpData = { code: code };
            // if(code == "czth" || code == "firstdeposit"){
            var promoConfig = self.data.promoConfig.activity || {};
            if(promoConfig[code].type == 'PlayerTopUpReward'){
                //存送进
                self.applyRewardWithTopup(code);
            }else{
                if (functionName)
                    return self[functionName](code);
                self.applyRewardAPI(topUpData);
            }
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试申请', 'alert', [{name: '确定', then: function () {
                mcm.route.popUp('login');
            }}]);
        }
    };

    self.applyRewardWithTopup = function(code){

        mcm.net.send({
            service: 'reward',
            functionName: 'getSlotInfo',
            data: {
                code: code,
                platformId: mcm.platformId
            }
        }).then(function (data) {
            if(data){
                var topUpRecordId = data.topUpRecordId;
                var topUpData = { code: code };
                if(topUpRecordId){
                    topUpData.data = {
                        topUpRecordId: topUpRecordId
                    }
                }
                self.applyRewardAPI(topUpData);
            }
        },function(err){
            console.log(err);
        });
    };
    self.applyRewardAPI = function(topUpData){
        mcm.net.send({
            service: 'reward',
            functionName: 'applyRewardEvent',
            data: topUpData
        }).then(function () {
            mcm.alert.sp(self.url, '提交申请成功！', 'alert', [{name: '确定'}]);
        },function(err){
            console.log(err);
        });
    }

    self.applyUpgrade = function(){
          mcm.net.send({
              service: 'playerLevel',
              functionName: 'upgrade',
              data: {}
          }).then(function () {
            mcm.alert.sp(self.url, '提交优惠申请成功！', 'alert', [{name: "确定"}]);
      });
    };
    self.applyMbcsPromotion = function (code) {
        mcm.schedule.removeEventListener('topupRecordsResponse', self);
        mcm.schedule.addEventListener('topupRecordsResponse', function(e, data) {
            mcm.net.send({
                service: 'reward',
                functionName: 'applyRewardEvent',
                data: {
                    code: code,
                    data: {
                        topUpRecordId: data[0]
                    }
                }
            }).then(function () {
               mcm.alert.sp(self.url, '提交优惠申请成功！', 'alert', [{name: "确定"}]);
            });
        }, self);

        mcm.route.popUp('record', {
            multipleChoice: false
        });
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('topupRecordsResponse', self);
        self._super.onExit.call(self);
    };

    return self;
});
