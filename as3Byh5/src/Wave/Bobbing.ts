class Bobbing extends egret.Sprite
{
    //光滑上下运动波
    private ball:Ball
    private ball2:Ball
    private angle=0;

    private _stage
    constructor(stage)
    {
        super()
        this._stage=stage
        this.init();
    }
    init()
    {
        this.ball=new Ball();
        this.ball2=new Ball();
        this.addChild(this.ball)
        this.addChild(this.ball2)
        this.ball.x=this._stage.stageWidth/2
        this.ball2.x=this._stage.stageWidth/2+200
        this.addEventListener(egret.Event.ENTER_FRAME,this.onframe,this)
        // let tm=new egret.Timer(100)
        // tm.addEventListener(egret.TimerEvent.TIMER,this.ontime,this)
        // tm.start()
    }
    // private ontime()
    // {
    //     this.ball.y=this._stage.stageHeight/2+Math.sin(this.angle)*50;
    //     this.angle+=.1;
    // }
    private bally:number=0
    private ball2y:number=0
    onframe()
    {
        this.ball.y=this._stage.stageHeight/2+Math.sin(this.angle)*50;
        this.ball2.y=this._stage.stageHeight/2+Math.cos(this.angle)*50;
        this.angle+=.05;
        if(this.ball.y>this.bally)
        {
            this.bally=this.ball.y
            console.log("ballY:"+this.bally)
        }
        if(this.ball2.y>this.ball2y)
        {
            this.ball2y=this.ball2.y
            console.log("ball2Y:"+this.ball2y)
        }
    }
}