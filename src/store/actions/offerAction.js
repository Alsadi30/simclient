import axios from 'axios'
import Types from './type'
import {  toast } from 'react-toastify';
import URL from '../serverUrl'

export const getOffer = () => (dispatch) => {
    axios.get(`${URL}/offers`)
        .then(res => {
            dispatch({
                type: Types.SET_OFFER,
                payload: {
                    offers:res.data.offers
                }
                
          })
        })
        .catch(e => {
            dispatch({
                type: Types.OFFER_ERROR,
                payload: {
                    error:e
                }
                
            })
            toast.error(`${e.message}`, {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            })
          
       })
}