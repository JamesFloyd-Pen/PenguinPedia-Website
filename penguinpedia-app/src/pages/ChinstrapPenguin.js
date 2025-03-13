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
                        <img src={penguinImage} alt="Chinstrap Penguin"  className="penguin-page-image-thumbnail"/>
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
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Physical Description</h2>
                    <p className="overview-text">
                        Chinstrap Penguins are easily recognizable by the narrow black band that runs under their chin, giving them a distinctive appearance. They have a black head
                        and back, with a white belly and chest. Chinstrap Penguins are medium-sized penguins, with adults reaching heights of up to 68 cm and weights of up to 5 kg. They have a streamlined body shape and long, stiff flippers that make them powerful swimmers.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Fun Facts</h2>
                    <p>
                        - Chinstrap Penguins are known for the distinctive narrow black band under their chin. <br />
                        - Chinstrap Penguins are highly social and breed in large colonies. <br />
                        - Chinstrap Penguins are proficient swimmers and can dive to depths of up to 70 meters in search of food. <br />
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ChinstrapPenguin;