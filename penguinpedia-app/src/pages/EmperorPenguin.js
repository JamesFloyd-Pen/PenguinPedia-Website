import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/emperorpenguin-2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// Template for the Rest of the Penguin Species Pages

function EmperorPenguin() {
    return (
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Emperor Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
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
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Emperor Penguin is the largest and heaviest of all penguin species. They are native to Antarctica and are known for their unique breeding habits. Emperor Penguins are the only penguins that breed during the harsh Antarctic winter. They are also the deepest diving and the most aquatic of all penguins.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Physical Description</h2>
                    <p className="overview-text">
                        Emperor Penguins are easily recognizable by their distinctive black and white plumage. They have a black
                        head, back, and flippers, with a white belly and chest. Emperor Penguins are the tallest and heaviest of all
                        penguin species, with adults reaching heights of up to 130 cm and weights of up to 45 kg. They have a
                        streamlined body shape and long, stiff flippers that make them powerful swimmers.   
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Fun Facts</h2>
                    <p>
                        - Emperor Penguins are the only penguins that breed during the harsh Antarctic winter. <br />
                        - Emperor Penguin colonies have been discovered from space! <br />

                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default EmperorPenguin;

/*

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

        SOURCE
        * https://www.wwf.org.uk/learn/fascinating-facts/emperor-penguins



*/