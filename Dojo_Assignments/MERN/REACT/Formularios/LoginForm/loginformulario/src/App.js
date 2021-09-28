import React, { useState } from 'react';
import './App.css';
import Login from './views/Login'


function App() {
  const [txt, setTxt, password, setPassword, confirm, setConfirm] = useState('');
  
  return (
    <div className="App">
      <Login txt={txt} setTxt={setTxt} password={password} setPassword={setPassword} confirm={confirm} setConfirm={setConfirm}/>
      
    </div>
  );
}

export default App;
