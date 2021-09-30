import CharacterList from "./Views/CharacterList";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/character" component={CharacterList} />
    </div>
  );
}

export default App;
