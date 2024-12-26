cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    OnStartButtonClick()
    {
        cc.director.loadScene("Game_Scene");
    }
});
