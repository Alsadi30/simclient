import axios from 'axios'
import Types from './type'
import setAuthToken from '../../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
import URL from '../serverUrl'



export const signin = (user, navigate) => (dispatch) => {
    console.log('calleded')
    axios.post(`http://localhost:5000/api/user/create`, user)
        .then(res => {
            console.log(res)
            
            navigate('/login')
        })
        .catch(e => {
           console.log("error1 "+ e)
          
       })
}


export const login = (user, navigate) => (dispatch) => {
    console.log(user)
    axios.post(`http://localhost:5000/api/user/login`, user)
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
          res.data.isActive? navigate('/dashboard') : navigate('/')
        })
        .catch(e => {
           console.log("error1 "+ e)
           dispatch({
               type:Types.USER_ERROR,
               payload:{
                   error:e.response
               }
           })
       })
}