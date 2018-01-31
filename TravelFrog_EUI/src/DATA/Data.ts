class Data
{
    private static _screenWidth:number=0;
    public static getscreenWidth():number
    {
        if(Data._screenWidth==0)
        {
            Data._screenWidth=egret.MainContext.instance.stage.stageWidth;
        }
        return Data._screenWidth;
    }

    
    private static _screenHeight:number=0;
    public static getscreenHeight():number
    {
        if(Data._screenHeight==0)
        {
            Data._screenHeight=egret.MainContext.instance.stage.stageHeight;
        }
        return Data._screenHeight;
    }

    
}