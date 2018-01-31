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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**配置文件加载完成,开始预加载preload资源组。*/
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup("preload");
    };
    /** preload资源组加载完成*/
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            this.createGameScene();
        }
    };
    Main.prototype.createGameScene = function () {
        Data.initlist();
        this.courtyard = new Courtyard();
        this.addChild(this.courtyard);
        //this.room=new Room(); 
        //this.addChild(this.room);
        var icon = new egret.Bitmap();
        icon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(icon);
        icon.x = Data.getscreenWidth() - icon.width - 15;
        icon.y = Data.getscreenHeight() - icon.height - 10;
        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.loadRoom, this);
        var clover = new egret.Bitmap();
        clover.texture = RES.getRes("sys_clover_window_png");
        this.addChild(clover);
        clover.x = 15;
        clover.y = 10;
        var clovertext = new egret.TextField;
        clovertext.text = "111";
        clovertext.textColor = 0;
        clovertext.x = 150;
        clovertext.y = 30;
        this.addChild(clovertext);
        this.room_EUI = new Room_EUI();
        this.addChild(this.room_EUI);
        console.log(this.room_EUI.x + "--" + this.room_EUI.y);
    };
    Main.prototype.loadRoom = function () {
        this.removeChild(this.courtyard);
        this.room = new Room();
        this.addChild(this.room);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map