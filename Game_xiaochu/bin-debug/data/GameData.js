var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.initData = function () {
        GameData.mapData = [];
        for (var i = 0; i < GameData.MaxRow; i++) {
            var arr = [];
            for (var t = 0; t < GameData.MacColumn; t++) {
                GameData.mapData[t].push(-2);
            }
        }
        GameData.levelreq = new LevelRequire();
        GameData.elements = [];
        GameData.unusedElements = [];
        var len = GameData.MaxRow * GameData.MacColumn;
        for (var q = 0; q < len; q++) {
            var ele = new GameElement();
            ele.id = q;
            GameData.elements.push(ele);
            GameData.unusedElements.push(q);
        }
        GameData.stageW = egret.MainContext.instance.stage.stageWidth;
        GameData.stageH = egret.MainContext.instance.stage.stageHeight;
    };
    GameData.unmapnum = 0;
    GameData.stepNum = 0;
    GameData.levelStepNum = 0;
    GameData.levelBackgroundImageName = "";
    GameData.MaxRow = 8;
    GameData.MacColumn = 8;
    GameData.currentElementNum = 0;
    GameData.stageW = 0;
    GameData.stageH = 0;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map