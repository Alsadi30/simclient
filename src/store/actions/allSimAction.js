import axios from 'axios'
import Types from './type'
import URL from '../serverUrl'



export const getAllSim = () => (dispatch) => {
    axios.get(`http://localhost:5000/api/sim`)
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
  
  axios.post(`http://localhost:5000/api/attachment/${id}`,formData)
    .then(res => {
          console.log(res.data)
          // dispatch({
            
          // })
      navigate('/simcard')
        })
    .catch(e => {
          console.log(e)
          // dispatch({
          
          // })
          
       })

}