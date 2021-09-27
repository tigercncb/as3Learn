class Distance extends egret.Sprite
{
    _stage
    constructor(stage)
    {
        super()
        this._stage=stage
        this.init()
    }
    init()
    {
        let sp:egret.Sprite=new egret.Sprite();
        this.addChild(sp)
        sp.graphics.beginFill(0x000000);
        sp.graphics.drawRect(-2,-2,4,4)
        sp.graphics.endFill();
        sp.x=Math.random()*this._stage.stageWidth;
        sp.y=Math.random()*this._stage.stageHeight;

        let sp2:egret.Sprite=new egret.Sprite();
        this.addChild(sp2)
        sp2.graphics.beginFill(0xff0000);
        sp2.graphics.drawRect(-2,-2,4,4)
        sp2.graphics.endFill();
        sp2.x=Math.random()*this._stage.stageWidth;
        sp2.y=Math.random()*this._stage.stageHeight;

        let dx=sp.x-sp2.x;
        let dy=sp.y-sp2.y;
        let dist=Math.sqrt(dx*dx+dy*dy)
        console.log("距离："+dist)

        let lb:eui.Label=new eui.Label;
        let t:egret.TextField=new egret.TextField;
        t.
    }
}