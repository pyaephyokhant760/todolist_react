import React from 'react'
import Cart from './Cart'

const List = (test) => {
  console.log(test);
  
  return (
    <div className='mx-auto w-50'>
      <Cart test={test}/>
      
    </div>
  )
}

export default List