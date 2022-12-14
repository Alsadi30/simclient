import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import RowAllSim from './rowAllSim'
import { getAllSim } from '../../store/actions/simAction'
import ReactLoading from 'react-loading'

const AllSimCard = () => {
  const dispatch = useDispatch()
  const { allSim, isLoading } = useSelector(state => state.simReducer)

  useEffect(() => {
    dispatch(getAllSim())
  }, [dispatch])

  let revSim = allSim.slice(0).reverse()

  return (
    <div class='dash'>
      <h3 className='dashboard-title'>All Sims</h3>
      <table style={{ display: 'table' }} className='table-1'>
        <thead className='table__thead'>
          <tr>
            <th className='tb-head'>Operator Name</th>
            <th className='tb-head'>Sim Number</th>
            <th className='tb-head'>Sim ICCID</th>
            <th className='tb-head'>Sale Status</th>
            <th className='tb-head'>Activation Status</th>
            <th className='tb-head'>Sold At</th>
            <th className='tb-head'>Cost</th>
            <th className='tb-head'>Approved At </th>
            <th className='tb-head'>Activation Date</th>
            <th className='tb-head'>Ordered At</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className='loading'>
              <ReactLoading
                className='loading'
                type='bubbles'
                color='#2C3E50'
                height={60}
                width={60}
              />
            </div>
          ) : (
            revSim.map(sim => {
              return <RowAllSim key={sim.id} sim={sim} />
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AllSimCard
