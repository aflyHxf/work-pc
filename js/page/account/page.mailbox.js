/**
 * Created by Ricky on 2017/4/10.
 */

define(['page'], function (page) {
    var self = new page('mailbox');

    var readMail = function (index, elem) {
        if (!self.data.mail[index].hasBeenRead) {
            var sendData = {mailObjId: ""};

            if (self.data.mail && self.data.mail[index] && self.data.mail[index]._id) {
                sendData.mailObjId = self.data.mail[index]._id;
            }

            mcm.net.send({
                service: 'player',
                functionName: 'readMail',
                data: sendData
            }).then(
                function(data) {
                    self.data.mail[index] = data;
                    var parentElem = elem.querySelector('div.message-title.row');
                    var dotElem = elem.querySelector('div > i');
                    parentElem.removeChild(dotElem);
                }, function(error) {

                }
            );
        }
    };
    var deleteMail = function (index) {
        var sendData = {mailObjId: ""};
  
        if (self.data.mail && self.data.mail[index] && self.data.mail[index]._id) {
          sendData.mailObjId = self.data.mail[index]._id;
        }
        mcm.net.send({
            service: 'player',
            functionName: 'deleteMail',
            data: sendData
        }).then(
            function(data) {
                if (data) {
                    self.data.mail.splice(index, 1);
                    var mailElem = self['listNode'].find('.slide[index="'+index+'"]')[0];
                    var parentElem = mailElem.parentElement;
                    parentElem.removeChild(mailElem);
                }
            }, function(error) {

            }
        );
    };

    self.request = function () {
        return {
            app:'mail',
            service:'player',
            functionName:'getMailList'
        }
    };

    self.onEnter = function() {
        var dom = self['listNode'].find('.slide');
        self['listNode'].on('click', '.slide', function () {
            var target = $(this);
            dom.not(this).removeClass('show');
            target.toggleClass('show');

            var index = target[0].getAttribute('index');
            var unread = target[0].className.indexOf('show') > -1 && self.data.mail[index].hasBeenRead !== true
                            ? true : false;
            if(unread) {
                readMail(index, target[0]);
            }
        });

        self['listNode'].on('click', '.slide .message-delete', function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            var target = $(this);
            var index = target[0].getAttribute('index');
            deleteMail(index, target[0]);
        });
    };
    return self;
});