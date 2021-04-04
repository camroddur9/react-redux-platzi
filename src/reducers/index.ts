import {combineReducers} from "redux";

import userReducer from './userReducers'
import publicationsReducer from './publicationsReducer'

export default combineReducers({
    userReducer,
    publicationsReducer
});