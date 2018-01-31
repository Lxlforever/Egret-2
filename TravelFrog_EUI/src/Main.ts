class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    /**配置文件加载完成,开始预加载preload资源组。*/
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup("preload");
    }
    /** preload资源组加载完成*/
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            this.createGameScene();
        }
    }
    /**
    * 创建游戏场景
    * Create a game scene
    */
    private courtyard: Courtyard;
    private room: Room;
    private room_EUI: Room_EUI;

    private createGameScene(): void {
        Data.initlist();
        this.courtyard = new Courtyard();
        this.addChild(this.courtyard);

        //this.room=new Room(); 
        //this.addChild(this.room);

        let icon = new egret.Bitmap();
        icon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(icon);
        icon.x = Data.getscreenWidth() - icon.width - 15;
        icon.y = Data.getscreenHeight() - icon.height - 10;
        icon.touchEnabled=true;
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.loadRoom,this);
        let clover = new egret.Bitmap();
        clover.texture = RES.getRes("sys_clover_window_png");
        this.addChild(clover);
        clover.x = 15;
        clover.y = 10;
        let clovertext = new egret.TextField;
        clovertext.text = "111";
        clovertext.textColor = 0;
        clovertext.x = 150;
        clovertext.y = 30;
        this.addChild(clovertext);
        this.room_EUI = new Room_EUI();
        this.addChild(this.room_EUI);
        console.log(this.room_EUI.x + "--" + this.room_EUI.y);
    }
    private loadRoom(){
        this.removeChild(this.courtyard);
        this.room=new Room(); 
        this.addChild(this.room);
    }
}