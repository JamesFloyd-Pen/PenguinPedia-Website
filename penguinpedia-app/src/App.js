import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Penguins from './pages/Penguins';
import Location from './pages/Location';
import Contact from './pages/Contact';
import EmperorPenguin from './pages/EmperorPenguin';
import KingPenguin from './pages/KingPenguin';
import AdeliePenguin from './pages/AdeliePenguin';
import ChinstrapPenguin from './pages/ChinstrapPenguin';
import GentooPenguin from './pages/GentooPenguin';
import MacaroniPenguin from './pages/MacaroniPenguin';
import LittleBluePenguin from './pages/LittleBluePenguin';
import AfricanPenguin from './pages/AfricanPenguin';
import FiordlandPenguin from './pages/FiordlandPenguin';
import HumboldtPenguin from './pages/HumboldtPenguin';
import MagellanicPenguin from './pages/MagellanicPenguin';
import GalapagosPenguin from './pages/GalapagosPenguin';
import YellowEyedPenguin from './pages/YellowEyedPenguin';
import NorthernRockhopperPenguin from './pages/NorthernRockhopperPenguin';
import SouthernRockhopperPenguin from './pages/SouthernRockhopperPenguin';
import SnaresPenguin from './pages/SnaresPenguin';
import RoyalPenguin from './pages/RoyalPenguin';
import ErectCrestedPenguin from './pages/ErectCrestedPenguin';
import PENGUIN_NAVBAR from './components/Penguin_navBar';
import PENGUIN_FOOTER from './components/Penguin_footer';

function App() {
  return (
    <div className="App">
      <Router basename="/PenguinPedia-Website">
        <PENGUIN_NAVBAR />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Penguins" element={<Penguins />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/EmperorPenguin" element={<EmperorPenguin />} />
          <Route path="/KingPenguin" element={<KingPenguin />} />
          <Route path="/AdeliePenguin" element={<AdeliePenguin />} />
          <Route path="/ChinstrapPenguin" element={<ChinstrapPenguin />} />
          <Route path="/GentooPenguin" element={<GentooPenguin />} />
          <Route path="/MacaroniPenguin" element={<MacaroniPenguin />} />
          <Route path="/LittleBluePenguin" element={<LittleBluePenguin />} />
          <Route path="/AfricanPenguin" element={<AfricanPenguin />} />
          <Route path="/FiordlandPenguin" element={<FiordlandPenguin />} />
          <Route path="/HumboldtPenguin" element={<HumboldtPenguin />} />
          <Route path="/MagellanicPenguin" element={<MagellanicPenguin />} />
          <Route path="/GalapagosPenguin" element={<GalapagosPenguin />} />
          <Route path="/YellowEyedPenguin" element={<YellowEyedPenguin />} />
          <Route path="/NorthernRockhopperPenguin" element={<NorthernRockhopperPenguin />} />
          <Route path="/SouthernRockhopperPenguin" element={<SouthernRockhopperPenguin />} />
          <Route path="/SnaresPenguin" element={<SnaresPenguin />} />
          <Route path="/RoyalPenguin" element={<RoyalPenguin />} />
          <Route path="/ErectCrestedPenguin" element={<ErectCrestedPenguin />} />
        </Routes>
        <PENGUIN_FOOTER />
      </Router>
    </div>
  );
}

export default App;

//TEST IF COMMENT GOES TO MAIN