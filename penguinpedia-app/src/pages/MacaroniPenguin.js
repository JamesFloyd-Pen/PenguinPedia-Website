import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/emperorpenguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function MacaroniPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} alt="Macaroni Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Macaroni Penguin</li>
                        <li><strong>Scientific Name:</strong> Eudyptes chrysolophus</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> Up to 70 cm</li>
                        <li><strong>Weight:</strong> 5 to 6 kg</li>
                        <li><strong>Lifespan:</strong> 10 to 15 years</li>
                        <li><strong>Diet:</strong> Mainly krill and fish</li>
                        <li><strong>Population:</strong> Over 18 million breeding pairs</li>
                        <li><strong>Habitat:</strong> Subantarctic islands and surrounding marine waters</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Macaroni Penguin is a species of crested penguin that is native to the subantarctic islands and the Antarctic Peninsula. They are known for their distinctive yellow-orange crests and red eyes. Macaroni Penguins are medium-sized penguins that are highly social and breed in large colonies. They are proficient swimmers and can dive to depths of up to 100 meters in search of food.
                    </p>
                </Col>
            </Row>
        </Container>
    );
    
}

export default MacaroniPenguin;