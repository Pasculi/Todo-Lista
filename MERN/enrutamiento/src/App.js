import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NumberComponent from "./components/Number";
import Palabra from "./components/Palabra";
import PalabraConColores from "./components/PalabraConColores";
import PalabraConUseMatch from "./components/PalabraConUseMatch";

function App() {
  return (
    <div className="container">
      <Router>

        <Switch>

          <Route path="/" exact>
            Bienvenidassss
          </Route>
          <Route path="/:palabra" exact component={Palabra} />
          <Route path="/:numero" exact component={NumberComponent} />

          <Route
            path="/:palabra/:color/:fondo"
            exact
            component={PalabraConColores}
          />
          <Route path="gancho/:palabra/:color/:fondo" exact>
            <PalabraConUseMatch />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;