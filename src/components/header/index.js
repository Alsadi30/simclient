import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avatar.png'

const Header = () => {


    return (
        <div>
            <img src={logo} alt="logo" width='35px' height='35px' />
            <span>
                Phone Care( Sim Service )
            </span>

            <div>
                <img src={avatar} alt='avatar' width='35px' height="35px" />
                <span>Admin</span>
            </div>
        </div>
    )

}


export default Header