//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //?????????????????????????????????
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        // const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //??????????????????????????????,??????????????????????????????????????????????????????
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve(0);
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * ??????????????????
     * Create scene interface
     */
    protected createGameScene(): void {
        
        //????????????

        //?????????-------------????????????----------------------------
        //????????????????????????
        // let rm:RotateToMouse=new RotateToMouse(this.stage)
        // this.addChild(rm)

        //3.5.1 ????????? ??????
        // let bo:Bobbing=new Bobbing(this.stage)
        // this.addChild(bo)

        //3.5.2??????????????????
        // let wave1:Wave1=new Wave1(this.stage)
        // this.addChild(wave1)

        //3.5.3??????????????????
        // let p:Pulse=new Pulse(this.stage)
        // this.addChild(p)

        //3.5.5?????????????????????
        // let w2:Wave2=new Wave2(this.stage)
        // this.addChild(w2)

        //3.5.4 ???????????????????????????
        // let rd:Random=new Random(this.stage)
        // this.addChild(rd)

        //3.6???????????????
        //3.6.1????????????
        // let c:Circle=new Circle(this.stage)
        // this.addChild(c)

        //3.6.2????????????
        // let oval:Oval=new Oval(this.stage)
        // this.addChild(oval)

        //3.8??????????????????
        // let dist:Distance=new Distance(this.stage)
        // this.addChild(dist)


        //?????????-------------??????????????????----------------------------
        // let vel1=new Velocity1(this.stage)
        // this.addChild(vel1)
        // let vel2=new Velocity2(this.stage)
        // this.addChild(vel2)

        //5.1.4?????????
        // let va=new VelocityAngle(this.stage)
        // this.addChild(va)

        //5.1.4????????????
        let fm=new FollowMouse(this.stage)
        this.addChild(fm)


    }



}
