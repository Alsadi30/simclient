import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../store/actions/addOrder'

const AddOrder = () => {
  const dispatch = useDispatch()

  let [formData, setFormData] = useState({})

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addOrder(formData))
    e.target.reset()
  }

  return (
    <div class='dash'>
      <form onSubmit={handleSubmit}>
        <div className='form-group-file'>
          <label class='form-control' htmlFor='companyName'>
            Company Name
          </label>
          <input
            type='text'
            required
            className='form-control shadow'
            name='companyName'
            id='companyName'
            aria-describedby='companyName'
            placeholder='Enter Company Name '
            onChange={handleChange}
          />
        </div>

        <div className='form-group-file'>
          <label class='form-control' htmlFor='numberOfproduct'>
            Number Of Product
          </label>

          <input
            type='number'
            required
            className='form-control shadow'
            name='numberOfproduct'
            id='numberOfproduct'
            aria-describedby=''
            placeholder='Enter Number Of Product '
            onChange={handleChange}
          />
        </div>

        <button className='submit-button'>Submit</button>
      </form>
    </div>
  )
}

export default AddOrder
