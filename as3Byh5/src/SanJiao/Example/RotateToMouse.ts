class RotateToMouse extends egret.Sprite
{
    public arrow:Arrow
    private _stage
    constructor(stage)
    {
        super()
        this._stage=stage
        this.width=1136;
        this.height=640
        this.init()
    }
    init()
    {
        this.arrow=new Arrow()
        this.addChild(this.arrow)
        this.arrow.x=this._stage.stageWidth/2
        this.arrow.y=this._stage.stageHeight/2
        this._stage.addEventListener(egret.Event.ENTER_FRAME,this.onFrame,this)
        this._stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onbegin,this)
        this._stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onmove,this)
        this._stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onend,this)
    }
    private _mouseX:number;
    private _mouseY:number;
    private _isDown:boolean=false;
    private onbegin(e:egret.TouchEvent)
    {
        this._isDown=true;
        this._mouseX=e.stageX
        this._mouseY=e.stageY;
    }
    private onend()
    {
        this._isDown=false;
        this._mouseX=this._mouseY=0;
    }
    private onmove(e:egret.TouchEvent)
    {
        if(!this._isDown)return
        this._mouseX=e.stageX
        this._mouseY=e.stageY;
    }
    private onFrame(e:egret.Event)
    {
        if(!this._isDown)return
        let dx=this._mouseX-this.arrow.x
        let dy=this._mouseY-this.arrow.y
        let radians=Math.atan2(dy,dx)
        this.arrow.rotation=radians*180/Math.PI;
    }
}