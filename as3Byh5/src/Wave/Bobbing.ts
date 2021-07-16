class Bobbing extends egret.Sprite
{
    //光滑上下运动波
    private ball:Ball
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
        this.addChild(this.ball)
        this.ball.x=this._stage.stageWidth/2
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
    onframe()
    {
        this.ball.y=this._stage.stageHeight/2+Math.sin(this.angle)*50;
        this.angle+=.05;
    }
}