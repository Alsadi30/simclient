import Types from '../actions/type'


const init ={
   allSim:[],
    error: {},
    isLoading:true
}
 const simReducer =(state=init,action) =>{
    switch(action.type){
        case Types.GET_SIM :{
            return {
                allSim: action.payload.allSim,
                error: {},
                isLoding:false
            }
        }
        case Types.SIM_ERROR : {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}


export default simReducer