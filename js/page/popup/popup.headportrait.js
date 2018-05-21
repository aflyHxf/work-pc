/**
 * Created by Ricky on 2017/4/7.
 */

define(['popup'], function (popup) {
    var self = new popup('headportrait');

    self.resource = false;
    
    self.onEnter = function () {
        self._super.onEnter.call(self);
        var imgs = self.photosGroupNode.find('.photo-box');
        self.photosGroupNode.on('click', '.photo-box', function() {
            var node = $(this);
            var img = node.find('img');
            var src = img[0].src;

            imgs.removeClass('active');
            node.addClass('active');

            self.resource = src;
        });
    };

    self.onSubmit = function () {
        if (!self.resource)
            return alert('您还未选择头像');

        mcm.schedule.dispatchEvent('changePortrait', false, {imgUrl: self.resource});
        self.close();
    };

    return self;
});