class Main extends egret.DisplayObjectContainer {

    public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
}

private onAddToStage(event:egret.Event){

    //初始化Resource资源加载库
    RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
    RES.loadConfig("resource/default.res.json","resource/");
}
/**配置文件加载完成,开始预加载preload资源组。*/
private onConfigComplete(event:RES.ResourceEvent):void{
    RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
    RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
    RES.loadGroup("preload");
}
/** preload资源组加载完成*/
private onResourceLoadComplete(event:RES.ResourceEvent):void {
    if(event.groupName=="preload"){
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        this.createGameScene();
    }
}
/**
* 创建游戏场景
* Create a game scene
*/
private courtyard:Courtyard;

private createGameScene():void {
    this.courtyard=new Courtyard();
    this.addChild(this.courtyard);
    //1111111
    }
}