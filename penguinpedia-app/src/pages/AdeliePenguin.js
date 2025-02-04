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
        </Container>
    );
}


export default AdeliePenguin;

//The Adelie Penguin is a species of penguin that is native to the Antarctic coast and nearby islands. They are known for their distinctive white ring around the eyes. Adelie Penguins are the smallest and most widely distributed species of penguin in the Antarctic region. They are proficient swimmers and can dive to depths of up to 175 meters in search of food.

