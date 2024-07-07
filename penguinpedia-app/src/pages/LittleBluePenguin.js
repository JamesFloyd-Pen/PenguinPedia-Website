import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/emperorpenguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function LittleBluePenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="Little Blue Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Little Blue Penguin</li>
                        <li><strong>Scientific Name:</strong> Eudyptula minor</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> Up to 33 cm</li>
                        <li><strong>Weight:</strong> 1 kg</li>
                        <li><strong>Lifespan:</strong> 6 years</li>
                        <li><strong>Diet:</strong> Small fish, squid, and krill</li>
                        <li><strong>Population:</strong> Over 500,000 breeding pairs</li>
                        <li><strong>Habitat:</strong> Coastal regions of Australia and New Zealand</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Little Blue Penguin, also known as the Fairy Penguin, is the smallest species of penguin in the world. They are native to the coastal regions of Australia and New Zealand and are known for their distinctive blue and white plumage. Little Blue Penguins are highly social birds that live in colonies and are excellent swimmers. They feed on small fish, squid, and krill and are known for their unique vocalizations.
                    </p>
                </Col>
            </Row>
        </Container>
    );
    
}

export default LittleBluePenguin;