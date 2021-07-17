class Wave2 extends egret.Sprite
{
    //正弦波
     private angle=0;
     private centerY=200
     private range=50
     private xspeed=1;
     private yspeed=.05;

     private xpos:number
     private ypos:number

     _stage
     constructor(stage)
     {
         super()
         this._stage=stage
         this.init()
     }
     private init()
     {
         this.xpos=0;
         this.graphics.lineStyle(1,0,1)
         this.graphics.moveTo(0,this.centerY)
         this.addEventListener(egret.Event.ENTER_FRAME,this.onframe,this)
     }
     private onframe()
     {
         this.xpos+=this.xspeed
         this.angle+=this.yspeed
         this.ypos=this.centerY+Math.sin(this.angle)*this.range
         this.graphics.lineTo(this.xpos,this.ypos)
     }
}