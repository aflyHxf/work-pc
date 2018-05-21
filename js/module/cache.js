//cache模块
var mcm = mcm || {};
define(['cookie', 'common'], function (cook, common) {
    var cache = function () {

        this._username = null;
        this._realName = null;
        this._overage = null;
        this._lockCredit = null;
        this._pendingCredit = null;
        this._playerLevel = null;
        this._allLevel = null;
        this._isLogin = false;
        this._isPartnerLogin = false;
        this._playerId = null;
        this._partnerId = null;
        this._provider = [];
        this._bankList = {};
        this._userInfo = null;
        this._partnerInfo = null;
        this._partnerName = null;
        this._partnerRealName = null;
        this._bank = null;
        this._partnerBank = null;
        this._init = true;

    };

    var proto = cache.prototype;

    proto.isLogin = null;

    proto.setLogin = null;

    proto.getLogin = null;

    proto.setLogout = null;

    proto.updateUserInfo = null;
    /**
     * @param {object} target
     * @param {string} [type]
     */
    proto.init = function (target, type) {

        if (!target)
            console.error('未加载缓存组件所依赖的事件管理器');

        /**
         * 根据type来设置cache事件针对的用户类型
         * @type {string|string}
         */
        type = type || 'player';
        switch (type) {
            case 'player':
            case 'separate':
                proto.setLogin = proto._setPlayerLogin;
                proto.isLogin = proto._isPlayerLogin;
                proto.getLogin = proto._getPlayerLogin;
                proto.setLogout = proto._setPlayerLogout;
                proto.updateUserInfo = proto._updatePlayerInfo;
                break;
            case 'combine':
                proto.setLogin = proto._setCombinedLogin;
                proto.isLogin = proto._isPlayerLogin;
                proto.getLogin = proto._getCombinedLogin;
                proto.updateUserInfo = proto._updateCombinedInfo;
                proto.setLogout = proto._setCombinedLogout;
                break;
            case 'partner':
                proto.setLogin = proto.setPartnerLogin;
                proto.isLogin = proto.isPartnerLogin;
                proto.getLogin = proto.getPartnerLogin;
                proto.updateUserInfo = proto.updatePartnerInfo;
                proto.setLogout = proto.setPartnerLogout;
                break;
        }


        /**
         * 登录相关注册
         */
        target.addEventListener('loginStatus', this._getPlayerInfo, this);
        target.addEventListener('loginPStatus', this._getPartnerInfo, this);
        target.addEventListener('loginCStatus', this._getCombinedInfo, this);
        target.addEventListener('loginResponse', this.loginResponse, this);

        /**
         * 用户等级信息
         */
        target.addEventListener('allLevel', this.setAllLevel, this);
        /**
         * 银行列表
         */
        target.addEventListener('bankList', this.setBankList, this);
        /**
         * 余额管理
         */
        target.addEventListener('loadOverage', this.loadOverage, this);

    };

    /**
     * 玩家登录
     * @param pack
     * @param token
     */
    proto._setPlayerLogin = function (pack, token) {
        var user = pack;

        this._username = user['name'];
        this._realName = user['realName'];
        this._playerLevel = user['playerLevel']['value'];
        this._playerId = user['playerId'];
        this._isLogin = true;
        this._userInfo = user;

        this._init = false;
        mcm.schedule.dispatchEvent('loginDelay', false, null);
        mcm.schedule.dispatchEvent('loadingDelay', false, null);


        // this.constUpdate();
        this.loginBroadcast(pack, token);

        //更新银行卡信息
        this._setPlayerBankInfo();

        /**
         * 更新余额
         */
        this.setOverage(user['validCredit'], user['lockedCredit'], user['pendingRewardAmount']);
    };

    /**
     * 代理登录
     * @param pack
     * @param token
     */
    proto.setPartnerLogin = function (pack, token) {
        var user = pack;

        this._partnerName = user['partnerName'].substring(1);
        this._partnerRealName = user['realName'];
        this._isPartnerLogin = true;
        this._partnerInfo = user;
        this._partnerId = user['partnerId'];

        this._init = false;
        mcm.schedule.dispatchEvent('loginDelay', false, null);
        mcm.schedule.dispatchEvent('loadingDelay', false, null);


        // this.constUpdate();
        this.loginBroadcast(pack, token);

        //更新银行卡信息
        this._setPartnerBankInfo();

        /**
         * 更新余额
         */
        this.setOverage(user['validCredit'], user['lockedCredit'], user['pendingRewardAmount']);
    };

    /**
     * 合并登录
     * @param pack
     * @param token
     * @private
     */
    proto._setCombinedLogin = function (pack, token) {
        var user = pack instanceof Array ? pack[0] : pack;
        var partner = pack instanceof Array ? pack[1] : pack;

        this._username = user['name'];
        this._realName = user['realName'];
        this._playerLevel = user['playerLevel']['value'];
        this._playerId = user['playerId'];
        this._isLogin = true;
        this._userInfo = user;
        this._partnerInfo = partner;
        this._partnerId = partner['partnerId'];

        this._init = false;
        mcm.schedule.dispatchEvent('loginDelay', false, null);
        mcm.schedule.dispatchEvent('loadingDelay', false, null);


        // this.constUpdate();
        this.loginBroadcast(pack, token);

        //更新银行卡信息
        this._setPlayerBankInfo();
        this._setPartnerBankInfo();

        /**
         * 更新余额
         */
        this.setOverage(user['validCredit'], user['lockedCredit'], user['pendingRewardAmount']);
    };

    /**
     * 登录后的常量加载
     */
    proto.constUpdate = function () {
        if (!this._allLevel)
            mcm.net.load({
                service: 'playerLevel',
                functionName: 'getAllLevel',
                data: {
                    playerId: this._playerId
                }
            }, 'allLevel', true);

        if (!this.hasBankList())
            mcm.net.load({
                service: 'payment',
                functionName: 'getBankTypeList'
            }, 'bankList', true);
    };

    /**
     * 登录后广播
     */
    proto.loginBroadcast = function (pack, token) {
        /**
         * 广播用户名
         */
        mcm.schedule.dispatchEvent('updateUserName', false, this._username);
        /**
         * 更新界面登录状态
         */
        mcm.schedule.dispatchEvent('loginCallback', false, this._isLogin);
        mcm.schedule.dispatchEvent('loginPCallback', false, this._isPartnerLogin);

        /**
         * 存储id与token至cookies
         */
        if (token && cook) {
            cook('token', token);
            var playerId = pack instanceof Array ? pack[0]['playerId'] : pack['playerId'];
            if (playerId)
                cook('playerId', playerId);
            var partnerId = pack instanceof Array ? pack[1]['partnerId'] : pack['partnerId'];
            if (partnerId)
                cook('partnerId', partnerId);
        } else {
            if (!cook)
                console.warn('未加载cookies组件,无法保存cookies');
        }
    };

    /**
     * 用户登录状态
     * @returns {boolean|*}
     */
    proto._isPlayerLogin = function () {
        return this._isLogin;
    };

    /**
     * 代理登录状态
     * @returns {boolean|*}
     */
    proto.isPartnerLogin = function () {
        return this._isPartnerLogin;
    };

    proto._getPlayerLogin = function (callback) {
        if (cook('token') != undefined) {
            var self = this;
            mcm.net.send({
                service: 'player',
                functionName: 'authenticate',
                data: {
                    playerId: cook('playerId'),
                    token: cook('token')
                }
            }, true).then(function (result, data) {
                self._isLogin = result;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginStatus', false, data);
            }).fail(function (data) {
                self._isLogin = false;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginStatus', false, data);
            });
            return '';
        } else {
            return false;
        }
    };

    proto.getPartnerLogin = function (callback) {
        if (cook('tokenPartner') != undefined) {
            var self = this;
            mcm.net.send({
                service: 'partner',
                functionName: 'authenticate',
                data: {
                    partnerId: cook('partnerId'),
                    token: cook('tokenPartner')
                }
            }, true).then(function (result, data) {
                self._isPartnerLogin = result;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginPStatus', false, data);
            }).fail(function (data) {
                self._isPartnerLogin = false;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginPStatus', false, data);
            });
            return '';
        } else {
            return false;
        }
    };

    proto._getCombinedLogin = function (callback) {
        if (cook('token') != undefined) {
            var self = this;
            mcm.net.send({
                service: 'player',
                functionName: 'authenticatePlayerPartner',
                data: {
                    playerId: cook('playerId'),
                    partnerId: cook('partnerId'),
                    token: cook('token')
                }
            }, true).then(function (result, data) {
                self._isLogin = result;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginCStatus', false, data);
            }).fail(function (data) {
                self._isLogin = false;
                if (callback)
                    callback();

                mcm.schedule.dispatchEvent('loginCStatus', false, data);
            });
            return '';
        } else {
            return false;
        }
    };

    proto.getStatus = function () {
        return this._init;
    };

    proto._getPlayerInfo = function (sender, eventData) {
        if (!eventData)
            return;

        if (mcm.net._resuming)
            mcm.net._resuming = !mcm.net._resuming;

        if (eventData['data']) {
            mcm.net.load({
                service: 'player',
                functionName: 'get',
                data: {
                    playerId: cook('playerId')
                }
            }, 'loginResponse', true);
        } else {
            this.setLogout();
        }
    };

    proto._getPartnerInfo = function (sender, eventData) {
        if (!eventData)
            return;

        var self = this;

        if (mcm.net._resuming)
            mcm.net._resuming = !mcm.net._resuming;

        if (eventData['data']) {
            mcm.net.send({
                service: 'partner',
                functionName: 'get',
                data: {
                    partnerId: cook('partnerId')
                }
            }, true).then(function (result, data) {
                var token;

                if (result['token'])
                    token = eventData['token'];
                self.setLogin(result, token);
            })
        } else {
            this.setLogout();
        }
    };

    proto._getCombinedInfo = function (sender, eventData) {
        if (!eventData)
            return;

        if (mcm.net._resuming)
            mcm.net._resuming = !mcm.net._resuming;

        if (eventData['data']) {
            mcm.net.load({
                service: 'player',
                functionName: 'getPlayerPartner',
                data: {
                    playerId: cook('playerId'),
                    partnerId: cook('partnerId')
                }
            }, 'loginResponse', true);
        } else {
            this.setLogout();
        }
    };

    proto._updatePlayerInfo = function () {
        this._init = true;
        var self = this;
        mcm.net.send({
            service: 'player',
            functionName: 'get',
            data: {
                playerId: cook('playerId')
            }
        }, true).then(function (result) {
            var token;

            if (result['token'])
                token = result['token'];
            self._setPlayerLogin(result, token);
        })
    };

    proto.updatePartnerInfo = function () {
        this._init = true;
        var self = this;
        mcm.net.send({
            service: 'partner',
            functionName: 'get',
            data: {
                partnerId: cook('partnerId')
            }
        }, true).then(function (result) {
            var token;

            if (result['token'])
                token = result['token'];
            self.setPartnerLogin(result, token);
        })
    };

    proto._updateCombinedInfo = function () {
        this._init = true;
        var self = this;
        mcm.net.send({
            service: 'player',
            functionName: 'getPlayerPartner',
            data: {
                playerId: cook('playerId'),
                partnerId: cook('partnerId')
            }
        }, true).then(function (result) {
            var token;
            if (result['token'])
                token = result['token'];
            self._setCombinedLogin(result, token);
        })
    };

    proto.loginResponse = function (sender, eventData) {
        if (!eventData)
            return;

        var code = eventData['status'];
        if (code == 200) {
            var token;
            var data = eventData['data'];

            if (eventData['token']) {
                //todo 登录行为
                token = eventData['token'];
                mcm.net.send({
                    service: 'player',
                    functionName: 'addClientSourceLog',
                    data: {
                        sourceUrl: document.referrer,
                        playerName: typeof data == Array ? data[0].name : data.name,
                        clientType: "web",
                        accessType: "normal"
                    }
                }, true);
            }
            this.setLogin(data, token);
        }
    };

    proto._setPlayerLogout = function () {
        cook('token', null);
        cook('playerId', null);
        this._username = null;
        this._realName = null;
        this._playerLevel = null;
        this._playerId = null;
        this._isLogin = false;
        this._userInfo = null;
        this._bank = null;
        mcm.schedule.dispatchEvent('loginCallback', false, this._isLogin);

    };

    proto.setPartnerLogout = function () {
        cook('tokenPartner', null);
        cook('partnerId', null);
        this._partnerName = null;
        this._partnerRealName = null;
        this._isPartnerLogin = false;
        this._partnerInfo = null;
        this._partnerId = null;
        this._partnerBank = null;
        mcm.schedule.dispatchEvent('loginPCallback', false, this._isPartnerLogin);

    };

    proto._setCombinedLogout = function () {
        cook('token', null);
        cook('playerId', null);
        cook('partnerId', null);
        this._username = null;
        this._realName = null;
        this._playerLevel = null;
        this._playerId = null;
        this._isLogin = false;
        this._userInfo = null;
        this._partnerInfo = null;
        this._partnerId = null;
        this._bank = null;
        mcm.schedule.dispatchEvent('loginCallback', false, this._isLogin);

    };


    proto.getUserInfoFromCache = function () {
        return this._userInfo;
    };

    proto.getPartnerInfoFromCache = function () {
        return this._partnerInfo;
    };

    proto.getUserAccount = function () {
        return this._username;
    };

    proto.getPartnerAccount = function () {
        return this._partnerName;
    };

    proto.getPlayerId = function () {
        return this._playerId || cook('playerId') || null;
    };

    proto.getPartnerId = function () {
        return this._partnerId || cook('partnerId') || null;
    };

    proto.getUserName = function () {
        return this._realName;
    };

    proto.getPartnerName = function () {
        return this._partnerRealName;
    };

    proto.getUserLevel = function () {
        return this._playerLevel;
    };

    proto.getLevelDetail = function (lv) {
        return this._allLevel[lv];
    };

    proto.setLevelRatio = function (ratioList) {
        var keys = Object.keys(ratioList);
        for (var i = 0, len = keys.length; i < len; i++) {
            var index = keys[i];
            if (!this._allLevel[index])
                this._allLevel[index] = {};
            this._allLevel[index]['ratio'] = ratioList[index]['7'];
        }
    };

    proto.getAllLevel = function () {
        return this._allLevel;
    };

    proto.setAllLevel = function (sender, eventData) {
        if (!eventData)
            return;

        if (eventData['status'] == 200) {
            var team = eventData['data'];
            if (team.length > 0)
                this._allLevel = {};
            for (var i = 0, len = team.length; i < len; i++) {
                var lv = team[i];
                this._allLevel[lv['value']] = {
                    name: lv['name']
                };
                for (var j = 0, jLen = lv['levelUpConfig'].length; j < jLen; j++) {
                    var config = lv['levelUpConfig'][j];
                    if (config['topupPeriod'] == 'DAY')
                        this._allLevel[lv['value']]['topUpMax'] = config['topupLimit'];
                    if (config['consumptionPeriod'] == 'DAY')
                        this._allLevel[lv['value']]['consumptionMax'] = config['consumptionLimit'];
                }
            }
        }
    };

    proto.addProvider = function (provider) {
        if (!this._provider.contains(provider))
            this._provider.push(provider);
    };

    proto.isReadyProviderCredit = function () {
        for (var i = 0, len = this._provider.length; i < len; i++) {
            var target = this._provider[i];
            if (target['status'] == 1 && target['credit'] == null)
                return false;
        }
        return true;
    };

    proto.setProviderCredit = function (providerId, credit) {
        for (var i = 0, len = this._provider.length; i < len; i++) {
            var target = this._provider[i];
            if (target['id'] == providerId) {
                target['credit'] = credit;
                break;
            }
        }
    };

    proto.getProviderCredit = function (providerId) {
        var credit = null;

        for (var i = 0, len = this._provider.length; i < len; i++) {
            var target = this._provider[i];
            if (target['id'] == providerId) {
                credit = target['credit'];
                break;
            }
        }

        return credit;
    };

    proto.getProviderList = function () {
        return this._provider;
    };

    proto.setBankList = function (sender, eventData) {
        if (eventData && eventData['status'] == 200) {
            var obj = eventData['data'];
            for (var i = 0, len = obj.length; i < len; i++) {
                var bank = obj[i];
                this.addBankList({
                    id: bank['id'],
                    name: bank['name']
                });
            }
        }
    };

    proto.hasBankList = function () {
        return !common.isOwnEmpty(this._bankList);
    };

    proto.addBankList = function (bank) {
        this._bankList[bank.id] = bank.name;
    };

    proto.getBankList = function () {
        var arr = [];
        var Keys = Object.keys(this._bankList);
        for (var i = 0, len = Keys.length; i < len; i++) {
            var key = Keys[i];
            var obj = {
                id: key,
                name: this._bankList[key]
            };
            arr.push(obj);
        }
        return arr;
    };

    proto.getBank = function (id) {
        return this._bankList[id];
    };

    proto.getPlayerBankInfo = function () {
        return this._bank || false;
    };
    proto.getPartnerBankInfo = function () {
        return this._partnerBank || false;
    };

    proto._setPlayerBankInfo = function () {
        if (this._userInfo.bankName == undefined)
            return;
        this._bank = {
            bankName: this._userInfo.bankName,
            bankAccount: this._userInfo.bankAccount,
            bankAccountName: this._userInfo.bankAccountName,
            bankAccountType: this._userInfo.bankAccountType,
            bankAccountCity: this._userInfo.bankAccountCity,
            bankAddress: this._userInfo.bankAddress
        };
    };

    proto._setPartnerBankInfo = function () {
        if (this._partnerInfo.bankName == undefined)
            return;
        this._partnerBank = {
            bankName: this._partnerInfo.bankName,
            bankAccount: this._partnerInfo.bankAccount,
            bankAccountName: this._partnerInfo.bankAccountName,
            bankAccountType: this._partnerInfo.bankAccountType,
            bankAccountCity: this._partnerInfo.bankAccountCity,
            bankAddress: this._partnerInfo.bankAddress
        };
    };

    //加载余额
    proto.loadOverage = function (sender, eventData) {

        if (eventData) {
            if (eventData['status'] == 200) {
                var value = eventData['data']['validCredit'];
                var lockValue = eventData['data']['lockedCredit'];
                var pendingValue = eventData['data']['pendingRewardAmount'];
                this.setOverage(value, lockValue, pendingValue);
            }
        } else {
            if (this._isLogin)
                mcm.net.load({
                    service: 'player',
                    functionName: 'getCredit'
                }, 'loadOverage', true);
        }
    };

    //改变余额
    proto.setOverage = function (value, lockValue, pendingRewardAmount) {
        this._overage = value;
        this._lockCredit = lockValue;
        this._pendingCredit = pendingRewardAmount;

        mcm.schedule.dispatchEvent('getOverage', false, this._overage);
        mcm.schedule.dispatchEvent('getBalance', false, [this._lockCredit, this._pendingCredit])
    };

    /**
     * 获取余额
     * @returns {null|*}
     */
    proto.getOverage = function () {
        return this._overage;
    };

    /**
     * 获取冻结余额
     * @returns {*}
     */
    proto.getLockCredit = function () {
        return this._lockCredit;
    };

    /**
     * 获取待审批金额
     * @returns {number}
     */
    proto.getPromoCredit = function () {
        return this._pendingCredit ? this._pendingCredit : 0;
    };

    return cache;
});