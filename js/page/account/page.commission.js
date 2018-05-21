/**
 * Created by Ricky on 2017/4/17.
 */

define(['page', 'swiper', 'template', 'layDate'], function (page, swiper, template) {
    var self = new page('commission');

    self.input = {
        every:5
    };

    self.controller = template.compile(mcm.page['pageController']);

    self.onEnter = function () {
        new swiper(self.swiperNode, {
            scrollbar: self.scrollbarNode,
            freeMode: true,
            slidesPerView: 'auto',
            scrollbarHide: false
        });
    };

    self.date = function (e) {
        laydate({
            format: 'YYYY-MM-DD hh:mm',
            isclear: false,
            istime: true
        });
    };

    self.submit = function (value) {
        var record = mcm.page['commissionRecord'];
        if (self['startNode'].val() == '')
            return mcm.alert.sp('finance', '请选择开始时间', 'alert', [{name: '确定'}]);
        if (self['endNode'].val() == '')
            return mcm.alert.sp('finance', '请选择结束时间', 'alert', [{name: '确定'}]);

        mcm.net.send({
            service: 'partner',
            functionName: 'getPartnerCommission',
            data: {
                partnerId: mcm.cache.getPartnerId(),
                startTime: self['startNode'].val(),
                endTime: self['endNode'].val(),
                startIndex: typeof value == 'object' ? 0 : (!isNaN(value) ? Number(value) : (self[value].val() - 1) * self.input.every),
                requestCount: self.input.every
            }
        }).then(function (result) {
            //接入会员列表
            self.cache.result = result;
            var stats = result['stats'];
            self.appendTemplate(template.compile(record)(result), '.commissionReport');
            self.appendTemplate(self.controller({
                stats: stats,
                event: 'submit'
            }), '.page-controller');
            self.bindView();
            // Object.keys(self.param).forEach(function (key) {
            //     self.param[key] = result['total'][key].toFixed(2)
            // })
        })
    };

    return self;
});