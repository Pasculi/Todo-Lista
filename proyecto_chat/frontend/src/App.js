import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './views/Login';
//import Users from './views/Users';
//import Profile from './views/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Router exact path='/login'>
        <Login />
      </Router>
    </Router>
  );
}

export default App;
