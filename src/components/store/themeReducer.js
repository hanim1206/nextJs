import {createStore} from "redux";

const themeReducer = (state = {theme:'lightMode'} , action)=>{
    if(action.type === 'light')
    {
        return {
            theme : 'lightMode'
        }
    }
    else if(action.type === 'dark')
    {
        return {
            theme : 'darkMode'
        }
    }
    return state;
}

export default themeReducer; 