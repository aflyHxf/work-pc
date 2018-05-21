/**
 * Created by Ricky on 2017/3/23.
 */

define(['page'], function (page) {
    var self = new page('transaction');

    self.onEnter = function() {
        var links = this.navBarNode.find('a');
        links.on('click', function() {
            links.removeClass('active' );
            $(this).addClass('active');
        });
    };

    return self;
});