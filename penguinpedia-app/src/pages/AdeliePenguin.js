import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/emperorpenguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function AdeliePenguin() {
    return (
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="Adelie Penguin" />
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
                        The Adelie Penguin is a species of penguin that is native to the Antarctic coast and nearby islands. They are known for their distinctive white ring around the eyes. Adelie Penguins are the smallest and most widely distributed species of penguin in the Antarctic region. They are proficient swimmers and can dive to depths of up to 175 meters in search of food.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}


export default AdeliePenguin;