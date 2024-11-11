import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/gentoopenguin-one.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function GentooPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Gentoo Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Gentoo Penguin</li>
                        <li><strong>Scientific Name:</strong> Pygoscelis papua</li>
                        <li><strong>Family:</strong> Spheniscidae</li>
                        <li><strong>Height:</strong> Up to 76 cm</li>
                        <li><strong>Weight:</strong> 5 to 8 kg</li>
                        <li><strong>Lifespan:</strong> 15 to 20 years</li>
                        <li><strong>Diet:</strong> Mainly krill and fish</li>
                        <li><strong>Population:</strong> Over 300,000 breeding pairs</li>
                        <li><strong>Habitat:</strong> Subantarctic islands and the Antarctic Peninsula</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="overview-text">
                        The Gentoo Penguin is a species of penguin that is native to the subantarctic islands and the Antarctic Peninsula. They are known for their distinctive orange-red bill and white patches on the head. Gentoo Penguins are the third largest species of penguin and are highly social birds that breed in large colonies. They are excellent swimmers and can reach speeds of up to 36 km/h in the water.
                    </p>
                </Col>
            </Row>
        </Container>

    );

}

export default GentooPenguin;