//load模块
define(function () {
    var AnimationType = {
        INIT:55,
        ACCESS:20,
        BUFFER:98
    };

    var load = function () {
        //加载动画切换
        this._animateStatus = AnimationType.INIT;

        //加载动画状态
        this.isShow = true;

        //加载进度
        this.loading = 0;

        //总加载文件
        this.allload = 0;

        //记录加载次数
        this.total_load = 0;

        //操作组件定位
        this._core = $('#loading');

        //操作组件定位
        this._init = $('#load-init');

        //操作组件定位
        this._access = $('#load-access');

        //操作组件定位
        this._buffer = $('#load-buffer');
    };

    var proto = load.prototype;

    //开启请求动画
    proto.openAnimation = function () {
        this.switchAnimation(AnimationType.ACCESS);
        this._core.fadeIn();
    };


    //关闭动画
    proto.closeAnimation = function () {
        this._core.fadeOut();
    };


    //新增加载项
    proto.addFile = function (show) {
        this.switchAnimation(AnimationType.BUFFER);

        this.allload++;
        if (!this.isShow) {
            //开启加载动画
            this._core.show();
            this.isShow = true;
        }

        if (show){
            console.log('加载进度:' + this.loading + '/' + this.allload);
            this._buffer.children('p').text('正在计算文件  0/'+this.allload);
        }

    };

    //完成加载项
    proto.loadedFile = function (show) {
        //记录
        this.total_load++;

        this.loading++;

        if (show){
            console.log('加载进度:' + this.loading + '/' + this.allload);
            this._buffer.children('p').text('正在加载  '+ this.loading +'/'+this.allload);
        }


        if (this.loading >= this.allload) {
            this.allload = 0;
            this.loading = 0;
            if (this.isShow) {
                //关闭加载动画
                this._core.hide();
                this.isShow = false;
            }
        }
    };

    //切换动画类型
    proto.switchAnimation = function (type) {
        if(this._animateStatus == type)
            return;
        this._animateStatus = type;
        
        switch (type){
            case AnimationType.INIT:
                this._core.css('background-color','rgba(0, 0, 0, 0.7)');
                this._init.show();
                this._access.hide();
                this._buffer.hide();
                break;
            case AnimationType.ACCESS:
                this._core.css('background-color','rgba(255, 255, 255, 0.3)');
                this._init.hide();
                this._access.show();
                this._buffer.hide();
                break;
            case AnimationType.BUFFER:
                this._core.css('background-color','rgba(255, 255, 255, 0.3)');
                this._init.hide();
                this._access.hide();
                this._buffer.show();
                break;
            default:
        }
    };

    return load;
});