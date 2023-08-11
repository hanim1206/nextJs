import { combineReducers } from 'redux';
import counterReducer from '../counterReducer';
import themeReducer from '../themeReducer';
import basketReducer from '../basketReducer,';
import reviewReducer from '../reviewReducer';

export default combineReducers({
    counterReducer,
    themeReducer,
    basketReducer,
    reviewReducer,
})