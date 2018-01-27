var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelRequire = (function () {
    function LevelRequire() {
        this.reqElements = [];
    }
    LevelRequire.prototype.getLevelReqNum = function () {
        return this.reqElements.length;
    };
    LevelRequire.prototype.addElement = function (type, num) {
        var ele = new LevelRequireElement();
        ele.num = num;
        ele.type = type;
        this.reqElements.push(ele);
    };
    LevelRequire.prototype.openChange = function () {
        this.reqElements = [];
    };
    LevelRequire.prototype.changeReqNum = function (type, num) {
        var l = this.getLevelReqNum();
        for (var i = 0; i < l; i++) {
            this.reqElements[i].num -= num;
            return;
        }
    };
    LevelRequire.prototype.isClear = function () {
        var l = this.getLevelReqNum();
        for (var i = 0; i < l; i++) {
            if (this.reqElements[i].num > 0) {
                return false;
            }
        }
        return true;
    };
    return LevelRequire;
}());
__reflect(LevelRequire.prototype, "LevelRequire");
//# sourceMappingURL=LevelRequire.js.map