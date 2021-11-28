import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import simReducer from './simReducer'
import offerReducer from './offerReducer'

const rootReducer = combineReducers({
    loginReducer,simReducer,offerReducer
})


export default rootReducer