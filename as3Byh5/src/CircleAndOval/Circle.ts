class Circle extends egret.Sprite
{
    _stage
    private ball:Ball

    angle=0;
    centerX=200
    centerY=200
    radius=50
    speed=.1

    private xpos:number
    private ypos:number
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
        this.graphics.lineStyle(1,0,1)
         this.graphics.moveTo(this.ball.x,this.ball.y)
        this._stage.addEventListener(egret.Event.ENTER_FRAME,this.onframe,this)
    }
    private onframe(e:Event)
    {
        this.ball.x=this.centerX+Math.sin(this.angle)*this.radius;
        this.ball.y=this.centerY+Math.cos(this.angle)*this.radius;
        this.angle+=this.speed;
        this.graphics.lineTo(this.ball.x,this.ball.y)
    }
}