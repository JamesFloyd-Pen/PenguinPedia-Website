import React from "react";
import './components/styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact="/" component={Home}></Route>
        </Switch>
      </Router>
 
    </div>

  );
}

export default App;

/*
TODO
1. Fix up the Home Page
2.Make a Penguin Entry

*/