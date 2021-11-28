import axios from 'axios'
import Types from './type'
import setAuthToken from '../../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import {  toast } from 'react-toastify';
import URL from '../serverUrl'



export const signin = (user, navigate) => (dispatch) => {

    axios.post(`${URL}/user/create`, user)
        .then(res => {
            toast.success("User Successfully Created!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            
            navigate('/login')
        })
        .catch(e => {
            if (e.response.data.name) {
                toast.error(`${e.response.data.name}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
            if (e.response.data.email) {
                toast.error(`${e.response.data.email}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
            if (e.response.data.password) {
                toast.error(`${e.response.data.password}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
            if (e.response.data.confirmPassword) {
                toast.error(`${e.response.data.confirmPassword}`, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                })
            }
        })
}


export const login = (user, navigate) => (dispatch) => {
    axios.post(`${URL}/user/login`, user)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('auth_token', token)
            setAuthToken(token)
            const decode = jwtDecode(token)
            dispatch({
                type: Types.SET_USER,
                payload: {
                    user: decode
                }
            })
            navigate('/dashboard')
            
            toast.success("You Are Successfully LogedIn!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
              });

        })
        .catch(e => {
          
           dispatch({
               type:Types.USER_ERROR,
               payload:{
                   error:e.response.data.message
               }
           })
           toast.error(`${e.response.data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored"
          });
       })
}

export const logout = (navigate) => dispatch => {
    localStorage.removeItem('auth_token')
    
    dispatch({
            type:Types.SET_USER,
            payload:{
              user:{},
            }

      })
     navigate('/login')
      
    
 }




