import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/adelie-penguin-2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function AdeliePenguin() {
    return (
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Adelie Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Adelie Penguin</li>
                        <li><strong>Scientific Name:</strong> Pygoscelis adeliae</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> Up to 70 cm</li>
                        <li><strong>Weight:</strong> 3.6 to 6 kg</li>
                        <li><strong>Lifespan:</strong> 10 to 20 years</li>
                        <li><strong>Diet:</strong> Mainly krill and fish</li>
                        <li><strong>Population:</strong> Over 5 million breeding pairs</li>
                        <li><strong>Habitat:</strong> Antarctic coast and nearby islands</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Adélie Penguin (Pygoscelis adeliae) is a medium-sized penguin species native to the Antarctic coast and surrounding islands. Recognized by their distinctive white eye rings and black-and-white plumage, Adélie Penguins are one of the most widespread penguin species in Antarctica. They inhabit the continent’s ice-free coastal regions, where they form large breeding colonies.

                        Adélie Penguins are exceptional swimmers, capable of diving up to 180 meters (590 feet) to hunt for krill, fish, and squid. They rely on sea ice for foraging and are highly adapted to the harsh Antarctic environment. These penguins play a crucial role in the Antarctic ecosystem, serving as indicators of environmental changes due to their dependence on sea ice and prey availability.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Physical Description</h2>
                    <p className="overview-text">
                        Adélie Penguins are easily recognizable
                        by their black head and back, white belly, and distinctive white eye rings. They have a streamlined body shape, with a height of up to 70 cm (28 inches) and a weight of 3.6 to 6 kg (8 to 13 lbs). Adélie Penguins have short, stiff tails and flippers that enable them to swim with agility and speed. Their wings are adapted into flippers for efficient underwater propulsion.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Fun Facts</h2>
                    <p>
                        - Adélie Penguins are named after the wife of French explorer Jules Dumont d'Urville. <br />
                        - Adélie Penguins form large breeding colonies along the Antarctic coast. <br />
                        - Adélie Penguins are excellent swimmers and divers, capable of reaching depths of up to 180 meters. <br />
                    </p>
                </Col>
            </Row>
        </Container>
    );
}


export default AdeliePenguin;


