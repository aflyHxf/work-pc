/**
 * Created by wildeChen on 2016/12/27.
 */
define(['page'], function (page) {
    /**
     * @constructor
     * @augments page
     * @param url
     */
    function popUp(url) {
        page.call(this, url);

        this._super = proto;
    }

    popUp.prototype = Object.create(page.prototype);
    popUp.prototype.constructor = popUp;

    var proto = popUp.prototype;

    proto.onEnter = function () {
        var self = this;
        setTimeout(function () {
            self['popupViewNode'].addClass('fadeIn');
        }, 100);
    };

    proto.close = function () {
        var self = this;
        this['popupViewNode'].removeClass('fadeIn');
        setTimeout(function () {
            mcm.renderer.update_out(self.url);
        }, 600);
    };

    return popUp;

});