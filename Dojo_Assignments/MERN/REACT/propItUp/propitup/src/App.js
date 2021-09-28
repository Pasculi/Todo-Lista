import './App.css';
import PersonCards from './views/PersonCards';


function App() {
  return (
    <div className="App">
      <PersonCards firstName="Jane" lastName="Doe" age={45} hairColor='Black'  />
      <PersonCards firstName="John" lastName="Smith" age={88} hairColor='Brown'  />          
    </div>
  );
}

export default App;