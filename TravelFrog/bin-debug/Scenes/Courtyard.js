var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Courtyard = (function (_super) {
    __extends(Courtyard, _super);
    function Courtyard() {
        var _this = _super.call(this) || this;
        _this.grasslist = [[0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true],
            [0, 0, true]];
        _this.initialPoin = 0;
        _this.CreateScene();
        return _this;
    }
    Courtyard.prototype.CreateScene = function () {
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes("haikei_niwa_png");
        this.addChild(this.background);
        this.background.x = Data.getscreenWidth() - this.width;
        this.background.touchEnabled = true;
        this.background.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.background.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd, this);
        var temp = 0;
        for (var i = 0; i < this.grasslist.length; i++) {
            if (this.grasslist[i][2]) {
                var x = Math.random();
                this.grasslist[i][0] = 60 + 530 * (x - 1);
                if (temp < 8) {
                    var y = Math.random();
                    this.grasslist[i][1] = 550 + 50 * (1 - y);
                }
                else if (temp < 15) {
                    var y = Math.random();
                    this.grasslist[i][1] = 590 + 50 * (1 - y);
                }
                else {
                    var y = Math.random();
                    this.grasslist[i][1] = 640 + 50 * (1 - y);
                }
                var grass = new egret.Bitmap();
                grass.texture = RES.getRes("clover_154_png");
                grass.x = this.grasslist[i][0];
                grass.y = this.grasslist[i][1];
                grass.touchEnabled = true;
                this.addChild(grass);
                grass.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);
                temp++;
            }
        }
    };
    Courtyard.prototype.grassclear = function (event) {
        var tw = egret.Tween.get(event.target);
        tw.to({ y: 450, "alpha": 0 }, 1000);
        for (var i = 0; i < this.grasslist.length; i++) {
            if (event.target.x == this.grasslist[i][0] && event.target.y == this.grasslist[i][1]) {
                this.grasslist[i][2] = false;
            }
        }
    };
    Courtyard.prototype.move = function (evt) {
        console.log("this.width: " + this.width + "--this.background.width: " + Data.getscreenWidth());
        if (this.initialPoin != 0 && this.x >= 0 && this.x <= this.width - Data.getscreenWidth()) {
            this.x += evt.stageX - this.initialPoin;
        }
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > this.width - Data.getscreenWidth()) {
            this.x = this.width - Data.getscreenWidth();
        }
        this.initialPoin = evt.stageX;
    };
    Courtyard.prototype.TouchEnd = function () {
        this.initialPoin = 0;
    };
    return Courtyard;
}(egret.Sprite));
__reflect(Courtyard.prototype, "Courtyard");
//# sourceMappingURL=Courtyard.js.map