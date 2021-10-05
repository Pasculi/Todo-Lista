import './App.css';
import React, { useState } from 'react'
import Formulario from './Views/Formulario';
import Results from './Views/Results';


function App() {
  const[person, setPerson] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <div className="App">
      <Formulario inputForm={person} setInputForm={setPerson}/>
      <Results data={person} />
    </div>
  );
}

export default App;
