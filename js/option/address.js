/**
 * Created by Ricky on 2017/4/19.
 */

define(function() {
    var main = function (parentNode, options) {
        var self = this;

        self.parentNode = $(parentNode);

        self._province = {
            dom: self.parentNode.find(options.province.dom),
            requestUrl: {
                service: 'payment',
                functionName: 'getProvinceList'
            },
            requestKey: 'provinceId',
            defaultOption: options.province.defaultOption
        };
        self._city = {
            dom: self.parentNode.find(options.city.dom),
            requestUrl: {
                service: 'payment',
                functionName: 'getCityList'
            },
            requestKey: 'cityId',
            defaultOption: options.city.defaultOption
        };
        self._area = {
            dom: self.parentNode.find(options.area.dom),
            requestUrl: {
                service: 'payment',
                functionName: 'getDistrictList'
            },
            defaultOption: options.area.defaultOption
        };

        if (!options.province.defaultOption)
            self._province.dom[0].options.add(new Option('选择城市', ''));

        self.initProvinceOptions();

        self._province.dom.change({
            next: self._city,
            current: self._province
        }, self.onChange.bind(self));
        self._city.dom.change({
            next: self._area,
            current: self._city
        }, self.onChange.bind(self));
        self._area.dom.change({
            current: self._area
        }, self.onChange.bind(self));
    };

    var proto = main.prototype;

    proto.initProvinceOptions = function() {
        var self = this;
        self.requestAddressList({
            dom: self._province.dom,
            requestUrl: self._province.requestUrl
        }, function() {
            if (self._province.defaultOption)
                self._province.dom.val(self._province.defaultOption).trigger('change');

            // 删除大陆之外的城市名称
            var val, i,
                indexGroup = [],
                original = self._province.dom[0];

            for (i = 0; i < original.options.length; i++) {
                val = Number(original.options[i].value);

                if (val > 650000)
                    indexGroup.push(original.options[i].index);
            }

            for (i = 0; i < indexGroup.length; i++) {
                original.options.remove(indexGroup[0]);
            }
        });
    };

    proto.onChange = function(e, parentKey) {
        var val = e.target.value;
        var param = e.data;
        var self = this;
        var requestData;

        if (parentKey && parentKey.ignore) // 如果是由validate插件触发的change事件 会加入ignore的key，此时忽略掉change事件避免重复发送请求
            return;

        if (param.next) {
            param.next.postData = param.next.postData || {};
            requestData = param.next.postData;

            requestData[param.current.requestKey] = val;

            $.extend(requestData, parentKey);

            self.requestAddressList(param.next, function() {
                if (param.next)
                    param.next.dom.trigger('change', [requestData]);
            }.bind(self, param));
        }
    };

    proto.requestAddressList = function(data, cb) {
        var self = this;
        var defaultOption = data.defaultOption;
        var cleanOptions = data.cleanOptions;

        mcm.net.send({
            service: data.requestUrl.service,
            functionName: data.requestUrl.functionName,
            data: data.postData
        }, true).then(function(result) {
            if (data.postData)
                data.dom[0].options.length = 0; // 清空选项

            addOptions(data.dom, result, defaultOption);
            cb && cb();
        }, function(code, error) {
            mcm.alert.sp('addressRequest', error, 'alert', [{name:'确定'}]);
        });
    };

    function addOptions(dom, data, defaultId) {
        var option;
        for (var i = 0; i < data.length; i++) {
            option = new Option(data[i].name, data[i].id);
            dom[0].options.add(option);
        }
        dom.val(defaultId);
    }

    return function(parentNode, options) {
        new main(parentNode, options);
    };
});