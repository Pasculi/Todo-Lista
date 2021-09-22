import "./App.css";
import logo from "./logo-react-icon.png";
import MiNuevoComponente from "./views/MiNuevoComponente";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <h1 class="display-2">Formulario con RACT</h1>
      La hora actual es: {new Date().toLocaleTimeString()}
      
        <img src={logo} className="App-logo" alt="logo" />
     
      <Home />
      <MiNuevoComponente />
    </div>
  );
}
export default App;