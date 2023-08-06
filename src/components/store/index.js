//여기다 모든 리덕스 로직을 저장할 것임. 
import {createStore} from "redux";

const counterReducer = (state = {counter : 0 },action)=>{
    if(action.type === 'increment')
    {
        return {
            counter : state.counter + 1
        }
    }
    else if(action.type === 'decrement')
    {
        return {
            counter : state.counter - 1
        }
    }
    return state;
}
const store = createStore(counterReducer);

export default store; 