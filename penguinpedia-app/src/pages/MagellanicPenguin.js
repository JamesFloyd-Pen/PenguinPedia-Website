import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/magellanic-penguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function MagellanicPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Magellanic Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Magellanic Penguin</li>
                        <li><strong>Scientific Name:</strong> Spheniscus magellanicus</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> 61 to 76 cm</li>
                        <li><strong>Weight:</strong> 2.7 to 6.5 kg</li>
                        <li><strong>Lifespan:</strong> 25 to 30 years</li>
                        <li><strong>Diet:</strong> Fish and squid</li>
                        <li><strong>Population:</strong> 1.3 million individuals</li>
                        <li><strong>Habitat:</strong> Coastal regions of South America</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Magellanic Penguin is a medium-sized penguin species that is native to the coastal regions of South America. They are known for their distinctive black and white plumage and pink patches on their face. Magellanic Penguins are highly social birds that breed in colonies and are proficient swimmers. They feed on fish and squid and are considered near threatened due to oil spills and overfishing.
                    </p>
                </Col>
            </Row>
        </Container>
    );
    
}

export default MagellanicPenguin;