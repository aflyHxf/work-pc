/**
 * @namespace config
 */
define(function () {
    var DOM = {
        HEAD: 'head',
        FOOT: 'foot',
        MAIN: 'main',
        POPUP: 'popup'
    };

    /**
     * @name config
     * @example
     * 'home':{
     *   address:'js/model/home.html',
     *   renderer:DOM.MAIN,
     *   js:'../js/page/page.home'
     * }
     */
    return {
        /**
         * 模块文件
         */
        'ui-alert': {
            address: 'js/model/layer/alert.html'
        },
        'ui-normal': {
            address: 'js/model/layer/normal.html'
        },
        'progress': {
            address: 'js/model/ui/progress.html'
        },
        'reportController': {
            address: 'js/model/ui/reportController.html'
        },
        'pageController': {
            address: 'js/model/ui/pageController.html'
        },
        'rechargeRecord': {
            address: 'js/model/ui/rechargeRecord.html'
        },
        'withdrawRecord': {
            address: 'js/model/ui/withdrawRecord.html'
        },
        'promotionRecord': {
            address: 'js/model/ui/promotionRecord.html'
        },
        'createdRecord':{
            address:'js/model/ui/createdRecord.html'
        },
        'commissionRecord':{
            address: 'js/model/ui/commissionRecord.html'
        },
        'topupRecord':{
            address: 'js/model/ui/topupRecord.html'
        },

        'header': {
            address: 'js/model/header.html',
            renderer: DOM.HEAD,
            js: '../js/page/page.header'
        },

        'login': {
            address: 'js/model/popup/popup.login.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.login'
        },

        'loginbyphone': {
            address: 'js/model/popup/popup.loginbyphone.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.loginbyphone'
        },

        'register': {
            address: 'js/model/popup/popup.register.html',
            renderer: DOM.POPUP,
            nexus:['register','home','header'],
            js: '../js/page/popup/popup.register'
        },

        'headportrait': {
            address: 'js/model/popup/popup.headportrait.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.headportrait'
        },

        'contact': {
            address: 'js/model/popup/popup.contact.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.contact'
        },

        'ptLogin':{
            address:'js/model/ptLogin.html',
            renderer:DOM.MAIN,
            nexus:['ptLogin'],
            js:'../js/page/page.ptLogin'
        },

        'home': {
            address: 'js/model/home.html',
            renderer: DOM.MAIN,
            nexus: ['home', 'header'],
            js: '../js/page/page.home'
        },

        'openGame':{
            address:'js/model/openGame.html',
            renderer:DOM.MAIN,
            nexus:['openGame'],
            js:'../js/page/page.openGame'
        },

        'transaction': {
            address: 'js/model/transaction.html',
            renderer: DOM.MAIN,
            nexus: ['transaction', 'header'],
            js: '../js/page/page.transaction'
        },

        'wechatpay': {
            address: 'js/model/deposit/page.wechatpay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'wechatpay'],
            js: '../js/page/deposit/page.wechatpay'
        },

        'wechatpay_manual': {
            address: 'js/model/deposit/page.wechatpay.manual.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'wechatpay_manual'],
            js: '../js/page/deposit/page.wechatpay.manual'
        },

        'alipay_manual': {
            address: 'js/model/deposit/page.alipay.manual.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'alipay_manual'],
            js: '../js/page/deposit/page.alipay.manual'
        },

        'unionpay': {
            address: 'js/model/deposit/page.unionpay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'unionpay'],
            js: '../js/page/deposit/page.unionpay'
        },

        'onlinepay': {
            address: 'js/model/deposit/page.onlinepay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'onlinepay'],
            js: '../js/page/deposit/page.onlinepay'
        },

        'bankpay': {
            address: 'js/model/deposit/page.bankpay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'bankpay'],
            js: '../js/page/deposit/page.bankpay'
        },

        'alipay': {
            address: 'js/model/deposit/page.alipay.html',
            renderer: 'mainContent',
            depend: 'transaction',
            nexus: ['header', 'transaction', 'alipay'],
            js: '../js/page/deposit/page.alipay'
        },

        'withdrawals': {
            address: 'js/model/withdrawals.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'withdrawals'],
            js: '../js/page/page.withdrawals'
        },

        'promotions': {
            address: 'js/model/promotions.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'promotions', 'topupRecord'],
            js: '../js/page/page.promotions'
        },

        'proxy': {
            address: 'js/model/proxy.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'proxy'],
            js: '../js/page/page.proxy'
        },

        'mobile': {
            address: 'js/model/mobile.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'mobile'],
            js: '../js/page/page.mobile'
        },

        'account': {
            address: 'js/model/account.html',
            renderer: DOM.MAIN,
            nexus: ['header', 'account', 'headportrait'],
            js: '../js/page/page.account'
        },

        'overview': {
            address: 'js/model/account/overview.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'overview'],
            js: '../js/page/account/page.overview'
        },

        'transfer': {
            address: 'js/model/account/transfer.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'transfer'],
            js: '../js/page/account/page.transfer'
        },

        'report': {
            address: 'js/model/account/report.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'report', 'reportController', 'rechargeRecord', 'withdrawRecord', 'promotionRecord', 'pageController'],
            js: '../js/page/account/page.report'

        },

        'mailbox': {
            address: 'js/model/account/mailbox.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'mailbox'],
            js: '../js/page/account/page.mailbox'
        },

        'personal': {
            address: 'js/model/account/personal.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'personal'],
            js: '../js/page/account/page.personal'
        },

        'fastsearch': {
            address: 'js/model/account/fastsearch.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'fastsearch'],
            js: '../js/page/account/page.fastsearch'
        },

        'created_records': {
            address: 'js/model/account/created_records.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'created_records','createdRecord','pageController'],
            js: '../js/page/account/page.created.records'
        },

        'commission': {
            address: 'js/model/account/commission.html',
            renderer: 'contentNode',
            depend: 'account',
            nexus: ['header', 'account', 'commission','commissionRecord','pageController'],
            js: '../js/page/account/page.commission'
        },

        'modifypassword': {
            address: 'js/model/popup/popup.modifypassword.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.modifypassword'
        },

        'modifybank': {
            address: 'js/model/popup/popup.modifybank.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.modifybank'
        },

        'resetpassword': {
            address: 'js/model/popup/popup.resetpassword.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.resetpassword'
        },

        'registersubuser': {
            address: 'js/model/popup/popup.register.subuser.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.register.subuser'
        },

        'withdrawal': {
            address: 'js/model/popup/popup.withdrawal.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.withdrawal'
        },

        'record': {
            address: 'js/model/popup/popup.record.html',
            renderer: DOM.POPUP,
            js: '../js/page/popup/popup.record'
        }

        // 'example':{
        //     address:'js/model/foot.html',
        //     depend:'home',
        //     nexus:['head', 'foot'],
        //     renderer:DOM.FOOT,
        //     js:'js/page/home'
        // }
    }
});
