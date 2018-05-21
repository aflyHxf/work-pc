/**
 * Created by wildechen on 2017/5/22.
 */
define(["page"], function (page) {
    var self = new page('openGame');

    self.onEnter = function () {
        var key = mcm.tool.getSearch();
        var id = key['id'];
        var type = key['type'];
        if(type == 'play'){
                mcm.net.load({
                    service: 'game',
                    functionName: 'getLoginURL',
                    data: {
                        clientType: 1,
                        gameId: id,
                        clientDomainName: document.location.origin
                    }
                }, 'enterGame')
        }else if(type == 'demo'){
            if (mcm.cache.isLogin()) {
                mcm.net.load({
                    service: 'game',
                    functionName: 'getTestLoginURL',
                    data: {
                        clientType: 1,
                        gameId: id,
                        clientDomainName: document.location.origin
                    }
                }, 'enterGame')
            } else {
                mcm.net.load({
                    service: 'game',
                    functionName: 'getTestLoginURLWithOutUser',
                    data: {
                        clientType: 1,
                        gameId: id,
                        clientDomainName: document.location.origin
                    }
                }, 'enterGame');
            }
        }

        mcm.schedule.addEventListener('enterGame',self.enterGame,self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('enterGame',self);
        self._super.onExit.call(self);
    };

    self.enterGame = function (sender,eventData) {
        if (eventData['status'] == 200) {
            var url = eventData['data']['gameURL'];
            self['gameNode'].attr('src',url);
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

    return self;
});