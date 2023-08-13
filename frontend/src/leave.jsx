import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function leave() {
const [values, setValues]= useState({
  email: '',
  subject: ''
})

axios.defaults.withCredentials = true;
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const [error, setError] = useState('')

const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://localhost:8081/leave',values)
  .then(res => {
      if(res.data.Status === 'Success') {
          const id = res.data.id;
             navigate('/leavestatus/'+id);
      } else {
             setError(res.data.Error);
      }
  })
  .catch(err => console.log(err));
}

  return (
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <div className='leave rounded'>
    <div className='text-danger'>
                {error && error}
            </div>
      <h2 className='mb-3'>Apply For Leave</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-leave mb-2">
      <label htmlFor='email'><strong>Email</strong></label>
        <input type="email" placeholder='Enter Email' name='email'
          onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0' />
      </div>
      <div className="form-leave mb-2">
      <label htmlFor='text'><strong></strong></label>
        <textarea  placeholder='Enter Subject' name='subject' 
          onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
      </div>
    <button type='submit' className='btn btn-success block mt-2'>SUBMIT</button>
    </form>
    </div>
    </div>
  )
}

export default leave
