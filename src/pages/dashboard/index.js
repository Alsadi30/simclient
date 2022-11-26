import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../../store/actions/loginAction"
import {useEffect } from "react"
import jwtDecode from "jwt-decode"
import { getOffer } from "../../store/actions/offerAction"
import { getAllSim } from '../../store/actions/simAction'
import MySim from './sims'
import Thumbnail from '../../components/thumbnail'
import {useNavigate} from 'react-router-dom'
import ReactLoading from 'react-loading';


const Dashboard = () => {

    const dispatch = useDispatch()
   const navigate = useNavigate()
  
    useEffect(() => {


        const token = localStorage.getItem('auth_token')
        
        if (token) {
          const decodedToken = jwtDecode(token);   
          if (decodedToken.exp * 1000 < new Date().getTime()) {
              dispatch(logout(navigate))
               
             
          }
        }


        dispatch(getAllSim())
        dispatch(getOffer())
    },[dispatch,navigate])


    const {allSim,isLoading } = useSelector(state=>state.simReducer)



let filSim = allSim.filter(sim=>sim.saleStatus===true)

 let sortedSoldSim = filSim.sort((a,b) => {
    return new Date(b.soldAt) - new Date(a.soldAt)
  }) 

    return (
        
       
        <div className="dash">
            <Thumbnail/>
            <h3 className='dashboard-title'>Recently Sim Request Placed By You</h3>

            
                <table style={{ display: 'table' }} className='table-1'>
                    <thead className='table__thead'>
                        <tr>
                            <th className='tb-head'>Operator Name</th>
                            <th className='tb-head'>Sim Number</th>
                            <th className='tb-head'>Sim ICCID</th>
                            <th className='tb-head'>Sales Time</th>
                            <th className='tb-head'>Active Status</th>
                            <th className='tb-head'>Activation Date</th>
                            <th className='tb-head'>Cost</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                    {isLoading ? <div className='loading' ><ReactLoading className='loading' type='bubbles' color='#2C3E50' height={60} width={60} /></div> : sortedSoldSim.map(sim => {
                            return (
                         
                                <MySim key={sim.id} sim={sim} />
                            )
                        })}
                    </tbody>
                </table>
            
                       
                    
        </div>     
           
       
    )
}

export default Dashboard
