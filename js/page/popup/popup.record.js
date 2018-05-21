/**
 * Created by Ricky on 2017/6/19.
 */

define(['popup', 'common', 'template'], function (popup, common, template) {
    var self = new popup('record');

    self._delay = true;

    self._pageCount = 3;

    self._pageBeginningFigure = 0;

    self._proposalIdGroup = [];

    self.request = function () {
        return {
            app: 'recordList',
            service: 'payment',
            functionName: 'getValidTopUpReturnRecordList',
            data: {
                requestCount: self._pageCount,
                startIndex: self._pageBeginningFigure,
                sort: false
            }
        };
    };

    self.onEnter = function () {
        if (!self.data.recordList.stats.totalCount) {
            self._super.onEnter.call(self);
            return self.hasNoRecords();
        }

        self.innerNode[0].innerHTML = template.compile(mcm.page["topupRecord"])(self);

        self.innerNode.on('change', 'input', function (e) {
            var target = $(e.target);
            var state = target.prop('checked');
            var value = target.val();

            //如果不开启多选则
            if (!self.data.reference.multipleChoice && self._proposalIdGroup.length) {
                self._proposalIdGroup.length = 0;
                self._proposalIdGroup.push(value);
            } else {
                if (state) {
                    self.insertChoiceToArray(value);
                } else {
                    self.deleteCanceledChoseFromArray(value);
                }
            }
        });

        self._super.onEnter.call(self);
    };

    self.previousPage = function () {
        if (self._pageBeginningFigure == 0) return;
        self._pageBeginningFigure -= self._pageCount;

        self.insertDataToHTML();
    };

    self.nextPage = function () {
        if (self.data.recordList.stats.totalCount - self._pageCount < self._pageBeginningFigure) return;
        self._pageBeginningFigure += self._pageCount;

        self.insertDataToHTML();
    };

    self.insertDataToHTML = function() {
        mcm.net.send({
            service: 'payment',
            functionName: 'getValidTopUpReturnRecordList',
            data: {
                requestCount: self._pageCount,
                startIndex: self._pageBeginningFigure,
                sort: false
            }
        }, true).then(function (result) {

            self.data.recordList = result;
            self.innerNode[0].innerHTML = template.compile(mcm.page["topupRecord"])(self);

            self.activateChoseNode(result);
        });
    };

    self.insertChoiceToArray = function (id) {
        var index;

        if (!self.data.reference.multipleChoice && self._proposalIdGroup.length)
            return self._proposalIdGroup;

        index = self._proposalIdGroup.indexOf(id);
        if (index < 0)
            self._proposalIdGroup.push(id);

        return self._proposalIdGroup;
    };

    self.deleteCanceledChoseFromArray = function (id) {
        var index = self._proposalIdGroup.indexOf(id);
        if (index >= 0)
            self._proposalIdGroup.splice(index, 1);
    };

    self.activateChoseNode = function (result) {
        for (var i = 0; i < result.records.length; i++) {
            if (self._proposalIdGroup.indexOf(result.records[i].proposalId) >= 0)
                self.innerNode.find('label').eq(i).click();
        }
    };

    self.onSubmit = function () {
        if (self._proposalIdGroup.length == 0)
            return mcm.alert.sp(self.url, '请选择一条记录后再提交！', 'alert', [{name: '确定'}]);

        self.close();

        mcm.schedule.dispatchEvent('topupRecordsResponse', false, self._proposalIdGroup);
    };

    self.hasNoRecords = function () {
        mcm.alert.sp(self.url, '您未存款。点击直接跳转到入款页面，入款成功的客户点击即可选择申请。', 'alert', [{name: '确定', then: function () {
            window.location.href = '/#alipay_manual';
            self.close();
        }}]);
    };

    return self;
});