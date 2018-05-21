/**
 * Created by wildechen on 2017/5/16.
 */
define(['page','common'], function (page,common) {
    var self = new page('ptLogin');

    self.input = {
        name:'',
        password:'',
        captcha:''
    };

    self.onEnter = function () {
        window.location='htcmd:pageloaded';
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

            mcm.net.send({
                service: 'player',
                functionName: 'loginPlayerPartner',
                data: self.input
            }).then(function (result) {
                mcm.net.send({
                    service:'game',
                    functionName:'getGamePassword',
                    data:{
                        username:result[0].name,
                        providerId:44
                    }
                },true).then(function (result) {
                    var href = 'htcmd:login?&username='+result['gameUsername']+'&password='+result['password'];
                    window.location = href;
                }).fail(function (result) {
                    if(result)
                        mcm.alert.sp(self.url,result['errorMessage'],'alert',[{name:'确定'}]);
                })
            })
        });
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

    return self;
});