import Col from "../../components/colum"

import moment from 'moment'


 
const RowAllSim = ({ sim }) => {

    return (
        <>        
        
        <tr bgcolor={ sim.operatorName === 'Vodafone'
            ? '#FF0000'
            : sim.operatorName === 'Wind'
            ? 'orange'
            : sim.operatorName === 'Kena'
            ? 'orange'
            : 'white' } className='table-raw' style={{color:sim.operatorName==='Very'?'black':'white'}} >  
                        
                        <Col val={sim.operatorName} />
                        
                        <Col val={sim.simNumber} />
                        
                        <Col val={sim.ICCID} />
            
                        <Col val={sim.saleStatus?'Sold':'In Stock'} />
                    
                        <Col val={sim.approvalStatus?'Activated':'Not Activated'} />

                    <Col val={moment(sim.soldAt).format('LL')} />

                    <Col val={sim.cost} />

                    <Col val={moment(sim.createdAt).format('LL')} />
                    
                    <Col val={moment(sim.activatedAt).format('LL')} />

                    <Col val={moment(sim.orderedAt).format('LL')} />

                   
           
            </tr>
            
               
     </>
    )
}

export default RowAllSim 


