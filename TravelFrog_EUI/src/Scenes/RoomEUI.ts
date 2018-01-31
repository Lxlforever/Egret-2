class RoomEUI extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "RoomEUISkin";
		this.y = Data.getscreenHeight() / 2 - this.height / 2;

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	public button: eui.Button;
	public button0: eui.Button;

	protected childrenCreated(): void {
		super.childrenCreated();

		let tw = egret.Tween.get(this.button, { loop: true });
		tw.to({ x: this.button.x + this.button.width }, 500);
		let tw2 = egret.Tween.get(this.button0, { loop: true });
		tw2.to({ x: this.button0.x - this.button0.width }, 500);

		this.button.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
		this.button0.addEventListener(egret.TouchEvent.TOUCH_END, this.Touch, this);
	}

	private Touch() {
		if (this.x>-100)
		{
			let tw = egret.Tween.get(this);
			tw.to({ x: this.x - this.width / 2 }, 500);
		}
		else
		{
			let tw = egret.Tween.get(this);
			tw.to({ x: this.x + this.width / 2 }, 500);
		}

	}

}