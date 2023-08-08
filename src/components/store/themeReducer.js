import {createStore} from "redux";
const initialState = {theme:'lightMode'}
const themeReducer = (state = initialState , action)=>{
    if(action.type === 'dark')
    {
        return {
            theme : 'darkMode'
        }
    }
    else if(action.type === 'light')
    {
        return {
            theme : 'lightMode'
        }
    }
    return state;
}

export default themeReducer; 