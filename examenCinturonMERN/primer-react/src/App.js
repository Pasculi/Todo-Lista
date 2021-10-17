import './App.css';
import React from 'react';
//import Home from './views/Home';
//import PersonCard from './views/PersonCard';
//import MyComponent from './views/Children';
//import Eventos from './views/Eventos';
//import Estados from './views/Estados';
//import Estados2 from './views/Estados2';
import { ComponentFuntional } from './views/ComponentFuntional';

function App() {
  return (
    <>

      <ComponentFuntional firstName="Jorge" lastName="Sepúlveda" age={48} hairColor="Castaño"/>
      <ComponentFuntional firstName="Andrea" lastName="Bustos" age={47} hairColor="Castaño"/>
      <ComponentFuntional firstName="Montserrat" lastName="González" age={22} hairColor="Castaño"/>
      <ComponentFuntional firstName="Josefina" lastName="Saravia" age={20} hairColor="Castaño"/>
      <ComponentFuntional firstName="Agustina" lastName="Saravia" age={14} hairColor="Castaño"/>
    </>
  );
}

export default App;
