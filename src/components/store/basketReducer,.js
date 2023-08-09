import {createStore} from "redux";
const initialState = {
    prdList: []
}
const basketReducer = (state = initialState , action)=>{
    if(action.type === 'add')
    {
        const name = action.item.name;
        // console.log(state, 'state')
        const newItem = {
            name:action.item.name,
            itemInfo: action.item,
            number: 1,
        }
        return {
            prdList: [...state.prdList, {
                [newItem.name] : newItem
            }]
        }
    }
    return state;
}

export default basketReducer; 