import './App.css';
import { Router } from 'react-router-dom';
import Home from './views/Home';
import Page from './views/Pege';
import Pageplus from './views/Pageplus';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <Page path='/:var' />
        <Pageplus path='/:var/:color1/:color2' />

      </Router>


    </div>
  );
}

export default App;
