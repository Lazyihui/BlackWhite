// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },


        isToggleGround: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;


        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onkeydown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onkeyup, this);

    },

    start() {

    },

    update(dt) { },


    onkeydown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.e:
            this.node.active = !this.node.active;
                break;
            default:
                break;
        }
    },

    onkeyup(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.e:
                break;
            default:
                break;
        }
    },

});
