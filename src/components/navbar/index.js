import NavItem from "./navitem"
import { Outlet } from "react-router-dom"

const Navbar = () => {
    
    return (
        <>
            <NavItem itemnames={['Dashboard', 'Sim In Stock' ,"Add Order","All Sim Card" ,'Sold Sim' , "Report" , "User" ]} />
            <Outlet/>
        </>
    )
}

export default Navbar