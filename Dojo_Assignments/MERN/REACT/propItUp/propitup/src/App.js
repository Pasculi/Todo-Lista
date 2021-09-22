import PersonCard from './views/PropItUp'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard primerNombre = {'Jane'} primerApellido= {'Doe'} edad = {45} pelo = {'Black'}/>
      <PersonCard primerNombre = {'John'} primerApellido= {'Smith'} edad = {88} pelo = {'Brown'}/>
    </div>
  );
}

export default App;
