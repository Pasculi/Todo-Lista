import React from "react";
import { Todo } from "./Todo";

const todos=[
    {
        title:"Tarea #1",
    description:"Descripción tarea 1",
    completed:false
    },
    {
        title:"Tarea #2",
        description:"Descripción tarea 2",
        completed:true
    }
]

export const TodoList = () => {

  return (
    <div>
      <h1>Lista de tareas</h1>
      
     {todos.map(todo => <Todo todo={todo} />)}
     
    </div>
  );
};
