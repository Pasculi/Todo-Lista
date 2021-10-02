import React, { useState } from 'react';
import './App.css';
import Espejo from './views/Espejo';
import Login from './views/Login';



function App() {
  const [nombre, setNombre] = useState('');
  const [lastNombre, setLastNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <div className="App">
      <Login txt={nombre} setTxt={setNombre} lastNombre={lastNombre} setLastNombre={setLastNombre} email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirm={confirm} setConfirm={setConfirm}/>

      <Espejo txt={nombre} setTxt={setNombre} lastNombre={lastNombre} setLastNombre={setLastNombre} email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirm={confirm} setConfirm={setConfirm}/>
    </div>
  );
}
export default App;
