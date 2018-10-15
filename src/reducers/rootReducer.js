import { combineReducers } from 'redux'

import taskReducer from './todos_reducers/taskReducer'
import listReducer from './todos_reducers/listReducer'

export default combineReducers({tasks: taskReducer, lists: listReducer})