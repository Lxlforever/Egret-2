class GameData {

	public static unmapnum:number=0;
	public static mapData:number[][];
	public static stepNum:number=0;
	public static levelStepNum:number=0;
	public static elementTypes:number[];
	public static levelreq:LevelRequire;
	public static elements:GameElement[];
	public static unusedElements:number[];
	public static levelBackgroundImageName:string="";

	public static MaxRow:number=8;
	public static MacColumn:number=8;
	public static currentElementNum:number=0;

	public static initData()
	{
		GameData.mapData=[];
		for(var i=0;i<GameData.MaxRow;i++)
		{
			var arr:number[]=[];
			for(var t=0;t<GameData.MacColumn;t++)
			{
				 GameData.mapData[t].push(-2);
			}
		}
		GameData.levelreq=new LevelRequire();
		GameData.elements=[];
		GameData.unusedElements=[];
		var len:number=GameData.MaxRow*GameData.MacColumn;
		for(var q=0;q<len;q++)
		{
			var ele:GameElement =new GameElement();
			ele.id=q;
			GameData.elements.push(ele);
			GameData.unusedElements.push(q);
		}

		GameData.stageW= egret.MainContext.instance.stage.stageWidth;
		GameData.stageH= egret.MainContext.instance.stage.stageHeight;
	}

	public static stageW:number=0;
	public static stageH:number=0;
}