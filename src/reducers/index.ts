import {combineReducers} from "redux";

import userReducer from './userReducers'
import publicationsReducer from './publicationsReducer'
import tasksReducer from './tasksReducer'

export default combineReducers({
    userReducer,
    publicationsReducer,
    tasksReducer,
});