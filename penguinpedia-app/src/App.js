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
import AdeliePenguin from "./pages/AdeliePenguin";
import ChinstrapPenguin from "./pages/ChinstrapPenguin";
import GentooPenguin from "./pages/GentooPenguin";
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
        <Route path="/AdeliePenguin" component={AdeliePenguin} />
        <Route path="/ChinstrapPenguin" component={ChinstrapPenguin} />
        <Route path="/GentooPenguin" component={GentooPenguin} />
      </Switch>
      <PENGUIN_FOOTER />

    </Router>
  </div>

  );
}

export default App;
