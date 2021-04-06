import isLoggedReducer from './isLoggedReducer';
import {combineReducers} from "redux";

const allReducer=combineReducers({
    isLogged:isLoggedReducer,
})

export default allReducer;