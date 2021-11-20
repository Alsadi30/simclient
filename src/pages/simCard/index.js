import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllSim } from '../../store/actions/allSimAction'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import SimRow from './simRow'


const SimAll = () => {
    
    const dispatch = useDispatch()

      const {allSim,isLoading} = useSelector(state => state.simReducer)
 
    
    useEffect(() => {
        dispatch(getAllSim())
    }, [])

    return (
        <div>
            <Header />
            <div class="container">
           <div class="row">
                    <div class="col-sm-2">
                        <Navbar />
                    </div>
                    <div class="col-sm-9">
                    {!isLoading && allSim.map(sim => {
                return(<SimRow sim={sim}/>)
            })}
                 </div>    
                </div>
            </div>
        </div>
    )
}

export default SimAll