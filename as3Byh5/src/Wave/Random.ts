class Random extends egret.Sprite
{
    //假随机运动，由两个角来确定
    private ball:Ball
    private angleX=0;
    private angleY=0;
    private centerX=200;
    private centerY=200
    private range=50;
    private xspeed=.07
    private yspeed=.11
    
    _stage
    constructor(stage)
    {
        super()
        this._stage=stage
        this.init()
    }
    init()
    {
        this.ball=new Ball();
        this.addChild(this.ball)
        this.ball.x=0;
        this.addEventListener(egret.Event.ENTER_FRAME,this.onframe,this)

    }
    private onframe()
    {
        this.ball.x=this.centerX+Math.sin(this.angleX)*this.range
        this.ball.y=this.centerY+Math.sin(this.angleY)*this.range
        this.angleX+=this.xspeed
        this.angleY+=this.yspeed
    }
}