import React from "react";

const Cart = ({ test }) => {
  console.log(test);

  return (
    <div>
      {test.test.map((tt, index) => (
        <ol className='list-group mt-3 shadow-sm'>
          <div className='list-group-item'>
            <div className='row'>
              <div className='col-10' key={tt.id}>
                {tt.title}
              </div>
              <div className='col-2'><i class="fa-solid fa-trash"></i></div>
            </div>

          </div>
        </ol>
      ))}
    </div>
  );
};

export default Cart;
