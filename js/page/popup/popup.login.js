/**
 * Created by Ricky on 2017/3/22.
 */

define(['popup', 'common'], function (popup, common) {
    var self = new popup('login');

    self.attempt = 0;

    self.input = {
        name: null,
        password: null,
        captcha: ''
    };
    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };

    self.onEnter = function () {
        mcm.validate(self['formNode'], {
            name: {
                error: '请输入用户名',
                check: function(s) {
                    return Boolean(s);
                }
            },
            password: 'password'
        }, function() {

            if(self.attempt > 3){
                var value = $.trim(self.input.captcha);
                var result =  value && /^\d{4}$/i.test(value);
                if(result != true)
                    return mcm.alert.sp(self.url,'您输入的验证码有误，请输入4位验证码','alert',[{name:'确定'}]);
            }

            mcm.net.load({
                service: 'player',
                functionName: 'login',
                data: self.input
            },'loginResponse')
        });

        if(self.attempt > 3){
            self.checkValidCode();
            self['captchaNode'].show();
        }

        mcm.schedule.addEventListener('loginResponse',self.loginResponse,self);
        self._super.onEnter.call(self);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('loginResponse',self);
        self._super.onExit.call(self);
    };

    self.checkValidCode = function () {
        mcm.net.send({
            service: 'player',
            functionName: 'captcha'
        }, true).then(function (result) {
            var code = common.arrayBufferToBase64(result.data);
            self['validImg'].attr('src', 'data:image/png;base64,' + code);
        })
    };

    self.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            mcm.route.changeUrl('#home', true);
            mcm.alert.sp(self.url, '登录成功', 'normal', [{name: '确定'}], 2);
            mcm.renderer.update_out(self.url);
            self.attempt = 0;
            if (!mcm.tool.isOwnEmpty(history.state)) {
                var url = history.state.url;
                var search = history.state.search;
                history.replaceState({}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            }
        } else {
            mcm.alert.sp(self.url, eventData['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
            if (eventData['data'] && eventData['data']['noOfAttempt']){
                self.attempt = eventData['data']['noOfAttempt'];
                if(self.attempt > 3){
                    self.checkValidCode();
                    self['captchaNode'].show();
                }
            }
        }
    };

    self.openRegisterPopup = function () {
        mcm.route.popUp('register');
    };

    self.switchLoginByPhone = function() {
        mcm.route.popUp('loginbyphone');
    };

    self.openRestPasswordPopup = function() {
        mcm.route.popUp('resetpassword');
    };

    return self;
});
