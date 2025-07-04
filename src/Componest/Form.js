import React from 'react'

const Form = () => {
  return (
    <div className='mx-auto w-50'>
      <h1 className='mb-3'>React To Do List</h1>
      <div className='row'>
      <div className='col-10'>
        <input type='text' className='form-control' placeholder='Enter Tasks. . . '/>
      </div>
      <div className='col-2'>
        <button className='btn btn-primary'>Add Text</button>
      </div>
    </div>
    </div>
    
  )
}

export default Form