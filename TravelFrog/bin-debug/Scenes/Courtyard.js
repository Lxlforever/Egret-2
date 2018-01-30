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
        this.icon = new egret.Bitmap();
        this.icon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(this.icon);
    };
    Courtyard.prototype.move = function (evt) {
        console.log("this.width: " + this.width + "--this.background.width: " + this.background.width);
        if (this.initialPoin != 0 && this.x <= 0 && this.x >= Data.getscreenWidth() - this.width) {
            this.x += evt.stageX - this.initialPoin;
        }
        if (this.x > 0) {
            this.x = 0;
        }
        if (this.x < Data.getscreenWidth() - this.width) {
            this.x = Data.getscreenWidth() - this.width;
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