import Types from '../actions/type'


const init ={
   offers:[],
    error: {},
    isLoading:true
}
 const simReducer =(state=init,action) =>{
    switch(action.type){
        case Types.SET_OFFER :{
            return {
                offers: action.payload.offers,
                error: {},
                isLoading:false
            }
        }
        case Types.OFFER_ERROR : {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}


export default simReducer