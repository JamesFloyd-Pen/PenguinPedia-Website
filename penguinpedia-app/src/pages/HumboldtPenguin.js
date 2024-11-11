import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/humboldt-penguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function HumboldtPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Humboldt Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Humboldt Penguin</li>
                        <li><strong>Scientific Name:</strong> Spheniscus humboldti</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> 56 to 70 cm</li>
                        <li><strong>Weight:</strong> 3.6 to 5.9 kg</li>
                        <li><strong>Lifespan:</strong> 15 to 20 years</li>
                        <li><strong>Diet:</strong> Fish and squid</li>
                        <li><strong>Population:</strong> 32,000 to 50,000 individuals</li>
                        <li><strong>Habitat:</strong> Coastal regions of Chile and Peru</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Humboldt Penguin is a medium-sized penguin species that is native to the coastal regions of Chile and Peru. They are known for their distinctive black and white plumage and pink patches around their eyes. Humboldt Penguins are highly social birds that breed in colonies and are proficient swimmers. They feed on fish and squid and are considered vulnerable due to habitat loss and overfishing.
                    </p>
                </Col>
            </Row>
        </Container>
    );

}

export default HumboldtPenguin;