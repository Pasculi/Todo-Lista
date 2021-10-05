import React from "react";

export const Todo = (props) => {
  return (
    <div>
      <div className="card mt-2">
        <div className="card-body">
          <h3 className="card-title text-end">
            {props.todo.title}
            <button className="btn btn-outline-success ms-2 btn-sm ml-2">
              Terminar
            </button>
          </h3>
          <p className="card-text text-end">
          {props.todo.description}
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-primary btn-sm me-2">
              Editar
            </button>
            <button className="btn btn-outline-danger btn-sm">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
