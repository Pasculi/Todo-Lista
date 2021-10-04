import React, { useState } from 'react';
import Registro from './views/Registro';
import Espejo from './views/Espejo';
import './App.css';


function App() {


  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className="App">
      <Registro inputs={state} setInputs={setState} />
      <Espejo info={state} />
    </div>
  );
}

export default App;