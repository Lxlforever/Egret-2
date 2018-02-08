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
var BackpackTable = (function (_super) {
    __extends(BackpackTable, _super);
    function BackpackTable() {
        var _this = _super.call(this) || this;
        _this.skinName = "BackpackTableSkin";
        return _this;
    }
    BackpackTable.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BackpackTable.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return BackpackTable;
}(eui.Component));
__reflect(BackpackTable.prototype, "BackpackTable", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BackpackTable.js.map