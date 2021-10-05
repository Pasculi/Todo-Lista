import React from "react";
import { Todo } from "./views/Todo";
import { TodoForm } from "./views/TodoForm";
import { TodoList } from "./views/TodoList";

const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList />
        </div>
        <div className="col-4">
          <TodoForm />
        </div>
        
      </div>
    </div>
  );
}

export default App;
