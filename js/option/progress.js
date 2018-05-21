/**
 * Created by Ricky on 2017/4/6.
 */

define(['template'], function(template) {
    var progress = function(param) {
        var self = this;

        //DOM容器
        self.container = $(param.container);

        //锚点数组
        self.anchors = param.anchors;

        //当前数值
        self.currentVal = param.current;

        //是否显示圆形节点
        self.isRoundAnchor = param.isRoundAnchor;

        //模板文件
        self.model = mcm.page['progress'];

        self.container.html(template.compile(self.model)(self));
        self.progressNode = self.container.find('.progressNode');

        var pointer = self.count();

        setTimeout(function(val) {
            self.progressNode.css('width', val + '%');
        }.bind(this, [pointer]), 200);
    };

    progress.prototype.count = function() {
        var jLen, rank, lv, pointer, nextLevel, thisLevel;
        if (this.currentVal >= this.anchors[0] && this.anchors[1] != 0 && this.anchors[2] != 0) {
            jLen = this.anchors.length;
            rank = 100 / (jLen - 1);
            lv = jLen + 1;
            for (var j = jLen; j > 0; j--){
                if(this.currentVal < this.anchors[j])
                    lv = j + 1;
            }
            if(lv == 1){
                nextLevel = this.anchors[1];
                pointer = 0;
            }else if(lv > jLen){
                pointer = lv * rank;
            }else{
                nextLevel = this.anchors[lv - 1];
                thisLevel = this.anchors[lv - 2];
                pointer = (lv - 2) * rank;
                pointer += (this.currentVal - thisLevel) / ((nextLevel - thisLevel) / rank);
            }
        } else {
            pointer = 0;
        }
        return pointer;
    };

    return progress;
});
