import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/kingpenguin-one.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function KingPenguin() {
    return (
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="King Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                    <li><strong>Name:</strong> King Penguin</li>
                    <li><strong>Scientific Name:</strong> Aptenodytes patagonicus</li>
                    <li><strong>Family:</strong> Spheniscidae</li>
                    <li><strong>Height:</strong> Up to 95 cm</li>
                    <li><strong>Weight:</strong> 11 to 16 kg</li>
                    <li><strong>Lifespan:</strong> 20 to 30 years</li>
                    <li><strong>Diet:</strong> Mainly fish, squid, and krill</li>
                    <li><strong>Population:</strong> Over 2 million breeding pairs</li>
                    <li><strong>Habitat:</strong> Subantarctic islands and surrounding marine waters</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                    The King Penguin is the second largest penguin species. They are native to the subantarctic islands and the northern reaches of Antarctica. Known for their striking plumage, King Penguins have a distinctive orange cheek patch. Unlike Emperor Penguins, King Penguins breed in large colonies on sandy or pebble beaches during the summer. They are proficient swimmers, but their dives are generally shallower than those of the Emperor Penguin.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default KingPenguin;
