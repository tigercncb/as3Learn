class VelocityAngle extends egret.Sprite
{
    //角速度
    private ball:Ball
    _stage

    private angle=45;//角度
    private speed=3//也可以说是斜边
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
        let radains=this.angle*Math.PI/180//角度转弧度
        let vx=Math.cos(radains)*this.speed //cos是领边与斜边的比，则领边为 cos值乘以斜边，x方向
        let vy=Math.sin(radains)*this.speed//sin是对边与斜边的比，则对边为sin乘以斜边，y方向
        this.ball.x+=vx
        this.ball.y+=vy
    }
}