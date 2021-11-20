import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import simReducer from './simReducer'

const rootReducer = combineReducers({
    loginReducer,simReducer
})


export default rootReducer