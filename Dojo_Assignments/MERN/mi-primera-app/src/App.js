import './App.css';
import Saludar from './views/Saludar';

function App() {

  const user = {
    nombre: 'Jorge',
    edad: 48,
    color: 'Verde'
  }
  const Saludo = (nombre, color) => {
    console.log(`Hola como estas ${nombre} ${color}`)
}
 
  return (
    <div className="App">

      <Saludar userInfo={user} greet={Saludo} />
      
    </div>
  );
}

export default App;
