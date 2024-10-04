import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/chinstrap-penguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function ChinstrapPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="Chinstrap Penguin"  className="penguin-page-image-small"/>
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Chinstrap Penguin</li>
                        <li><strong>Scientific Name:</strong> Pygoscelis antarcticus</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> Up to 68 cm</li>
                        <li><strong>Weight:</strong> 3 to 5 kg</li>
                        <li><strong>Lifespan:</strong> 20 years</li>
                        <li><strong>Diet:</strong> Mainly krill and fish</li>
                        <li><strong>Population:</strong> Over 8 million breeding pairs</li>
                        <li><strong>Habitat:</strong> Antarctic Peninsula and surrounding islands</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Chinstrap Penguin is a species of penguin that is native to the Antarctic Peninsula and surrounding islands. They are known for the distinctive narrow black band under their chin that gives them their name. Chinstrap Penguins are medium-sized penguins that are highly social and breed in large colonies. They are proficient swimmers and can dive to depths of up to 70 meters in search of food.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ChinstrapPenguin;