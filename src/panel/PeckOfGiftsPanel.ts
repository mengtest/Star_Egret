/**
 * 超值大礼包
 */
class PeckOfGiftsPanel extends BasePanel {

	private static _instance: PeckOfGiftsPanel;

	public constructor() {
		super();
	}

	protected _init(): void {
		this._ui = Main.createComponent('超值大礼包弹窗', 650, 1000);
		this._ui.x = (Main.stageWidth - 650) >> 1;
		this._ui.y = (Main.stageHeight - 1000) >> 1;
		this._ui.getController('c1').selectedIndex = 1;
		const ui = this._ui.getChild('n0').asCom;
		ui.getChild('n1').addClickListener(this._onBuy, this);
		ui.getChild('n2').addClickListener(this._onClose, this);
	}

	private _onBuy(): void {
		this._onClose();
	}


	static get instance(): PeckOfGiftsPanel {
		if (!PeckOfGiftsPanel._instance) {
			PeckOfGiftsPanel._instance = new PeckOfGiftsPanel();
		}
		return PeckOfGiftsPanel._instance;
	}
}