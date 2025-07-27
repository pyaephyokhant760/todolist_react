import React from 'react'
import Cart from './Cart'

const List = ({test, deleteTask , updateTask}) => {
  
  
  return (
    <div className='mx-auto w-50'>
      <Cart test={test} deleteTask={deleteTask} updateTask={updateTask}/>
      
    </div>
  )
}

export default List