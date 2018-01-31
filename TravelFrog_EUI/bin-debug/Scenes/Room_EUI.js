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
var Room_EUI = (function (_super) {
    __extends(Room_EUI, _super);
    function Room_EUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "Room_EUISkin";
        return _this;
        //this.button0.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);
        //this.button.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);
    }
    Room_EUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Room_EUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //this.button0.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);
        //this.button.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);
    };
    Room_EUI.prototype.Touch = function () {
        console.log("xxxxxxxxxxxxxxx");
    };
    return Room_EUI;
}(eui.Component));
__reflect(Room_EUI.prototype, "Room_EUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Room_EUI.js.map