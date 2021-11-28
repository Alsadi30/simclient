import Types from '../actions/type'


const init ={
    isAuthenticated: false,
    user:{},
    error: {},
    isLoading:true
}

const loginReducer =(state=init,action) =>{
    switch(action.type){
        case Types.SET_USER :{
            return {
                user: action.payload.user,
                isAuthenticated:Object.keys(action.payload.user).length > 0?true:false,
                error: {},
                isLoading:false
            }
        }
        case Types.USER_ERROR : {
            return {
                ...state,
                error: action.payload
            }
        }
        default: return state
    }
}


export default loginReducer