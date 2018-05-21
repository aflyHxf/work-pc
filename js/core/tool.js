/**
 * Created by wildeChen on 2017/2/17.
 */
define(function () {
    return {

        extend: function () {
            //jquery扩展
            $.fn.pxToNum = function (str) {

                return parseInt($(this).css(str).substring(0, $(this).css(str).length - 2));

            };

            function accDiv(arg1, arg2) {

                var t1 = 0, t2 = 0, r1, r2;

                try {
                    t1 = arg1.toString().split(".")[1].length
                } catch (e) {
                }

                try {
                    t2 = arg2.toString().split(".")[1].length
                } catch (e) {
                }

                with (Math) {

                    r1 = Number(arg1.toString().replace(".", ""));

                    r2 = Number(arg2.toString().replace(".", ""));

                    return (r1 / r2) * pow(10, t2 - t1);

                }

            };

            //给Number类型增加一个div方法，调用起来更加方便。
            Number.prototype.div = function (arg) {
                return accDiv(this, arg);
            };


            function accMul(arg1, arg2) {

                var m = 0, s1 = arg1.toString(), s2 = arg2.toString();

                try {
                    m += s1.split(".")[1].length
                } catch (e) {
                }

                try {
                    m += s2.split(".")[1].length
                } catch (e) {
                }

                return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)

            }

            Number.prototype.mul = function (arg) {
                return accMul(arg, this);
            };

            function accAdd(arg1, arg2) {

                var r1, r2, m, c;

                try {
                    r1 = arg1.toString().split(".")[1].length
                } catch (e) {
                    r1 = 0
                }

                try {
                    r2 = arg2.toString().split(".")[1].length
                } catch (e) {
                    r2 = 0
                }

                c = Math.abs(r1 - r2);
                m = Math.pow(10, Math.max(r1, r2));
                if (c > 0) {
                    var cm = Math.pow(10, c);
                    if (r1 > r2) {
                        arg1 = Number(arg1.toString().replace(".", ""));
                        arg2 = Number(arg2.toString().replace(".", "")) * cm;
                    }
                    else {
                        arg1 = Number(arg1.toString().replace(".", "")) * cm;
                        arg2 = Number(arg2.toString().replace(".", ""));
                    }
                }
                else {
                    arg1 = Number(arg1.toString().replace(".", ""));
                    arg2 = Number(arg2.toString().replace(".", ""));
                }
                return (arg1 + arg2) / m

            }

            Number.prototype.add = function (arg) {
                return accAdd(arg, this);
            };

            //减法函数
            function accSub(arg1, arg2) {
                var r1, r2, m, n;
                try {
                    r1 = arg1.toString().split(".")[1].length
                } catch (e) {
                    r1 = 0
                }
                try {
                    r2 = arg2.toString().split(".")[1].length
                } catch (e) {
                    r2 = 0
                }
                m = Math.pow(10, Math.max(r1, r2));
                //last modify by deeka
                //动态控制精度长度
                n = (r1 >= r2) ? r1 : r2;
                return Number(((arg2 * m - arg1 * m) / m).toFixed(n));
            }

            //给number类增加一个sub方法，调用起来更加方便
            Number.prototype.sub = function (arg) {
                return accSub(arg, this);
            };

            Array.prototype.each = function (fn) {
                fn = fn || Function.K;
                var a = [];
                var args = Array.prototype.slice.call(arguments, 1);
                for (var i = 0; i < this.length; i++) {
                    var res = fn.apply(this, [this[i], i].concat(args));
                    if (res != null) a.push(res);
                }
                return a;
            };

            /**
             * 得到一个数组不重复的元素集合<br/>
             * 唯一化一个数组
             * @returns {Array} 由不重复元素构成的数组
             */
            Array.prototype.uniquelize = function () {
                var ra = new Array();
                for (var i = 0; i < this.length; i++) {
                    if (!ra.contains(this[i])) {
                        ra.push(this[i]);
                    }
                }
                return ra;
            };

            /**
             * 求两个集合的交集
             {%example
             <script>
                 var a = [1,2,3,4];
                 var b = [3,4,5,6];
                 alert(Array.intersect(a,b));
             </script>
              %}
             * @param {Array} a 集合A
             * @param {Array} b 集合B
             * @returns {Array} 两个集合的交集
             */
            Array.intersect = function (a, b) {
                return a.uniquelize().each(function (o) {
                    return b.contains(o) ? o : null
                });
            };

            /**
             * 求两个集合的并集
             {%example
             <script>
                 var a = [1,2,3,4];
                 var b = [3,4,5,6];
                 alert(Array.union(a,b));
             </script>
              %}
             * @param {Array} a 集合A
             * @param {Array} b 集合B
             * @returns {Array} 两个集合的并集
             */
            Array.union = function (a, b) {
                return a.concat(b).uniquelize();
            };

            /**
             * 求两个集合的并集
             {%example
             <script>
                 var a = [1,2,3,4];
                 var b = [3,4,5,6];
                 alert(Array.union(a,b));
             </script>
              %}
             * @param {Array} a 集合A
             * @param {Array} b 集合B
             * @returns {Array} 两个集合的并集
             */
            Array.minus = function (a, b) {
                return a.uniquelize().each(function (o) {
                    return b.contains(o) ? null : o
                })
            };

            Array.prototype.contains = function (element) {
                for (var i = 0; i < this.length; i++) {
                    if (this[i] == element) {
                        return true;
                    }
                }
                return false;
            };

            Array.prototype.indexOf = function (val) {
                for (var i = 0; i < this.length; i++) {
                    if (this[i] == val) return i;
                }
                return -1;
            };

            Array.prototype.remove = function (val) {
                for (var i = 0; i < this.length;) {
                    if (this[i] == val) {
                        this.splice(i, 1);
                    } else {
                        i++;
                    }
                }
            };

            Array.prototype.toObject = function (index) {
                var obj = {};
                for(var i = 0;i < this.length;i++){
                    if(typeof index == 'object'){
                        console.error('错误的参数类型');
                        return {}
                    }
                    if(index){
                        obj[this[i][index]] = this[i];
                    }else{
                        obj[i] = this[i];
                    }
                }
                return obj;
            };

            String.prototype.getLen = function () {
                if (this == null) return 0;
                return this.replace(/[^\x00-\xff]/g, "01").length;
            };

            if (!Object.keys)
                Object.keys = function (o) {
                    if (o !== Object(o))
                        throw new TypeError('Object.keys called on a non-object');
                    var k = [], p;
                    for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
                    return k;
                }

        },

        /**
         * 检查是否是空对象
         * @param obj
         * @returns {boolean}
         */
        isOwnEmpty: function (obj) {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    return false;
                }
            }
            return true;
        },

        /**
         * 获取查询字符串
         * @example ?t=1  返回{t:1}
         * @returns {{}}
         */
        getSearch: function () {
            var search = {};
            var address = location.hash;
            address = address.split('?');
            if (address.length > 1) {
                address = address[1].split('&');
                for (var i = 0, len = address.length; i < len; i++) {
                    var key = address[i].split('=');
                    search[key[0]] = key[1];
                }
            }

            return search;
        },

        /**
         * @function 更新html模板 并重新绑定 data-element 和 data-events
         * @param  {object} pageClass 实例化后的Page对象{@link page} 作为绑定对象
         * @param  {String} html html模板字符串
         * @param  {String} node 插入的dom节点
         */
        mergeContextTemplate: function (pageClass, html, node) {
            var nodeList;
            html = html.replace(/[\r\n]/g, '');
            if(!node)
                return;

            if(node.indexOf('.') != -1){
                nodeList = document.getElementsByClassName(node.substring(1));
                nodeList = Array.apply(null,nodeList);
            }else if(node.indexOf('#') != -1){
                nodeList = document.getElementById(node.substring(1));
                nodeList = [nodeList];
            }else{
                nodeList = document.getElementsByTagName(node);
                nodeList = Array.apply(null,nodeList);
            }

            if(!nodeList)
                return console.dir('无法获取模板要插入的节点 %s',node);

            nodeList.forEach(function (element) {
                if(!element)
                    return;

                element.innerHTML = html;
                pageClass.bindDomNode(element);
                pageClass.bindEvents(element);
            });
        },

        /**
         * 黑名单验证,提供字符串或数组形式的list,提供的字符串或数组中的字符串任意一个在黑名单中将返回false
         * @param list
         * @param staff
         */
        blackListValid: function (list, staff) {
            if (list instanceof Array)
                return Array.intersect(list, staff).length == 0;
            else
                return !staff.contains(list)
        },

        /**
         * @method 输入当前index和每页数量,输出当前所在页数
         * @description start from 0
         * @param now
         * @param every
         * @returns {number}
         */
        pageCalculate: function (now, every) {
            return ((now - (now % every)) / every) + 1;
        },

        /**
         * @method 输入总共条数和每页数量,输出总页数
         * @param total
         * @param every
         * @returns {number}
         */
        pageMax:function (total,every) {
            return Math.ceil(total / every);
        },

        /**
         * 输入总共秒数返回一个时间数组
         * @param {number} second
         * @param {Boolean} [noZero] true则个位数时间不会在前面加0
         * @returns {*[]}
         */
        countdown: function (second, noZero) {
            var day = '', hour = '', minute = '';
            if (second >= 86400) {
                day = Math.floor(second / 86400);
                day += '';
                second = second % (86400);
            }
            if (second >= 3600) {
                hour = Math.floor(second / 3600);
                hour += '';
                hour = hour.length < 2 && !noZero ? ('0' + hour) : hour;
                second = second % 3600;
            }
            if (second >= 60) {
                minute = Math.floor(second / 60);
                minute += '';
                minute = minute.length < 2 && !noZero ? ('0' + minute) : minute;
                second = second % 60;
            } else {
                minute = '00';
            }
            if (second >= 0) {
                second += '';
                second = second.length < 2 && !noZero ? ('0' + second) : second;
            }
            return [day, hour, minute, second];
        },

        /**
         * 将一个日期转换成 yy-mm-dd hh-mm-ss 格式的字符串
         * @param {Date} obj 日期对象
         * @param {Number} [type] 可选对象,0或不传将返回完成的日期字符串,传入1将返回年月日
         * @returns {*}
         */
        transferDateToString: function (obj, type) {
            if (!obj instanceof Date) {
                console.log('传入对象错误,对象不是一个日期对象', obj);
                return null;
            }
            obj = new Date(obj);

            var year = obj.getFullYear();
            var month = obj.getMonth() + 1;
            month += '';
            if (month.length == 1)
                month = '0' + month;
            var day = obj.getDate();
            day += '';
            if (day.length == 1)
                day = '0' + day;
            var hour = obj.getHours();
            hour += '';
            if (hour.length == 1)
                hour = '0' + hour;
            var minute = obj.getMinutes();
            minute += '';
            if (minute.length == 1)
                minute = '0' + minute;
            var second = obj.getSeconds();
            second += '';
            if (second.length == 1)
                second = '0' + second;

            if (!type)
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

            if (type == 1)
                return year + '-' + month + '-' + day;

        },

        /**
         * @description 获取距离今日的某一个天日期
         * @param {Number} [days] 传入距离今日的天数,不传则默认为今日
         * @param {Number} type 用来选择获取的日期是否包含时分秒 1不包含 0为包含,只传一个参数时传入的是{@link type}
         * @returns {*}
         */
        getOneDayBeforeToday:function (days, type) {
            if (arguments.length == 1) {
                type = days;
                days = 0;
            }
            var today = new Date();
            today.setDate(today.getDate() + days);
            return this.transferDateToString(today, type);
        },

        /**
         * 获取今日前的某一个天日期,若不传值则获取今天的日期
         * @description 返回的日期格式为标准日期标签的格式
         * @example 2016-08-10 0:0:0
         * @param {Number} [days] 距离今天的天数,不传或者0则为今天
         * @param {Number} [type] 设置返回的时间规则,0或不传为当前时间,1为0时0分0秒,2为23时59分59秒
         * @returns {*}
         */
        getOneDateBeforeToday: function (days, type) {
            var num = days || 0;

            if (typeof(num) != 'number') {
                console.log('传入参数类型不是数字', num);
                return null;
            }

            if (String(num).indexOf('.') != -1) {
                console.log('传入参数类型不是整数', num);
                return null;
            }

            if (String(num).indexOf('-') != -1) {
                console.log('不能传入负数', num);
                return null;
            }

            var today = new Date();
            today.setDate(today.getDate() - num);
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            month += '';
            if (month.length == 1)
                month = '0' + month;
            var day = today.getDate();
            day += '';
            if (day.length == 1)
                day = '0' + day;
            var hour = today.getHours();
            var minute = today.getMinutes();
            var second = today.getSeconds();

            if (type) {
                if (type === 1)
                    return year + '-' + month + '-' + day + ' 00:00:00';
                else
                    return year + '-' + month + '-' + day + ' 23:59:59';
            } else {
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            }
        },

        /**
         * 格式化金钱数字
         * @param num
         * @returns {string}
         */
        formatCurrency: function (num) {
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num))
                num = "0";
            var sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            var cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10)
                cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' +
                    num.substring(num.length - (4 * i + 3));
            return (((sign) ? '' : '-') + num + '.' + cents);
        },

        openApplication: function (url, fail) {
            if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                location.href = url;
            } else {
                var timeout, t = 1000, hasApp = true;
                var t1 = Date.now();
                var ifr = document.createElement("iframe");
                ifr.setAttribute('src', url);
                ifr.setAttribute('style', 'display:none');
                document.body.appendChild(ifr);
                timeout = setTimeout(function () {
                    var t2 = Date.now();
                    if (!t1 || t2 - t1 < (t + 100)) {
                        hasApp = false;
                    }
                }, t);
                setTimeout(function () {
                    if (!hasApp) fail && fail();
                    document.body.removeChild(ifr);
                }, 2000);
            }
        },
        /**
         * 分析当前url的结构
         * @param  {string} [url] url字符串
         * @return {*}
         */
        url: function (url) {
            var dm, hs, qu;
            url = url || location.href;
            dm = url.match(/^[^?#]+/i)[0];
            url = url.slice(dm.length);
            if (url.match(/^\?[^#]+/i)) {
                qu = url.match(/^\?[^#]+/i)[0];
                url = url.slice(qu.length);
                if (url.match(/^#[^?]+/i)) {
                    hs = url.match(/^#[^?]+/i)[0];
                }
            } else if (url.match(/^#[^?]+/i)) {
                hs = url.match(/^#[^?]+/i)[0];
                url = url.slice(hs.length);
                if (url.match(/^\?[^#]+/i)) {
                    qu = url.match(/^\?[^#]+/i)[0];
                }
            }
            url = {
                domain: dm,
                query: (qu || '').slice(1),
                hash: (hs || '').slice(1),
                param: {},
                toString: function () {
                    var key, ref, val;
                    qu = '';
                    ref = this.param;
                    for (key in ref) {
                        val = ref[key];
                        qu += key;
                        if (val !== void 0 && val !== null) {
                            qu += '=' + val + '&';
                        }
                    }
                    if (qu) {
                        qu = '?' + (key ? qu.slice(0, -1) : qu);
                    }
                    hs = this.hash ? '#' + this.hash : '';
                    return this.domain + qu + hs;
                }
            };
            if (url.query) {
                url.query.replace(/(?:^|&)([^=&]+)(?:=([^&]*))?/gi, function (a, b, d) {
                    return url.param[b] = d;
                });
            }
            return url;
        },

        /**
         * @description 对url跳转进行浏览器历史拦截
         * @param {String} url 将要更新或替换页面的url
         * @param {String} [search] 将要更新或替换页面的查询字符串
         * @param {Number} [type] 可选参数 0表示新增记录,1表示替换记录,2表示替换记录并弹窗,3表示hash方法
         * @param {Object} [state] 可选参数 替换或新增页面时上一页的url和查询字符串
         */
        browserInterceptor: function (url, search, type, state) {
            if (!type) {
                history.pushState(state || {}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            } else if (type == 1) {
                history.replaceState(state, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            } else if (type == 2) {
                history.replaceState(state, '', '#');
                mcm.route.popUp(url);
            } else if (type == 3){
                history.pushState(state || {}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.hashChange();
            }
        },

        /**
         * @description 拦截事件后的返回事件(通常用于登录成功后返回之前页面)
         */
        browserBack: function () {
            if (!this.isOwnEmpty(history.state)) {
                var url = history.state.url;
                var search = history.state.search;
                history.replaceState({}, '', '#' + url + (search ? '?' + search:''));
                mcm.route.changeUrl(url);
            } else {
                history.back();
            }
        },

        insertObject: function (origin, target) {
            for (var i in target) {
                if (origin.hasOwnProperty(i)) origin[i] = target[i];
            }
        },

        formatDate: function(date, format) {
            if (!format) {
                format = date;
                date = new Date();
            }
            var date = new Date(date);
            var y = date.getFullYear(),
                m = this.completeNum(date.getMonth() + 1),
                d = this.completeNum(date.getDate()),
                h = this.completeNum(date.getHours()),
                i = this.completeNum(date.getMinutes()),
                s = this.completeNum(date.getSeconds());

            return format.replace('y', y).replace('m', m).replace('d', d).replace('h', h).replace('i', i).replace('s', s);
        },

        completeNum: function(num) {
            return num < 10 ? "0" + num : num;
        },

        objectCompare:function (origin,target) {
            for(var i in origin){
                if(origin[i] != target[i])
                    return false;
            }
            return true;
        },

        formToObject: function(form, trim) {
            var data;
            if (!form.serializeArray) {
                form = $(form);
            }
            data = {};
            if (trim === void 0) {
                trim = 1;
            }
            $.each(form.serializeArray(), function(i, field) {
                return data[field.name] = trim ? $.trim(field.value) : field.value;
            });
            return data;
        }
    }
});
