/**
 * Created by wildeChen on 2016/11/23.
 */
define(['page', 'promoConfig'], function (page, config) {
    var self = new page('home');

    self.cache = {
        broadcast: null,
        broadcastLooping: null,
        broadcastTime: null,
        broadcastMaxTime: null,
        count: null
    };

    self.request = function () {
        return {
            app: 'game',
            service: 'game',
            functionName: 'getGameGroupInfo',
            data: {
                platformId: mcm.platformId,
                code: 2,
                startIndex: 0,
                requestCount: 999
            }
        }
    };

    self.init = function () {
        self.gameList = config.game;
        self.appLink = config.appLink;
        self._super.init.call(self);
    };

    self.onEnter = function () {
        self.cache.broadcast = [];
        self.cache.broadcastLooping = false;
        self.cache.broadcastTime = 0;
        self.cache.broadcastMaxTime = 15;
        self.cache.count = 0;
        self.polling();
        mcm.schedule.addEventListener('enterGame', self.enterGameResponse, self);
        mcm.schedule.addTicker(self.url, self.broadcastLoop, self, 1000);
        mcm.schedule.addTicker(self.url, self.polling, self, 180000);
    };

    self.onExit = function () {
        // mcm.schedule.removeEventListener('enterGame',self);
        mcm.schedule.clearTicker(self.url);
        self._super.onExit.call(self);
    };

    self.polling = function () {
        mcm.net.send({
            service: 'platform',
            functionName: 'getPlatformAnnouncements'
        }, true).then(function (result) {
            self.cache.broadcast = result;
        })
    };

    self.broadcastLoop = function () {
        if (!self.cache.broadcast || self.cache.broadcast.length == 0)
            return;

        if (self.cache.broadcastLooping) {
            self.cache.broadcastTime++;
            if (self.cache.broadcastTime >= self.cache.broadcastMaxTime) {
                self.cache.broadcastLooping = false;
                self.cache.broadcastTime = 0;
                self['broadcastNode'].empty();
            }
        } else {
            var obj = self.cache.broadcast.shift();
            self.cache.broadcastLooping = true;
            self.cache.broadcastTime = 0;
            self.cache.count++;
            self.cache.broadcast.push(obj);
            obj['domId'] = 'broadcast' + self.cache.count;

            self['broadcastNode'].append('<div id="' + obj['domId'] + '">' + obj['content'] + '</div>');
            var info = $('#' + obj['domId']);
            var width = info.pxToNum('width');
            var parentWidth = $('#broadcast-holder').pxToNum('width');
            var time = parseInt(width.div(40));
            self.cache.broadcastMaxTime = time;
            info.css({'transform': 'translate3d('+'-' + (width+parentWidth+10) +'px, 0, 0)', 'transition-duration': time + 's'});
            info.css({'-webkit-transform': 'translate3d('+'-' + (width+parentWidth+10) +'px, 0, 0)', 'transition-duration': time + 's'});
        }
    };

    self.openRegisterPopup = function () {
        mcm.route.popUp('register');
    };

    self.play = function (e) {
        var gameId = "F2EF9407-6BC0-4020-8144-069E151E024C";
        // var gameId = $(e.target).data('gameid');
        if (mcm.cache.isLogin()) {
            // mcm.tool.browserInterceptor('openGame','id='+gameId+'&type=play');
            self.gameTab = window.open();
            mcm.net.load({
                service: 'game',
                functionName: 'getLoginURL',
                data: {
                    clientType: 1,
                    gameId: gameId,
                    clientDomainName: document.location.origin
                }
            }, 'enterGame')
        } else {
            mcm.route.popUp('login');
        }
    };

    self.demo = function (e) {
        var gameId = $(e.target).data('gameid');
        // mcm.tool.browserInterceptor('openGame','id='+gameId+'&type=demo');
        if (mcm.cache.isLogin()) {
            mcm.net.load({
                service: 'game',
                functionName: 'getTestLoginURL',
                data: {
                    clientType: 1,
                    gameId: gameId,
                    clientDomainName: document.location.origin
                }
            }, 'enterGame')
        } else {
            mcm.net.load({
                service: 'game',
                functionName: 'getTestLoginURLWithOutUser',
                data: {
                    clientType: 1,
                    gameId: gameId,
                    clientDomainName: document.location.origin
                }
            }, 'enterGame');
        }
    };

    //todo 进入游戏响应
    self.enterGameResponse = function (sender, eventData) {

        if (!eventData)
            return;

        if (eventData['status'] == 200) {
            mcm.cache.loadOverage();
            var url = eventData['data']['gameURL'];
            self.playGame(url)
            // mcm.alert.sp('home', '是否进入游戏', 'normal', [{
            //      name: '确定', then: function () {
            //          window.open(url);
            //      }
            // }, {name: '取消'}]);

        } else if (eventData['status'] == 430) {
            mcm.alert.sp('home', '请登录后再进行游戏', 'alert', [{
                name: '确定', then: function () {
                    mcm.route.popUp('login');
                }
            }, {name: '取消'}])
        } else {
            mcm.alert.sp('home', eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}])
        }
    };

    self.playGame = function(url){
        self.gameTab.location.href= url;
    };

    return self;
});
