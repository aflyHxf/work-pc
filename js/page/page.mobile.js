/**
 * Created by Ricky on 2017/4/3.
 */

define(['page'], function (page) {
    var self = new page('mobile');

    self.onEnter = function() {
        self.parentNode.addClass('removeStyle');
    };

    self.onExit = function() {
        self._super.onExit.call(self);
        self.parentNode.removeClass('removeStyle');
    };

    return self;
});