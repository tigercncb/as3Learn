class RotateToMouse extends egret.Sprite
{
    private arrow:Arrow
    constructor()
    {
        super()
        this.init()
    }
    init()
    {
        this.arrow=new Arrow()
        this.addChild(this.arrow)
        this.arrow.x=this.stage.stageWidth/2
        this.arrow.y=this.stage.stageHeight/2
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnter,this)
    }
    private onEnter()
    {
        let dx=1
    }
}