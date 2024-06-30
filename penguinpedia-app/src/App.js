import React from "react";
import './components/styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Penguins from "./pages/Penguins";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import EmperorPenguin from "./pages/Emperor_Penguin";
import KingPenguin from "./pages/KingPenguin";
import PENGUIN_NAVBAR from "./components/PENGUIN_NAVBAR";
import PENGUIN_FOOTER from "./components/PENGUIN_FOOTER";

function App() {
  return (
    <div className="App">
    <Router>
      <PENGUIN_NAVBAR />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Penguins" component={Penguins} />
        <Route path="/Location" component={Location} />
        <Route path="/Contact" component={Contact} />
        <Route path="/EmperorPenguin" component={EmperorPenguin} />
        <Route path="/KingPenguin" component={KingPenguin} />
      </Switch>
      <PENGUIN_FOOTER />

    </Router>
  </div>

  );
}

export default App;

/*
TODO
          <PENGUIN_NAVBAR/>
          <Route index component={Home}></Route>
              <Route path="/" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Penguins" component={Penguins}></Route>
          <Route path="/Location" component={Location}></Route>

https://trello.com/b/AsGN7RJl/penguinpedia-website

*/