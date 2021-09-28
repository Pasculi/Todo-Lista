import React, { useState } from 'react';
import './App.css';
import Home from './views/Home';
import Login from './views/Login';



function App() {
  const msg ='Soy codigo javascript :)';
  const [age, setAge] = useState(1);
  const [txt, setTxt] = useState(' ');
  return (
    <div className="App">
      <h1>Hola Ninjas!!!</h1>
      <Home message ={txt} />
      <Login age={age} setAge = {setAge} txt={txt} setTxt={setTxt} />
      
    </div>
  );
}

export default App;
