var mcm = mcm || {};

require.config({
    urlArgs: "v=" + (new Date().getTime() / 60000).toFixed(),

    waitSeconds: 0,

    paths: {

        //服务器配置
        'server': '../server',

        //路由配置文件
        'config': 'config',

        //html打包文件
        'app': 'app',
        //活动HTML文件
        'activity': '../activity',
        //活动配置文件
        'promoConfig': '../config',

        //项目配置文件
        'business': 'business',

        //core文件
        'engine': 'core/engine',
        'page': 'core/page',
        'renderer': 'core/renderer',
        'route': 'core/route',
        'tool': 'core/tool',

        //lib文件
        'jquery': 'lib/jquery',
        'template': 'lib/artTemplate',

        //module文件
        'cache': 'module/cache',
        'schedule': 'module/schedule',
        'net': 'module/socket_callback',

        //扩展文件
        'ui': 'option/ui',
        'load': 'option/load',
        'popup': 'option/popup',
        'progress': 'option/progress',
        'validateForm': 'option/validate',
        'address': 'option/address',

        //插件
        '_layer': 'plugin/_layer',
        'common': 'plugin/common',
        'swiper': 'plugin/swiper.jquery',
        'layDate': 'plugin/laydate',
        'clipboard': 'plugin/clipboard',

        //可选插件
        'cookie': 'plugin/cookie'
    },

    shim: {
        'template': {
            exports: 'template'
        },
        'layDate': {
            exports: 'laydate'
        }
    }
});

require(['jquery', 'engine', 'load', 'schedule', 'net', 'template', 'tool', 'server', 'cache', 'ui', 'validateForm', 'business', 'common'],
function ($, root, load, schedule, net, template, tool, config, cache, ui, validateForm, business, common) {
    function getWsUrl() {
        const url = document.createElement('a');
        url.setAttribute('href', window.location.href);

        var protocol = url.protocol;
        var socketProtocol;
        var webSocketUrl;

        if(config.serverIp === 'default') {
            if(protocol == 'https:'){
                socketProtocol = 'wss://';
            }else{
                socketProtocol = 'ws://';
            }

            if(url.hostname == 'localhost'){
                webSocketUrl = socketProtocol + url.hostname + ':9280'
            }else{
                webSocketUrl = socketProtocol + url.hostname + '/websocket'
            }
        } else {
            webSocketUrl = config.serverIp;
        }
        return webSocketUrl;
    }

    $(function () {
        mcm = root;

        mcm.config.LocalMode = 1;

        config.serverIp = getWsUrl();

        //platform id
        mcm.platformId = config.platformId;

        //version number
        mcm.version = '0.0.1';

        mcm.resources = [
            'ui-alert',
            'ui-normal',
            'progress'
        ];

        // 登陆拦截hash列表
        mcm.blackList = [
            'wechatpay',
            'alipay_manual',
            'wechatpay_manual',
            'alipay',
            'unionpay',
            'onlinepay',
            'bankpay',
            'withdrawals',
            'overview'
        ];
        // mcm.blackList = [
        //     [
        //         'wechatpay',
        //         'alipay_manual',
        //         'alipay',
        //         'unionpay',
        //         'bankpay',
        //         'withdrawals',
        //         'overview'
        //     ],
        //     [
        //         'proxy'
        //     ]
        // ];

        //todo 设置路由黑名单的回调事件
        mcm.blackListCallback = function (value, search) {
            if (!mcm.initialization)
                return mcm.tool.browserInterceptor('home', '');
            mcm.tool.browserInterceptor('login', '', 2, {url: value, search: search});
            // mcm.tool.browserInterceptor('login','n=会员登录',1,{url:value,search:search});
        };

        // mcm.blackListCallback = [
        //     function (value, search) {
        //         if (!mcm.initialization)
        //             return mcm.tool.browserInterceptor('home', '');
        //         mcm.tool.browserInterceptor('login', '', 2, {url: value, search: search});
        //     },
        //     function () {
        //         mcm.tool.browserInterceptor('home', '');
        //     }
        // ];

        //todo 设置公共通信错误处理
        mcm.communicationError = function (url, result) {
            if (result)
                mcm.alert.sp(url, result['errorMessage'] || '未知错误', 'alert', [{name: '确定'}]);
        };

        mcm.getSmsSettings = function(input) {
            function isAllSmsTrue (smsArray) {
                var user = mcm.cache.getUserInfoFromCache();
                var isAllTrue = true
                smsArray.forEach(v => {
                    if(!user.smsSetting[v]) {
                        isAllTrue = false;
                    }
                });
                return isAllTrue;
            }
            if(input) {
                var smsSettingsList = {};
                var smsSettings = {};
                var smsParentList = {};

                input.forEach(v => {
                    if(v.smsParentSmsId == -1) {
                        smsSettingsList[v.smsName] = [];
                        smsParentList[v.smsId] = v.smsName;
                    }
                });
                input.forEach(v => {
                    if(v.smsParentSmsId != -1) {
                        smsSettingsList[smsParentList[v.smsParentSmsId]].push(v.smsName);
                    }
                });
                for(var i in smsSettingsList) {
                    smsSettings[i] = {
                        list: []
                    };
                    smsSettings[i].list = smsSettingsList[i];
                    smsSettings[i].isTrue = isAllSmsTrue(smsSettings[i].list);
                }
                smsSettingsList = {};
                return smsSettings;
            }
        };

        //todo 挂载加载管理器
        mcm.load = new load();
        //todo 挂载弹窗组件
        mcm.alert = new ui.alert();
        //todo 挂载缓存组件
        mcm.cache = new cache();
        //todo 挂载任务管理组件
        mcm.schedule = new schedule();
        // todo 挂载socket数据交互组件
        mcm.net = new net(getWsUrl(), mcm);
        // todo 挂载表单验证组件
        mcm.validate = validateForm.validate;


        mcm.business = business;

        //cache module initialize
        mcm.cache.init(mcm.schedule,'player');

        //engine initialize
        mcm.init();

        //extend function of validate at once
        validateForm.addInputRecalls({
            inputSuccess: function (input) {
                input.addClass('checked').removeClass('error');
            },
            inputFail: function (input, error) {
                input.addClass('error').removeClass('checked');
                mcm.alert.sp('formValidate', error, 'alert', [{name: '确定'}]);
            }
        });

        template.helper('$console', function (data) {
            console.log(data)
        });

        template.helper('$isEmpty', function (obj) {
            return mcm.tool.isOwnEmpty(obj);
        });

        template.helper('$contain', function (index, array) {
            return array.contains(index);
        });

        template.helper('$tool', function () {
            return tool;
        });

        template.helper('$getCommonVal', function () {
            return window;
        });

        template.helper('$business', function () {
            return mcm.business;
        });

        template.helper('$mcm', function () {
            return mcm;
        });

        template.helper('$common', function () {
            return common;
        })
    })
});
