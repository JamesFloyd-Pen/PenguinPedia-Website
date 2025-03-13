import React from 'react';
import '../components/styles/Penguins.css';
import penguinImage from '../components/img/erect-crested-penguin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function ErectCrestedPenguin(){
    return(
        <Container>
            <Row>
                <Col className="info-section">
                    <h2>Overview</h2>
                    <div className="image-box space-below">
                        <img src={penguinImage} className="penguin-page-image-thumbnail" alt="Erect Crested Penguin" />
                    </div>
                </Col>
                <Col className="info-penguin-box" xs={12} md={3}>
                    <h2>Penguin Facts</h2>
                    <ul>
                        <li><strong>Name:</strong> Erect Crested Penguin</li>
                        <li><strong>Scientific Name:</strong> Eudyptes sclateri</li>
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
                        The Erect Crested Penguin is a species of penguin that is native to the subantarctic islands in the southern hemisphere. They are closely related to the Macaroni Penguin and are known for their distinctive crest of spiky yellow and black feathers on their heads. Erect Crested Penguins are highly adapted to life at sea and are excellent swimmers and divers.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Physical Description</h2>
                    <p className="overview-text">
                        Erect Crested Penguins are medium-sized penguins with a distinctive appearance. They have a robust body, a short, thick neck, and a relatively large head. Their most notable feature is the crest of spiky yellow and black feathers that extends from the top of their head to the back of their neck. This crest is more pronounced in males than in females.
                        Their plumage is primarily black on the back, head, and flippers, while their belly and chest are white. They have a black beak and reddish-brown eyes. Their flippers are long and narrow, adapted for efficient swimming. The legs and feet are pinkish in color, and they have strong claws that help them climb rocky terrain on their breeding islands.
                        Juvenile Erect Crested Penguins have a similar appearance to adults but with less pronounced crests and a more muted coloration. As they mature, their crests become more prominent, and their plumage takes on the characteristic black and white pattern of adults.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h2>Fun Facts</h2>
                    <p> 
                        - Erect Crested Penguins live on islands without mammals.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ErectCrestedPenguin;