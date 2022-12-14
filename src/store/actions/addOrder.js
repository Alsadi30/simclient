import axios from 'axios'
import { toast } from 'react-toastify'
import URL from '../serverUrl'

export const addOrder = formData => dispatch => {
  axios
    .post(`${URL}/order/create`, formData)
    .then(res => {
      toast.success(' Order Placed Successfully !', {
        position: toast.POSITION.TOP_CENTER
      })
    })
    .catch(e => {
      toast.error(`${e.message}. Place Your Order Again`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      })
    })
}
