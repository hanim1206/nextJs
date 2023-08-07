import { combineReducers } from 'redux';
import counterReducer from '../counterReducer';
import themeReducer from '../themeReducer';

export default combineReducers({
    counterReducer,
    themeReducer,
})