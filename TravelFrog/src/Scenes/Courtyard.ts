class Courtyard extends egret.Sprite {
	public constructor() {
		super();
		this.CreateScene();

	}

	
	//private backgroundSprite:egret.Sprite;
	private background:egret.Bitmap;
	private icon:egret.Bitmap;

	private backgroundSprite: egret.Sprite;
	private background: egret.Bitmap;
	private icon: egret.Bitmap;

	public grasslist: any[] =
	[[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],

	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true],
	[0, 0, true]];

	private CreateScene() {

		this.background = new egret.Bitmap();
		this.background.texture = RES.getRes("haikei_niwa_png");
		this.addChild(this.background);
		this.background.x = Data.getscreenWidth() - this.width;
		this.background.touchEnabled = true;
		this.background.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
		this.background.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchEnd, this);
		let temp: number = 0;
		for (let i: number = 0; i < this.grasslist.length; i++) {

			if (this.grasslist[i][2]) {
				var x = Math.random();
				this.grasslist[i][0] = 60 + 530 * (x - 1);
				if (temp < 8) {
					var y = Math.random();
					this.grasslist[i][1] = 550 + 50 * (1 - y);
				} else if (temp < 15) {
					var y = Math.random();
					this.grasslist[i][1] = 590 + 50 * (1 - y);
				} else {
					var y = Math.random();
					this.grasslist[i][1] = 640 + 50 * (1 - y);
				}

				var grass = new egret.Bitmap();
				grass.texture = RES.getRes("clover_154_png");

				grass.x = this.grasslist[i][0];
				grass.y = this.grasslist[i][1];
				grass.touchEnabled = true;
				this.addChild(grass);
				grass.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.grassclear, this);

				temp++;
			}
		}

	}

	private grassclear(event: egret.Event) {
	
		var tw = egret.Tween.get(event.target);
		tw.to({ y: 450,"alpha": 0  }, 1000)
		
			for (let i: number = 0; i < this.grasslist.length; i++) {
				if(event.target.x== this.grasslist[i][0]&&event.target.y== this.grasslist[i][1]){
					this.grasslist[i][2]=false;
				}
			}



	}

	
	private initialPoin: number = 0;
	private move(evt: egret.TouchEvent) {
		console.log("this.width: " + this.width + "--this.background.width: " + Data.getscreenWidth());
		if (this.initialPoin != 0 && this.x >= 0 && this.x <= this.width - Data.getscreenWidth()) {
			this.x += evt.stageX - this.initialPoin;
		}
		if (this.x < 0) {
			this.x = 0;
		}
		if (this.x > this.width - Data.getscreenWidth()) {
			this.x = this.width - Data.getscreenWidth();
		}
		this.initialPoin = evt.stageX;
	}

	private TouchEnd() {
		this.initialPoin = 0;
	}
}

