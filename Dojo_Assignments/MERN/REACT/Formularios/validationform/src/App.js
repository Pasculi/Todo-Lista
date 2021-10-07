import './App.scss';
import React, { useState } from 'react';
import Registro from './views/Registro';

function App() {

const [user, setUser] = useState({
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  confirmPassword:''
}
);
  return (
    <div className="App">
      <Registro userApp={user} setUserApp={setUser}/>
    </div>
  );
}


export default App;
