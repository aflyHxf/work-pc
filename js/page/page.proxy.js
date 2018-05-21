/**
 * Created by Ricky on 2017/4/3.
 */

define(['page'], function (page) {
    var self = new page('proxy');

    self.onClick = function() {
        var user = mcm.cache.getUserInfoFromCache();

        if (user) {
            mcm.route.changeUrl('fastsearch');
            mcm.tool.browserInterceptor('fastsearch', 'pid=4', 0);
        } else {
            mcm.alert.sp(self.url, '请登陆后再尝试！', 'normal', [{
                name: '确定',
                then: function () {
                    mcm.route.popUp('login');
                }
            }, {
                name: '取消'
            }]);
        }
    };

    return self;
});
