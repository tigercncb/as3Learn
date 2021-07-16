class Wave1 extends egret.Sprite
{
    //线性波，向右
    private ball:Ball
    private angle:number=0;
    private centerY=200
    private range=50
    private xspeed=1;
    private yspeed=.05

    _stage
    constructor(stage)
    {
        super()
        this._stage=stage
        this.init()
    }
    private init()
    {
        this.ball=new Ball();
        this.addChild(this.ball)
        this.ball.x=0;
        this._stage.addEventListener(egret.Event.ENTER_FRAME,this.onframe,this)
    }
    private onframe(e:Event)
    {
        this.ball.x+=this.xspeed;
        this.ball.y=this.centerY+Math.sin(this.angle)*this.range;
        this.angle+=this.yspeed
    }
}