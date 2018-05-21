/**
 * Created by Ricky on 2017/4/19.
 */

define(function() {
    return {
        provider:{
            20:'捕鱼王',
            42:'捕鱼天下',
            43:'捕鱼多福',
            44:'深海大赢家'
        },
        orderStatus: {
            Success: '提案成功',
            Fail: '提案失败',
            Pending: '待审批',
            PrePending: '系统异常',
            Approved: '审批通过',
            Rejected: '审批拒绝',
            Cancel:'已取消',
            Processing: '处理中'
        },
        topupStatus: {
            Success: '充值成功',
            Failure: '充值失败',
            Pending: '待处理',
            Processing: '处理中',
            Cancelled: '已取消'
        },
        bonusStatus: {
            Success: '提现成功',
            Failure: '提现失败',
            Pending: '待处理',
            Processing: '处理中',
            Cancelled: '已取消'
        },
        rewardType: {
            FullAttendance: '全勤奖励',
            PlayerConsumptionReturn: '玩家消费返点奖励',
            FirstTopUp: '玩家首冲奖励',
            GameProviderReward: '游戏提供商奖励',
            PartnerConsumptionReturn: '代理消费返点奖励',
            PartnerIncentiveReward: '代理激励奖励',
            PartnerReferralReward: '代理推荐奖励',
            PlatformTransactionReward: '银行转账奖励',
            ManualPlayerTopUp: '玩家手动充值',
            PlayerTopUp: '玩家在线充值',
            PlayerBonus: '玩家兑奖',
            PlayerTopUpReturn: '玩家充值返点'
        },
        depositMethod: ['','网银转账', 'ATM', '柜台存款', '支付宝转账', '微信转帐'],
        topupType: {
            1: '快捷支付',
            2: '微信支付',
            3: '支付宝支付',
            4: '微信APP支付',
            5: '支付宝APP支付'
        },
        smsSetting: {
            PlayerConsumptionReturnSuccess: '玩家洗码（成功）',
            ManualTopupSuccess: '手工存款（成功）',
            OnlineTopupSuccess: '在线充值（成功）',
            AlipayTopupSuccess: '个人支付宝（成功）',
            WechatTopupSuccess: '个人微信（成功）',
            WithdrawSuccess: '提款（成功）',
            WithdrawCancel: '提款（取消）',
            PlayerLimitedOfferRewardSuccess: '秒杀礼包（成功）',
            UpdateBankInfoSuccess: '编辑玩家银行资料（成功）',
            UpdatePhoneInfoSuccess: '编辑玩家电话资料（成功）',
            updatePassword: '更新密码',
            PlayerTopUpReturnGroupSuccess: '存送金（组）（成功）',
            PlayerLoseReturnRewardGroupSuccess: '输值反利（组）（成功）',
            PlayerConsecutiveRewardGroupSuccess: '签到全勤（组）（成功）',
            PlayerConsumptionRewardGroupSuccess: '投注额优惠（组）（成功）',
            PlayerFreeTrialRewardGroupSuccess: '免费体验金（组）（成功）',
            PlayerRegisterIntentionSuccess: '玩家注册意象（手动、成功）',
            PlayerPromoCodeRewardSuccess: '优惠代码（成功）',
            PlayerLevelUpMigrationSuccess: '玩家升级（成功）',
            PlayerLevelDownMigrationSuccess: '玩家降级（成功）',
            PlayerLevelUpSuccess: '升级优惠（成功）',
        },
        rewardCodeGourp: {
            "周首存": "ZSC",
            "洗码": "XM",
            "笔笔存38%": "BBC",
            "首存优惠100%": "SC01",
            "首存优惠68%": "SC02",
            "推荐好友": "TJHY",
            "救援金": "JYJ",
            "名利双收": "MLSS"
        }
    };
});
