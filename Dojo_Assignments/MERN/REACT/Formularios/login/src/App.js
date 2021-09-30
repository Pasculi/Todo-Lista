import Login from './views/login'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = nombre ('');
    const [apellido, setApellido] = setState ('');
    const [email, setEmail] = setState ('');
  return (
    <div className="App">
      <Login nombre={nombre} apellido={apellido} email={email}/>
    </div>
  );
}

export default App;
