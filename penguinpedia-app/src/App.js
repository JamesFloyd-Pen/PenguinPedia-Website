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
import MacaroniPenguin from "./pages/MacaroniPenguin";
import LittleBluePenguin from "./pages/LittleBluePenguin";
import AfricanPenguin from "./pages/AfricanPenguin";
import FiordlandPenguin from "./pages/FiordlandPenguin";
import HumboldtPenguin from "./pages/HumboldtPenguin";
import MagellanicPenguin from "./pages/MagellanicPenguin";
import GalapagosPenguin from "./pages/GalapagosPenguin";
import YellowEyedPenguin from "./pages/YellowEyedPenguin";
import NorthernRockhopperPenguin from "./pages/NorthernRockhopperPenguin";
import SouthernRockhopperPenguin from "./pages/SouthernRockhopperPenguin";
import SnaresPenguin from "./pages/SnaresPenguin";
import RoyalPenguin from "./pages/RoyalPenguin";
import ErectCrestedPenguin from "./pages/ErectCrestedPenguin";
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
        <Route path="/MacaroniPenguin" component={MacaroniPenguin} />
        <Route path="/LittleBluePenguin" component={LittleBluePenguin} />
        <Route path="/AfricanPenguin" component={AfricanPenguin} />
        <Route path="/FiordlandPenguin" component={FiordlandPenguin} />
        <Route path="/HumboldtPenguin" component={HumboldtPenguin} />
        <Route path="/MagellanicPenguin" component={MagellanicPenguin} />
        <Route path="/GalapagosPenguin" component={GalapagosPenguin} />
        <Route path="/YellowEyedPenguin" component={YellowEyedPenguin} />
        <Route path="/NorthernRockhopperPenguin" component={NorthernRockhopperPenguin} />
        <Route path="/SouthernRockhopperPenguin" component={SouthernRockhopperPenguin} />
        <Route path="/SnaresPenguin" component={SnaresPenguin} />
        <Route path="/RoyalPenguin" component={RoyalPenguin} />
        <Route path="/ErectCrestedPenguin" component={ErectCrestedPenguin} />
      </Switch>
      <PENGUIN_FOOTER />

    </Router>
  </div>

  );
}

export default App;
