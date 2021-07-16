class Pulse extends egret.Sprite
{
    //脉冲，效果：等比放大缩小
    private ball:Ball
    private angle:number=0;
    private centerScale=1
    private range=.5
    private speed=.1;

    _stage
    constructor(stage)
    {
        super()
        this._stage=stage
        this.init()
    }
    private init()
    {
        this.ball=new Ball()
        this.addChild(this.ball)
        this.ball.x=this._stage.stageWidth/2
        this.ball.y=this._stage.stageHeight/2
        this.addEventListener(egret.Event.ENTER_FRAME,this.onframe,this)
    }
    private onframe()
    {
        this.ball.scaleX=this.ball.scaleY=this.centerScale+Math.sin(this.angle)*this.range
        this.angle+=this.speed
    }
}