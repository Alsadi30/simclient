import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import { addAttachment } from '../../store/actions/allSimAction'



// const initialState = {
//     name: '',
//     password:''
// }


const AddAttachment = () => {

    let params = useParams()
    console.log(params)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    
    // const error = useSelector((state)=>state.loginreducer.error)

    const [formDatum,setFormData] = useState({})

    const formData = new FormData()
    
   
 
    const handleChange = (e) => {
        setFormData({ ...formDatum, [e.target.name]: e.target.value })
    }
    
    const handleFile = (e) => {

       setFormData ({...formDatum,[e.target.name]: e.target.files[0] })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        for (const [key, value] of Object.entries(formDatum)) {
            console.log(`${key}: ${value}`);
            formData.append(key, value)
          }
       
        dispatch(addAttachment(params.id,formData,navigate))
 
}    
    
    return (
        <div>
             <Header />
            <div class="container">
           <div class="row">
           <div class="col-sm-2"><Navbar /></div>
           <div class="col-sm-9">
                    <form onSubmit={handleSubmit}>
                     <div className="form-group">
                         <label htmlFor="clientfirstname">Client First Name</label>
                         <input type="text" required
                          className="form-control" name="clientfirstname" id="clientfirstname" aria-describedby="clientfirstname" placeholder="Enter clientfirstname " onChange={handleChange}/>
                         <small id="clientfirstname" className="form-text text-muted">Help text</small>
                            </div>
                            <div className="form-group">
                         <label htmlFor="clientlastname">Client Last Name</label>
                         <input type="text" required
                          className="form-control" name="clientlastname" id="clientlastname" aria-describedby="clientlastname" placeholder="Enter clientlastname " onChange={handleChange}/>
                         <small id="clientlastname" className="form-text text-muted">Help text</small>
                     </div>

                  <div className="form-group">
                    <label  htmlFor="Offer">Offer</label>
                     {/* <select name='Offer' class="form-select" aria-label="Operator" required onChange={handleChange}>
                         <option value=''>Select Operator</option>
                        <option value="Wind">Wind</option>
                        <option value="Vodafone">Vodafone</option>
                        <option value="Very">Very</option>
                      </select> */}
                       <small id="helpId" className="form-text text-muted">Help text</small>
                            </div>
                            
              <div className="form-group">
                   <label htmlFor="codicifiscale">Codicifiscale</label>
                   <input type="text" 
                      className="form-control" name="codicifiscale" id="codicifiscale" aria-describedby="codicifiscale" placeholder="Enter codicifiscale " onChange={handleChange}/>
                   <small id="codicifiscale" className="form-text text-muted">Help text</small>
              </div>
                            
                     <div className="form-group">
                             <label htmlFor="sendingNumber"> Activation SMS Will Send</label>
                             <input type="number" 
                                className="form-control" name="sendingNumber" id="sendingNumber" aria-describedby="sendingNumber" placeholder="Enter Number in which activation sms will send " onChange={handleChange}/>
                             <small id="sendingNumber" className="form-text text-muted">Help text</small>
                     </div>
                            
                    <div className="form-group">
                         <label htmlFor="ricarica">ricarica</label>
                            <input type="number" 
                               className="form-control" name="ricarica" id="ricarica" aria-describedby="ricarica" placeholder="Enter ricarica " onChange={handleChange}/>
                           <small id="ricarica" className="form-text text-muted">Help text</small>
                      </div>
                            
                            <div className="form-group">
                                <label htmlFor="salesPrice">Sales Price </label>
                               <input type="number" 
                                   className="form-control" name="salesPrice" id="salesPrice" aria-describedby="salesPrice"   onChange={handleChange}/>
                                <small id="salesPrice" className="form-text text-muted">Help text</small>
                            </div>
                            
                            <h2>MNP- Number Portability</h2>

                            <div className="form-group">
  <label  htmlFor="Operator">Operator</label>
  <select name='Operator' class="form-select" aria-label="Operator"  onChange={handleChange}>
 <option value=''>Select Operator</option>
     <option value="Wind">Wind</option>
 <option value="Vodafone">Vodafone</option>
 <option value="Very">Very</option>
</select>
  <small id="helpId" className="form-text text-muted">Help text</small>
                            </div>
                            
<div className="form-group">
  <label htmlFor="ICCID">ICCID</label>
  <input type="number" 
    className="form-control" name="ICCID" id="ICCID" aria-describedby="ICCIC" placeholder="Enter ICCID " onChange={handleChange}/>
  <small id="ICCID" className="form-text text-muted">Help text</small>
                            </div>
                            
                            <div className="form-group">
                         <label htmlFor="simNumber">Sim Number</label>
                         <input type="number" 
                          className="form-control" name="simNumber" id="simNumber" aria-describedby="" placeholder="Enter Sim Number " onChange={handleChange}/>
                      <small id="simNumber" className="form-text text-muted">Help text</small>
                </div>
                <div className="form-group">
                         <label htmlFor="note">Note</label>
                         <input type="text" 
                          className="form-control" name="note" id="note" aria-describedby="note" placeholder="Enter a note" onChange={handleChange}/>
                      <small id="note" className="form-text text-muted">Help text</small>
                            </div>
                            
                            <div className="form-group">
                         <label htmlFor="file1">Choose A File </label>
                         <input type="file" 
                          className="form-control" name="file1" id="file1" aria-describedby="file1" placeholder="Choose a file" onChange={handleFile}/>
                      <small id="file1" className="form-text text-muted">Help text</small>
                            </div>
                            <div className="form-group">
                         <label htmlFor="file2">Choose a file</label>
                         <input type="file" 
                          className="form-control" name="file2" id="file2" aria-describedby="file2" placeholder="Choose a file" onChange={handleFile}/>
                      <small id="file2" className="form-text text-muted">Help text</small>
                            </div>
                            <div className="form-group">
                         <label htmlFor="file3">Choose a file</label>
                         <input type="file" 
                          className="form-control" name="file3" id="file3" aria-describedby="file3" placeholder="Choose a file" onChange={handleFile}/>
                      <small id="file3" className="form-text text-muted">Help text</small>
                            </div>
                            
                   <button>
                      Submit
                   </button>
                        </form>
                    </div>
                </div>
            </div>
           
            
        </div>
    )
}

export default AddAttachment