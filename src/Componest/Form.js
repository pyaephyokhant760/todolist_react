import React, { useState } from 'react'

const Form = ({submitTask}) => {
  
  
  const [userTask , setUserTask] = useState();

  // const  submitTask = () => {
  //   setUserTask('')
  //   console.log(userTask);
    
  // }
  return (
    <div className='mx-auto w-50'>
      <h1 className='mb-3'>React To Do List</h1>
      <div className='row'>
      <div className='col-10'>
        <input type='text' value={userTask} onChange={ e => setUserTask (e.target.value )} className='form-control' placeholder='Enter Tasks. . . '/>
      </div>
      <div className='col-2'>
        <button type='button'  onClick={ () => submitTask(userTask) } className='btn btn-primary'>Add Text</button>
      </div>
    </div>
    </div>
    
  )
}

export default Form