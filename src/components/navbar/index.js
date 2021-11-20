import NavItem from "./navitem"
import { Outlet } from "react-router-dom"

const Navbar = () => {
    
    return (
        <div>
            <NavItem itemnames={['Dashboard', "Orders","Sim Card" , "Report" , "User" ]} />
            <Outlet/>
        </div>
    )
}

export default Navbar