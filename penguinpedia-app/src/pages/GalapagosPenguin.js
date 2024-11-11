import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/galapagos-penguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function GalapagosPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Galapagos Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Galapagos Penguin</li>
                        <li><strong>Scientific Name:</strong> Spheniscus mendiculus</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> 49 to 53 cm</li>
                        <li><strong>Weight:</strong> 2 to 2.5 kg</li>
                        <li><strong>Lifespan:</strong> 15 to 20 years</li>
                        <li><strong>Diet:</strong> Fish and squid</li>
                        <li><strong>Population:</strong> 1,200 to 2,000 individuals</li>
                        <li><strong>Habitat:</strong> Galapagos Islands</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Galapagos Penguin is a small species of penguin that is native to the Galapagos Islands. They are the only penguin species that live north of the equator in the wild. Galapagos Penguins are known for their distinctive black and white plumage and are the second smallest penguin species in the world. They are highly adapted to warm climates and feed on fish and squid.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default GalapagosPenguin;