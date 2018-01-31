class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
<<<<<<< HEAD

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
   
    private createGameScene(): void {
        this.courtyard = new Courtyard();
        this.addChild(this.courtyard);

        let icon = new egret.Bitmap();
        icon.texture = RES.getRes("icon_house_84_88_png");
        this.addChild(icon);
        icon.x = Data.getscreenWidth() - icon.width - 15;
        icon.y = Data.getscreenHeight() - icon.height - 10;
        icon.touchEnabled = true;

        let storeicon = new egret.Bitmap();
        storeicon.texture = RES.getRes("icon_shop_84_88_png");
        this.addChild(storeicon);
        storeicon.x = icon.x;
        storeicon.y = icon.y - storeicon.height - 5;
        storeicon.touchEnabled = true;




        //1111111
=======
}
/**
* 创建游戏场景
* Create a game scene
*/
private courtyard:Courtyard;
private room:Room;

private createGameScene():void {
    this.courtyard=new Courtyard();
    //this.addChild(this.courtyard);

    this.room=new Room(); 
    this.addChild(this.room);

    let icon = new egret.Bitmap();
    icon.texture = RES.getRes("icon_house_84_88_png");
    this.addChild(icon);
    icon.x=Data.getscreenWidth()-icon.width-15;
    icon.y=Data.getscreenHeight()-icon.height-10;

    
>>>>>>> 13892b2b3e0608beb6e6052db43335b69c53aeed
    }

}