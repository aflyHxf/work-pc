/**
 * Created by Ricky on 2017/4/4.
 */

define(['page'], function (page) {
    var self = new page('account');

    self._delay = true;

    self.param = {
        name: ''
    };

    self.onEnter = function () {
        var links = self['navNode'].find('.nav');
        self['navNode'].on('click', '.nav', function () {
            var target = $(this);
            if(target.hasClass('active'))
                return;
            links.not(this).removeClass('active');
            target.toggleClass('active');
            if(target.id == 'mail')
                target.removeClass('notice');

        });

        //todo 获取用户名
        self.param.name = mcm.cache.getUserAccount();

        mcm.schedule.addEventListener('changePortrait', self.changePortrait, self);
        mcm.schedule.addEventListener('updateUserName', self.updateUserName, self);
        mcm.schedule.addEventListener('notifyNewMail',self.mailNotice,self);
    };

    self.organMenu = function (e) {
        $(e.target).toggleClass('show');
    };

    self.openPortraitPopup = function () {
        mcm.route.popUp('headportrait');
    };

    /**
     * 新邮件通知
     * 服务器主动推送
     */
    self.mailNotice = function (sender,eventData) {
        if(!eventData)
            return;

        if(eventData['status'] == 200){
            $('#mail').addClass('notice');
        }
    };

    self.changePortrait = function (e, data) {
        self['portraitNode'][0].src = data.imgUrl;
        var photoUrl = data.imgUrl.match(/\/(\d+.jpg)/)[1];

        mcm.net.send({
            service: 'player',
            functionName: 'updatePhotoUrl',
            data: {
                photoUrl: photoUrl
            }
        }, true);
    };

    self.onExit = function () {
        mcm.schedule.removeEventListener('changePortrait');
        mcm.schedule.removeEventListener('updateUserName');
        self._super.onExit.call(self);
    };

    self.updateUserName = function (sender, data) {
        if (!data)
            return;

        self.param.name = data;
    };

    return self;
});
