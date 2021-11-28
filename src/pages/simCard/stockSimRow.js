import Col from '../../components/colum'
import { Link } from 'react-router-dom'
import moment from 'moment'

const StockSimRow = ({sim}) => {

    return (
        <>        
            
            <tr bgcolor={sim.operatorName==='Vodafone'?'#FF0000':sim.operatorName==="Wind"?'orange':'white'} className='table-raw' style={{color:sim.operatorName==='Very'?'black':'white'}} >  

                   <Col val={sim.operatorName} />
                    
                    <Col val={sim.simNumber} />
                    
                    <Col val={sim.ICCID} />
                    
                    <Col val={sim.cost} />
                    
                    <td className='col'><Link to={`/sim/attachment/${sim.operatorName}/${sim.id}`} >
                       <button className='active-button'> Sale </button> </Link></td>
                    
                    <Col val={moment(sim.createdAt).format('LL')} />

                    <Col val={moment(sim.orderedAt).format('LL')} />
                </tr>
         
         </>
    )

}


export default StockSimRow