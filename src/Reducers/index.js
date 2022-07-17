import { combineReducers } from 'redux'
import AllPostReducer from './ReducerAllpost'

const rootReducer=combineReducers({
    allPosts:AllPostReducer
})

export default rootReducer;