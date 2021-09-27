import React, { useState } from 'react';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';



function App() {
  const msg ='Soy codigo javascript :)';
  const [age, setAge] = useState(1);
  return (
    <div className="App">
      <h1>Hola Ninjas!!!</h1>
      <Home message ={msg} />
      <Login age={age} setAge = {setAge}/>
      
    </div>
  );
}

export default App;
