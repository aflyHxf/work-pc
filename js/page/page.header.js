/**
 * Created by Ricky on 2017/3/17.
 * Modify by Wilde on 2017/5/17. add loop event after login,due to webSocket will disconnect every minute as non-request
 */
define(['page', 'cookie'], function (page, cookie) {
    var self = new page('header');

    self.onEnter = function () {
        mcm.schedule.addEventListener('loginResponse', self.loginResponse, self);
        mcm.schedule.addEventListener('loginCallback', self.loginCallback, self);
        mcm.cache.getLogin();

        var navs = self.navNode.find('.switch');
        self.navNode.on('click', '.switch', function (e) {
            if ($(this).hasClass('active'))
                return;
            navs.not(this).removeClass('active');
            $(this).toggleClass('active');
        });

        mcm.schedule.addTicker(self.url, self.loop, self, 30000);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('loginResponse', self);
        mcm.schedule.removeEventListener('loginCallback', self);
        self._super.onExit.call(self);
    };

    self.menuClickCount = function(){
      mcm.net.send({
          service: 'platform',
          functionName: 'clickCount',
          data: {
              platform: mcm.platformId,
              device:'PC玩家',
              pageName:'首页',
              buttonName:'首页'
          }
      })
    }

    self.loginClickCount = function(){
        mcm.net.send({
            service: 'platform',
            functionName: 'clickCount',
            data: {
                platform: mcm.platformId,
                device:'PC玩家',
                pageName:'登录',
                buttonName:'登录'
            }
        })
    }

    self.registerClickCount = function(){
      mcm.net.send({
          service: 'platform',
          functionName: 'clickCount',
          data: {
              platform: mcm.platformId,
              device:'PC玩家',
              pageName:'注册',
              buttonName:'注册'
          }
      })
    }

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            var token;
            var data = eventData['data'];

            if (eventData['token']) {
                //todo 登录行为
                token = eventData['token'];
                mcm.net.send({
                    service: 'player',
                    functionName: 'addClientSourceLog',
                    data: {
                        sourceUrl: document.referrer,
                        playerName: data.name,
                        clientType: "web",
                        accessType: "normal"
                    }
                }, true);
            }
            mcm.cache.setLogin(data, token);
        }
    };

    self.loginCallback = function (sender, eventData) {

        //todo 登录回调
        if (eventData) {
            self['loginNode'].show();
            self['unLoginNode'].hide();
        } else {
            self['unLoginNode'].show();
            self['loginNode'].hide();
            mcm.schedule.clearTicker(self.url);
        }

    };

    self.loop = function () {
        // if (cookie('token') != undefined) {
        mcm.net.load({
            service: 'partner',
            functionName: 'authenticate'
        }, 'null', true);
        // }
    };

    self.logout = function () {
        mcm.cache.setLogout();
        mcm.tool.browserInterceptor('home');
    };

    return self;
});
