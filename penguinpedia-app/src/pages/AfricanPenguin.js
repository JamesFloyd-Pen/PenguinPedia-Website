import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/africanpenguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function AfricanPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="African Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> African Penguin</li>
                        <li><strong>Scientific Name:</strong> Spheniscus demersus</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> 60 to 70 cm</li>
                        <li><strong>Weight:</strong> 2 to 5 kg</li>
                        <li><strong>Lifespan:</strong> 10 to 15 years</li>
                        <li><strong>Diet:</strong> Fish and squid</li>
                        <li><strong>Population:</strong> 50,000 to 80,000 breeding pairs</li>
                        <li><strong>Habitat:</strong> Coastal regions of southern Africa</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The African Penguin, also known as the Cape Penguin, is a species of penguin that is native to the coastal regions of southern Africa. They are known for their distinctive black and white plumage and braying call, which sounds like a donkey. African Penguins are medium-sized penguins that are highly social and breed in colonies. They are proficient swimmers and feed on fish and squid.
                    </p>
                </Col>
            </Row>
        </Container>
    );

}

export default AfricanPenguin;