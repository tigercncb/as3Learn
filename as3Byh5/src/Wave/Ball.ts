class Ball extends egret.Sprite
{
    private radius
    private color
    constructor(radius:number=40,color=0xff0000)
    {
        super()
        this.radius=radius
        this.color=color
        this.init()
    }
    init()
    {
        this.graphics.beginFill(this.color)
        this.graphics.drawCircle(0,0,this.radius)
        this.graphics.endFill();
    }
}