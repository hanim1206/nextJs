import { observable } from 'mobx';

const bgModeAtore = observable({
    // state
    num: 0,

    // action
    increaseAction(num) {
        this.num = this.num + num;
    },
    
    decreaseAction(num) {
        this.num = this.num - num;
    }
});

export default bgModeAtore;