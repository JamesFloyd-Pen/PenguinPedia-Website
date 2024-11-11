import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/northernrockhopper-penguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function NorthernRockhopperPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Northern Rockhopper Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Northern Rockhopper Penguin</li>
                        <li><strong>Scientific Name:</strong> Eudyptes moseleyi</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> 50 to 55 cm</li>
                        <li><strong>Weight:</strong> 2 to 3 kg</li>
                        <li><strong>Lifespan:</strong> 10 to 15 years</li>
                        <li><strong>Diet:</strong> Fish, squid, and krill</li>
                        <li><strong>Population:</strong> 1 million to 2 million individuals</li>
                        <li><strong>Habitat:</strong> Subantarctic islands</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Northern Rockhopper Penguin is a species of penguin that is native to the subantarctic islands in the southern hemisphere. They are closely related to the Southern Rockhopper Penguin and are known for their distinctive crest of spiky yellow and black feathers on their heads. Northern Rockhopper Penguins are highly adapted to life at sea and are excellent swimmers and divers.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default NorthernRockhopperPenguin;