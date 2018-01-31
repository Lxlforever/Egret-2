var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Data = (function () {
    function Data() {
    }
    Data.getscreenWidth = function () {
        if (Data._screenWidth == 0) {
            Data._screenWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return Data._screenWidth;
    };
    Data.getscreenHeight = function () {
        if (Data._screenHeight == 0) {
            Data._screenHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return Data._screenHeight;
    };
    Data._screenWidth = 0;
    Data._screenHeight = 0;
    return Data;
}());
__reflect(Data.prototype, "Data");
//# sourceMappingURL=Data.js.map