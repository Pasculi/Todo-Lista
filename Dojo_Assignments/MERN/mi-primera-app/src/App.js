import './App.css';
import Saludar from './views/Saludar';

function App() {

  const user = {
    nombre: 'Jorge',
    edad: 48,
    color: 'Verde'
  }
  const Saludo = () => {
    alert(`Hola como estas ${user.nombre}`)
}
 
  return (
    <div className="App">

      <Saludar userInfo={user} greet={Saludo} />
      
    </div>
  );
}

export default App;
