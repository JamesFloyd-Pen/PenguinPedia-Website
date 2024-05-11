import React from 'react';
import '../components/styles/Penguins.css';


function EmperorPenguin() {
  return (
    <div className="info-container">
      <div className="info-penguin-box">
        <h1>Emperor Penguin</h1>
        <h2>General Information</h2>
        <ul>
          <li><strong>Scientific Name:</strong> Aptenodytes forsteri</li>
          <li><strong>Height:</strong> Up to 130 cm</li>
          <li><strong>Weight:</strong> 22 to 45 kg</li>
          <li><strong>Lifespan:</strong> 15 to 20 years</li>
          <li><strong>Diet:</strong> Mainly fish and squid</li>
        </ul>
      </div>
      <div className="info-section">
        <h2>Interesting Facts</h2>
        <ul>
          <li>They are the tallest and heaviest of all penguin species.</li>
          <li>They can dive up to 535 meters deep.</li>
          <li>They can stay underwater for around 20 minutes.</li>
        </ul>
      </div>
    </div>
  );
}

export default EmperorPenguin;