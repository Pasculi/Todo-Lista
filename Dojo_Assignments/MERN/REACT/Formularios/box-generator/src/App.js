import logo from './logo.svg';
import BoxForm from './views/BoxForm';
import Results from './views/Results';
import './App.css';
import React, {useState} from "react";

function App() {


  const [boxes,setBoxes]=useState([]);

  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes} />
      <Results data={boxes} />
      
    </div>
  );
}

export default App;
