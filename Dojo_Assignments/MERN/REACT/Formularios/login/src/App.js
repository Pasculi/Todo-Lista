import './App.css';
import Login from './views/Login';



function App() {
  return (
    <div className="App">
      <h1>GTD Telsur</h1>
      <Login msg='Yo soy un props desde la App.js'/>
    </div>
  );
}

export default App;
