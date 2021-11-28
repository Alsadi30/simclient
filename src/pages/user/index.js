import Col from '../../components/colum'
import {useSelector} from 'react-redux'


const User = () => {

    const {user , isLoading} =  useSelector(state=>state.loginReducer) 

    return (
     !isLoading &&   <div>
             <table style={{display:'table'}} className='table-1'>
        <thead className='table__thead'>
            <tr>
                <th className='tb-head'> Name</th>
                <th className='tb-head'>Email</th>
            </tr>
        </thead>
        <tbody>
                 
                <tr bgcolor="#fff1f1" className='table-raw'>
                    
                    <Col val={user.name} />
                    
                    <Col val={user.email} />
                    
                </tr>
         </tbody>
      </table>
        </div>
    )
}


export default User