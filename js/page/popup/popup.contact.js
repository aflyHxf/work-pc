/**
 * Created by Ricky on 2017/4/25.
 */

define(['popup', 'server'], function (popup, server) {
    var self = new popup('contact');
    self.data.csQQData = [];
    self.request = function() {
        return {
            app: 'getPlatformDetails',
            service: 'platform',
            functionName: 'getPlatformDetails'
        };
    };
    self.init = function () {
        self.data.csQQData = self.data.getPlatformDetails.csQQ.split(' ');
        self.data.firstQQ = self.data.csQQData[0] ? self.data.csQQData[0] : ' ';
        self._super.init.call(self);
    };
    self.getCode = function() {
        // phone callback link
        self.random = Math.random();
        return "https://www.phoneapichat.com/servlet/GetMaCode?random=" + self.random ;
    };

    self.changeCode = function(e) {
        e.target.src = self.getCode();
    };

    self.onEnter = function() {
        if (window.BizQQWPA && window.BizQQWPA.addCustom) {
            window.BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: self.data.getPlatformDetails.csQQ, selector: 'rightBar_qq'});
        } else {
            self.contactByQQNode.on('click', 'span, .icon',function() {
                var target = $(this);
                var number = target[0].getAttribute('qq');
                var url = 'http://wpd.b.qq.com/page/webchat.html?nameAccount=' + number;

                try {
                    window.open(url, '在线客服', 'resizable=0,width=653,height=663')
                } catch (e) {
                    console.log(e)
                }
            });
        }

        mcm.validate(self.formNode, {
            phone: 'mobile',
            captcha: 'smscode'
        }, function(data) {
            $.ajax({
                url: "https://www.phoneapichat.com/servlet/TelephoneApplication",
                dataType:"jsonp",
                type:"get",
                data:{
                    phone: data.phone,
                    captcha: data.captcha,
                    platform: "xbetbuyu",
                    random: self.random
                },
                success:function(e) {
                    var message;
                    message = e.code == "0" ? "正在呼叫，请等待..." : e.msg;
                    mcm.alert.sp(self.url, message, 'normal', [{name: '确定'}]);
                },
                error : function(e){
                    mcm.alert.sp(self.url, '网络异常,请稍后重试', 'normal', [{name: '确定'}]);
                }
            });
        });
        self._super.onEnter.call(self);
    };

    return self;
});
