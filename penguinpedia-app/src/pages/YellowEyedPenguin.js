import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/emperorpenguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function YellowEyedPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="Yellow-Eyed Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Yellow-Eyed Penguin</li>
                        <li><strong>Scientific Name:</strong> Megadyptes antipodes</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> 62 to 79 cm</li>
                        <li><strong>Weight:</strong> 5 to 6 kg</li>
                        <li><strong>Lifespan:</strong> 10 to 20 years</li>
                        <li><strong>Diet:</strong> Fish and squid</li>
                        <li><strong>Population:</strong> 1,700 to 1,800 individuals</li>
                        <li><strong>Habitat:</strong> New Zealand</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Yellow-Eyed Penguin is a species of crested penguin that is native to New Zealand. They are known for their distinctive yellow eyes and yellow band of feathers that runs from their eyes to the back of their heads. Yellow-Eyed Penguins are medium-sized penguins that are highly territorial and breed in pairs. They are proficient swimmers and feed on fish and squid.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default YellowEyedPenguin;