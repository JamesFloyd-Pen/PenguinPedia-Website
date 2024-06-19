import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/emperorpenguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmperorPenguin() {
    return (
        <div className="info-container center-content">
            <div className="row">
                <div className="info-section col">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="Emperor Penguin" />
                    </div>
                    <p className="overview-text">
                        The Emperor Penguin is the largest and heaviest of all penguin species. They are native to Antarctica and are known for their unique breeding habits. Emperor Penguins are the only penguins that breed during the harsh Antarctic winter. They are also the deepest diving and the most aquatic of all penguins.
                    </p>
                </div>
                <div className="info-penguin-box col-3">
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Emperor Penguin </li>
                        <li><strong>Scientific Name:</strong> Aptenodytes forsteri</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> Up to 130 cm</li>
                        <li><strong>Weight:</strong> 22 to 45 kg</li>
                        <li><strong>Lifespan:</strong> 15 to 20 years</li>
                        <li><strong>Diet:</strong> Mainly fish and squid</li>
                        <li><strong>Population:</strong> Around 595,000</li>
                        <li><strong>Habitat:</strong> Sea ice in Antarctica</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EmperorPenguin;