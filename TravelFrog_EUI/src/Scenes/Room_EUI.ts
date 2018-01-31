class Room_EUI extends eui.Component implements eui.UIComponent {

	public button0: eui.Button;
	public button: eui.Button;

	public constructor() {
		super();
		this.skinName = "Room_EUISkin";
		//this.button0.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);
		//this.button.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		//this.button0.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);
		//this.button.addEventListener(egret.TouchEvent.TOUCH_END,this.Touch,this);
	}

	private Touch() {
		console.log("xxxxxxxxxxxxxxx");
	}




}