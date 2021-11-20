import Header from "../../components/header"
import Navbar from "../../components/navbar"
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from "react"
import jwtDecode from "jwt-decode"



const Dashboard = () => {

    const dispatch = useDispatch()
    // const {isLoding,users,error} = useSelector(state=> state.usersReducer )
    // useEffect(() => {
   
    //     const token = localStorage.getItem('auth_token')
        
    //     if (token) {
    //       const decodedToken = jwtDecode(token);   
    //       if (decodedToken.exp * 1000 < new Date().getTime()) {
    //         //   dispatch(logout(history))
    //       }
    //     }
  

 

    return (
        // !isLoding &&
        <div>
            <Header />
            <div class="container">
           <div class="row">
           <div class="col-sm-2"><Navbar /></div>
                    <div class="col-sm-9">
                       
                    
                    </div>
                </div>
                </div>
            
           
        </div>
    )
}

export default Dashboard