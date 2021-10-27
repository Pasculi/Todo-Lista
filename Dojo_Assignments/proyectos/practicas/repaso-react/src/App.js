import React, { useState } from 'react';
import './App.css'
import FormBox from './views/FormBox';
import ShowBoxes from './views/ShowBoxes';

function App() {
  const [boxes, setBoxes] = useState('[]')
  return (
    <div className="App">
      <FormBox boxes={boxes} setBoxes={setBoxes} />
      <ShowBoxes data={boxes} />
    </div>
  );
}

export default App;
