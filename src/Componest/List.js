import React from 'react'
import Form from './Form'

const List = () => {
  return (
    <div className='mx-auto w-50'>
      
      <div>
        <ol className='list-group mt-3 shadow-sm'>
          <div className='list-group-item'>
            <div className='row'>
              <div className='col-10'>
                To Do List Task message
              </div>
              <div className='col-2'>Task Message</div>
            </div>

          </div>
        </ol>
        <ol className='list-group mt-3 shadow-sm'>
          <div className='list-group-item'>
            <div className='row'>
              <div className='col-10'>
                To Do List Task message
              </div>
              <div className='col-2'>Task Message</div>
            </div>

          </div>
        </ol>
        <ol className='list-group mt-3 shadow-sm'>
          <div className='list-group-item'>
            <div className='row'>
              <div className='col-10'>
                To Do List Task message
              </div>
              <div className='col-2'>Task Message</div>
            </div>

          </div>
        </ol>
      </div>
    </div>
  )
}

export default List