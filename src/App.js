
import Login from "./pages/login";
import {logout} from './store/actions/loginAction'
import {
  Routes,
  Route,useLocation,Navigate,useNavigate
} from "react-router-dom";
import Navbar from "./components/navbar";
import { Helmet } from 'react-helmet'
import Header from "./components/header";
import Dashboard from "./pages/dashboard"
import Signup from "./pages/signup";
import AddOrder from "./pages/addOrder";
import AllSimCard from "./pages/simCard/allSimCard";
import SoldSimCard from "./pages/simCard/soldSim";
import SimInStock from './pages/simCard/simInStock'
import AddAttachment from "./pages/attachment";
import Reports from "./pages/reports";
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import User from './pages/user'



function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  let location = useLocation()
  const {isAuthenticated} = useSelector(state=>state.loginReducer)
 
  useEffect(() => {
    const token = localStorage.getItem('auth_token')
        
        if (token) {
          const decodedToken = jwtDecode(token);   
          if (decodedToken.exp * 1000 < new Date().getTime()) {
              dispatch(logout(navigate))
               
             
          }
        }
  },[navigate,dispatch])


  return (
    
      <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montagu+Slab&family=Praise&family=Raleway&display=swap" rel="stylesheet"/>

				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap'
					rel='stylesheet'
        />
        

      </Helmet>
      
     
      <div>
        {location.pathname === '/login' ? null : <Header />}
        
         <div className={location.pathname === '/login'  ? null :"cont"} > 
        
          <div className={location.pathname === '/login'   ? null :"navbar"}>
            
        {location.pathname === '/login' ? null :  <Navbar />} 
                 </div>
          <Routes>
          <Route path='signinng' element={<Signup />} />
            <Route path='login' element={<Login />} />
            
               <Route path='/' element={<Home isLogin={isAuthenticated} Comp={Dashboard} />} />
            
            <Route path='dashboard' element={<DashRoute isLogin={isAuthenticated} comp={'dashboard'} />} />
            
            <Route path='addorder' element={<OrderPri isLogin={isAuthenticated} comp={'addorder'} />} />
             
            <Route path='allsimcard' element={<PriAllSimCard isLogin={isAuthenticated} comp={'allsimcard'} />} />
            
            <Route path='soldsim' element={<PriSoldSim isLogin={isAuthenticated} comp={'allsimcard'} />} />

            <Route path='siminstock' element={<PriInStockSim  isLogin={isAuthenticated} comp={'allsimcard'} />} />

            <Route path='sim/attachment/:operatorName/:id' element={<AttachmentPri isLogin={isAuthenticated} comp={'allsimcard'} />} />
            {/* <Route path='alluser/:id' element={<UserSim />} /> */}
            <Route path='report' element={<ReportPri isLogin={isAuthenticated} comp={'allsimcard'} />} />
            
            <Route path='user' element={<UserPri  isLogin={isAuthenticated} comp={'user'} />} />
            
          </Routes>

          
         </div>
            
          
            </div>
          
      
      </div>
   
  );
}

export default App;

const Home = ({ isLogin,Comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<Comp/> : <Navigate to="/login" /> 
}


const DashRoute = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<Dashboard path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const OrderPri = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<AddOrder path={`/${comp}`} />  : <Navigate to="/login" /> 
}



const PriAllSimCard = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<AllSimCard path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const PriInStockSim = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<SimInStock path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const PriSoldSim = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<SoldSimCard path={`/${comp}`} />  : <Navigate to="/login" /> 
}



const AttachmentPri = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<AddAttachment path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const ReportPri = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<Reports path={`/${comp}`} />  : <Navigate to="/login" /> 
}


const UserPri = ({ isLogin, comp }) => {
  const {isLoading} = useSelector(state=>state.loginReducer)
  return isLogin && !isLoading ?<User path={`/${comp}`} />  : <Navigate to="/login" /> 
}