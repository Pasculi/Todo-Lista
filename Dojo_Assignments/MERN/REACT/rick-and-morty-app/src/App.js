import './App.css';
import Navbar from './components/Navbar';

fetch("https://rickandmortyapi.com/api/character").then(response => response.json());

function App() {
  return (
    <div className="App">
      <Navbar brand="Rick and Morty"/>
    </div>
  );
}

export default App;
