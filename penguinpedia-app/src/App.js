import React from "react";
import './components/styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Penguins from "./pages/Penguins";
import Location from "./pages/Location";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route index component={Home}></Route>
          <Route path="/" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Penguins" component={Penguins}></Route>
          <Route path="/Location" component={Location}></Route>
          
        </Switch>
      </Router>
 
    </div>

  );
}

export default App;

/*
TODO
https://trello.com/b/AsGN7RJl/penguinpedia-website

*/