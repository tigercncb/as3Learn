class Arrow extends egret.Sprite
{
    constructor()
    {
        super();
        this.init()
    }
    init()
    {
        this.graphics.lineStyle(1,0,1)
        this.graphics.beginFill(0xffff00)
        this.graphics.moveTo(-50,-25)
        this.graphics.lineTo(0,-25)
        this.graphics.lineTo(0,-50)
        this.graphics.lineTo(50,0)
        this.graphics.lineTo(0,50)
        this.graphics.lineTo(0,25)
        this.graphics.lineTo(-50,25)
        this.graphics.lineTo(-50,-25)
        this.graphics.endFill()


    }
}