import React from 'react';
import './App.scss';
import { ListProvider } from './contexts/ListContext';
import ToDoForm from './views/TodoForm';
import ToDoList from './views/TodoList';


function App() {
  
  return (
    <div className="App">
      <ListProvider>
        <ToDoForm />
        <ToDoList />
      </ListProvider>

    </div>
  );
}

export default App;