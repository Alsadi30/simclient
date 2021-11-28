import Col from "../../components/colum"
import moment from 'moment'


 
const MySim = ({ sim }) => {

    return (
        <>        
       
       <tr bgcolor={sim.operatorName==='Vodafone'?'#FF0000':sim.operatorName==="Wind"?'orange':'white'} className='table-raw' style={{color:sim.operatorName==='Very'?'black':'white'}} >  
                        
                        <Col val={sim.operatorName} />
                        
                        <Col val={sim.simNumber} />
                        
                        <Col val={sim.ICCID} />
            
                    <Col val={moment(sim.activatedAt).format('LL')} />

                    <Col val={sim.approvalStatus?'Activated':'Not Activated'} />

                    <Col val={moment(sim.activatedAt).format('LL')} />

                    <Col val={sim.cost} />
           
            </tr>
               
     </>
    )
}

export default MySim 