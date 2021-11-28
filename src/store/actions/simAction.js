import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'
import {  toast } from 'react-toastify'; 


export const getAllSim = () => (dispatch) => {
    axios.get(`${URL}/sim`)
        .then(res => {
          dispatch({
            type: Types.GET_SIM,
            payload: {
              allSim:res.data.allSim
            }
          })
        })
        .catch(e => {
          dispatch({
            type: Types.SIM_ERROR,
            payload: {
              error:e.message
            }
          })
          
       })
}


export const addAttachment = (id,formData, navigate) => (dispatch) => {
  
  axios.post(`${URL}/attachment/${id}`,formData)
    .then(res => {
          toast.success("Attachment Added Successfully !", {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored"
        });
       
     
        })
    .catch(e => {
          
          toast.error(`${e.message}`, {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored"
        })
    
          
       })

}