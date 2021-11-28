import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avater.jpg'
import {useSelector} from 'react-redux'

const Header = () => {

    const {name} = useSelector(state => state.loginReducer.user)

    return (
        <div className="nav __shadow--lg">
        <div className='twin'>
            <img className='imgi' src={logo} alt="logo" width='30px' height='30px' />
            <div className='brand_name'>
                Phone Care ( Sim Service )
            </div>
            </div>
            <div className='twin'>
                <img className='imgi' src={avatar} alt='avatar' width='35px' height="35px" />
                <div className='user_name'>{name || 'User'}</div>
            </div>
            
            </div>
    )

}


export default Header