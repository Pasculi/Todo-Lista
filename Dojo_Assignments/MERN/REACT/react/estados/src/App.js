import './App.css';
import Login from './views/Login';
import Home from './views/Home';

function App() {
  const [nombre, setNombre] = useState('');
  return (
    <div className="App">
      <Login  nombre = {nombre} setNombre={setNombre}/>
    </div>
  );
}

export default App;
