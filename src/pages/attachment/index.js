import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { addAttachment } from '../../store/actions/simAction'
import { toast } from 'react-toastify'

const AddAttachment = () => {
  let params = useParams()

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const { offers } = useSelector(state => state.offerReducer)

  let filterdOffer = offers.filter(offer => {
    return offer.operatorName === params.operatorName
  })

  const [formDatum, setFormData] = useState({})

  const formData = new FormData()

  const handleChange = e => {
    setFormData({ ...formDatum, [e.target.name]: e.target.value })
  }

  const handleFile = e => {
    setFormData({ ...formDatum, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formDatum.ICCID ? formDatum.ICCID.length !== 19 : '') {
      toast.error(`Please Maintain 19 digits in ICCID`, {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      })
    } else {
      for (const [key, value] of Object.entries(formDatum)) {
        console.log(`${key}: ${value}`)
        formData.append(key, value)
      }

      dispatch(addAttachment(params.id, formData, navigate))

      e.target.reset()
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-part'>
        <div>
          <div className='form-group bold'>
            <label className='form-control' htmlFor='Offer'>
              OFFER
            </label>
            <select
              //   className='form-control'
              name='Offer'
              className='form-select shadow'
              aria-label='Operator'
              onChange={handleChange}
            >
              <option value='' className='form-control'>
                Select Offer
              </option>
              {filterdOffer.map(offer => (
                <option value={offer.title}>{offer.title}</option>
              ))}
            </select>
            <div id='helpId' className='offerof'>
              {params.operatorName === 'Very' &&
                !!formDatum.Offer &&
                'Portabilita disponiobile solo con Iliad Postemobili Digi ,Fastweb Lycamobile , Tiscali'}
            </div>
          </div>

          <div className='form-group bold'>
            <label className='form-control' htmlFor='clientfirstname'>
              CLIENT FIRST NAME
            </label>
            <input
              type='text'
              required
              className='form-control shadow'
              name='clientfirstname'
              id='clientfirstname'
              aria-describedby='clientfirstname'
              placeholder='Enter Nome '
              onChange={handleChange}
            />
          </div>

          <div className='form-group bold'>
            <label className='form-control' htmlFor='clientlastname'>
              CLIENT LAST NAME
            </label>
            <input
              type='text'
              required
              className='form-control shadow'
              name='clientlastname'
              id='clientlastname'
              aria-describedby='clientlastname'
              placeholder='Enter Cognome '
              onChange={handleChange}
            />
          </div>

          <div className='form-group bold'>
            <label className='form-control' htmlFor='codicifiscale'>
              CODICIFISCALE
            </label>
            <input
              type='text'
              className='form-control shadow'
              name='codicifiscale'
              id='codicifiscale'
              aria-describedby='codicifiscale'
              placeholder='Enter codicifiscale '
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <h2>MNP- Number Portability</h2>

          <div className='form-group'>
            <label className='form-control' htmlFor='Operator'>
              Operator
            </label>
            <select
              name='Operator'
              className='form-select shadow'
              aria-label='Operator'
              onChange={handleChange}
            >
              <option value=''>Select Operator</option>
              <option value='Wind'>Wind</option>
              <option value='Vodafone'>Vodafone</option>
              <option value='Very'>Very</option>
              <option value='Tim'>Tim</option>
              <option value='LycaMobile'>LycaMobile</option>
              <option value='Tre'>Tre</option>
              <option value='Digi'>Digi</option>
              <option value='Ringo'>Ringo</option>
              <option value='Poste'>Poste</option>
              <option value='Others'>Others</option>
            </select>
          </div>
          <div className='form-group'>
            <label className='form-control' htmlFor='simNumber'>
              Sim Number
            </label>
            <input
              type='number'
              className='form-control shadow'
              name='simNumber'
              id='simNumber'
              aria-describedby=''
              placeholder='Enter Sim Number '
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label className='form-control' htmlFor='ICCID'>
              ICCID
            </label>
            <input
              type='number'
              className='form-control shadow'
              name='ICCID'
              id='ICCID'
              aria-describedby='ICCID'
              placeholder='Enter ICCID '
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label className='form-control' htmlFor='Bill'>
              Payment Method
            </label>
            <select
              name='Bill'
              className='form-select shadow'
              aria-label='Bill'
              onChange={handleChange}
            >
              <option value=''>Select Bill Type</option>
              <option value='Prepaid'>Prepaid</option>
              <option value='Postpaid'>Postpaid</option>
            </select>
          </div>

          <div className='form-group'>
            <label className='form-control' htmlFor='note'>
              Note
            </label>
            <input
              type='text'
              className='form-control shadow'
              name='note'
              id='note'
              aria-describedby='note'
              placeholder='Enter a note'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='form-group-file'>
        <label className='form-control' htmlFor='file1'>
          Document 1{' '}
        </label>
        <input
          type='file'
          className='form-control shadow'
          name='file1'
          id='file1'
          aria-describedby='file1'
          placeholder='Choose a file'
          onChange={handleFile}
        />
      </div>

      <div className='form-group-file'>
        <label className='form-control' htmlFor='file2'>
          {' '}
          Document 2
        </label>
        <input
          type='file'
          className='form-control shadow'
          name='file2'
          id='file2'
          aria-describedby='file2'
          placeholder='Choose a file'
          onChange={handleFile}
        />
      </div>

      <div className='form-group-file'>
        <label className='form-control' htmlFor='file3'>
          Codicifiscale
        </label>
        <input
          type='file'
          className='form-control shadow'
          name='file3'
          id='file3'
          aria-describedby='file3'
          placeholder='Choose a file'
          onChange={handleFile}
        />
      </div>

      <div className='form-group-file '>
        <label className='form-control' htmlFor='file4'>
          Sim
        </label>
        <input
          type='file'
          className='form-control shadow'
          name='file4'
          id='file4'
          aria-describedby='file4'
          placeholder='Choose a file'
          onChange={handleFile}
        />
      </div>

      <button className='submit-button'>Submit</button>
    </form>
  )
}

export default AddAttachment
