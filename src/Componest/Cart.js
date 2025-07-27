import React from "react";

const Cart = ({ test, deleteTask, updateTask }) => {
  const handleDelete = (id) => {
    if (
      /* eslint-disable-line no-restricted-globals */ confirm("Are you sure?")
    ) {
      deleteTask(id);
    }
  };

  return (
    <div>
      {test.map((tt, index) => (
       <ol className="list-group mt-3 shadow-sm">
          <li
            className={
              "list-group-item " +
              (tt.complete
                ? "bg-success text-white text-decoration-line-through"
                : "")
            }
          >
            <div className="row">
              <div className="col-10">
                <input
                  type="checkbox"
                  className="me-2"
                  onClick={() => updateTask(tt.id, !tt.complete)} checked={tt.complete == true }
                />
                {tt.title}
              </div>
              <div className="col-2">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleDelete(tt.id)}
                ></i>
              </div>
            </div>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default Cart;
