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
var Backpack_EUI = (function (_super) {
    __extends(Backpack_EUI, _super);
    function Backpack_EUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "Backpack_EUISkin";
        return _this;
    }
    Backpack_EUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Backpack_EUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return Backpack_EUI;
}(eui.Component));
__reflect(Backpack_EUI.prototype, "Backpack_EUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=Backpack_EUI.js.map