import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/emperorpenguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function FiordlandPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="Fiordland Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Fiordland Penguin</li>
                        <li><strong>Scientific Name:</strong> Eudyptes pachyrhynchus</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> 60 to 70 cm</li>
                        <li><strong>Weight:</strong> 3 to 6 kg</li>
                        <li><strong>Lifespan:</strong> 10 to 20 years</li>
                        <li><strong>Diet:</strong> Fish and squid</li>
                        <li><strong>Population:</strong> 2,500 to 3,000 breeding pairs</li>
                        <li><strong>Habitat:</strong> Fiordland and Stewart Island in New Zealand</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Fiordland Penguin is a species of crested penguin that is native to the fiords and coastal regions of Fiordland and Stewart Island in New Zealand. They are known for their distinctive yellow crest and red eyes. Fiordland Penguins are medium-sized penguins that are highly social and breed in colonies. They are proficient swimmers and feed on fish and squid.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default FiordlandPenguin;