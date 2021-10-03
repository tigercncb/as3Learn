class Velocity2 extends egret.Sprite
{
    private ball:Ball
    _stage

    private vx:number=5;
    private vy:number=5;
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
        this.ball.x=50;
        this.ball.y=100
        this._stage.addEventListener(egret.Event.ENTER_FRAME,this.onframe,this)
    }
    private onframe()
    {
        this.ball.x+=this.vx;
        this.ball.y+=this.vy;
    }
}