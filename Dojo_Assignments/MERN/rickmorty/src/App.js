import React, { setState } from 'react';
import './App.css';
import CharacterList from './Views/CharacterList'

function App() {
  const user = {
    name : 'John',
  }
  const {nombre} = user;
  const {nombre} = setState('');
  return (
    <div className="App">
      <CharacterList name = {nombre}/>
    </div>
  );
}

export default App;
