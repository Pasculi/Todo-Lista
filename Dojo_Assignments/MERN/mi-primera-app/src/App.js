import './App.css';
import Saludar from './views/Saludar';

function App() {

  const user = {
    nombre: 'Jorge',
    edad: 48,
    color: 'Verde'
  }
<<<<<<< HEAD
  const Saludo = (nombre, color) => {
    console.log(`Hola como estas ${nombre} ${color}`)
}
 
=======
  const Saludo = () => {
    alert(`Hola como estas ${user.nombre}`)
  }

>>>>>>> 97ed2a57105e42f5b481ed8d3d4008b7c206c13d
  return (
    <div className="App">

      <Saludar userInfo={user} greet={Saludo} />

    </div>
  );
}

export default App;
