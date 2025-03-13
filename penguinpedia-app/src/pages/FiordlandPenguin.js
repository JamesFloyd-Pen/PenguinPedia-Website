import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/fiordland-penguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function FiordlandPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Fiordland Penguin" />
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
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Physical Description</h2>
                    <p className="overview-text">
                        Fiordland Penguins are easily recognizable by their distinctive yellow crest and red eyes. They have a black head
                        and back, with a white belly and chest. Fiordland Penguins are medium-sized penguins, with adults reaching heights of up to 70 cm and weights of up to 6 kg. They have a streamlined body shape and long, stiff flippers that make them powerful swimmers.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Fun Facts</h2>
                    <p>
                        - Fiordland Penguins are known for their distinctive yellow crest and red eyes. <br />
                        - Fiordland Penguins are highly social and breed in colonies. <br />
                        - Fiordland Penguins are proficient swimmers and feed on fish and squid. <br />
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default FiordlandPenguin;

