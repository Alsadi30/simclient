import {useSelector ,useDispatch} from 'react-redux'
import StockSimRow from './stockSimRow'
import {useState,useEffect} from 'react'
import ReactLoading from 'react-loading';
import {getAllSim } from '../../store/actions/simAction'



const SimInStock = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSim())
    },[dispatch])

    
    const { allSim, isLoading } = useSelector(state => state.simReducer)
    const [iccid,setIccid] = useState('')

    const filterSim = allSim.filter(sim => sim.saleStatus === false && iccid? iccid === sim.ICCID.slice(-4):sim.saleStatus === false)
    
 





    return (
    
        <div className="dash">
            <div className='re-grp'>        
                <label className='re-lab' htmlFor='product' > ICCID </label> <input onChange={(e) => setIccid(e.target.value)} className='re-inp' type='number' name='from' />
            </div>
            <h3 className='dashboard-title'> Sims Which Are Now In Stock</h3>
            <table  className='table-1'>
            <thead className='table__thead'>
				<tr>
					<th className='tb-head'>Operator Name</th>
					<th className='tb-head'>Sim Number</th>
					<th className='tb-head'>Sim ICCID</th>          
                        <th className='tb-head'>Cost</th>
                        <th className='tb-head'>Take Action</th>
                        <th className='tb-head'>Approved At </th>
                        <th className='tb-head'>Ordered At</th>
                        
                       
				</tr>
                </thead>
                
                <tbody> 
                {isLoading ? <div className='loading' ><ReactLoading className='loading' type='bubbles' color='#2C3E50' height={60} width={60} /></div> : filterSim.map(sim =>
                      {
                            return (
                         
                                <StockSimRow key={sim.id} sim={sim} />
                            )
                        })}
               </tbody>
            </table>
                       
                    
        </div>     
    )
}


export default SimInStock