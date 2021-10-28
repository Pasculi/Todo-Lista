import React, { useState } from 'react'
import './App.scss';
import TodoForm from './views/TodoForm';
import TodoList from './views/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList list={todoList}  />
    </div>
  );
}

export default App;
