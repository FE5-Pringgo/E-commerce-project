import {combineReducers} from 'redux'
import postReducers from './postReducers'

const rootReducer =  combineReducers({
    postReducers,
})

export default rootReducer