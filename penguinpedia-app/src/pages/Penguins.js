import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';
import EmperorPenguin_Img from '../components/img/emperorpenguin.jpg';
import GentooPenguin_Img from '../components/img/gentoopenguin-one.jpg';
import KingPenguin_Img from '../components/img/kingpenguin-one.jpg';
import AdeliePenguin_Img from '../components/img/adelie-penguin.jpg';
import ChinstrapPenguin_Img from '../components/img/chinstrap-penguin.jpg';
import '../components/styles/Penguins.css';


function Penguins() {
    const penguins = [
        { name: 'Emperor Penguin', imageUrl: EmperorPenguin_Img, description: 'description1', link: '/EmperorPenguin'},
        { name: 'King Penguin', imageUrl: KingPenguin_Img, description: 'description2', link: '/KingPenguin'},
        { name: 'Gentoo Penguin', imageUrl: GentooPenguin_Img, description: 'description3', link: '/GentooPenguin'},
        { name: 'Adelie Penguin', imageUrl: AdeliePenguin_Img, description: 'description4', link: '/AdeliePenguin'},
        { name: 'Chinstrap Penguin', imageUrl: ChinstrapPenguin_Img, description: 'description5', link: '/ChinstrapPenguin'},
        { name: 'Macaroni Penguin', imageUrl: 'url7', description: 'description7', link: '/MacaroniPenguin'},
        { name: 'Little Blue Penguin', imageUrl: 'url8', description: 'description8', link: '/LittleBluePenguin'},
        { name: 'African Penguin', imageUrl: 'url9', description: 'description9', link: '/AfricanPenguin'},
        { name: 'Fiordland Penguin', imageUrl: 'url10', description: 'description10', link: '/FiordlandPenguin'},
        { name: 'Galapagos Penguin', imageUrl: 'url11', description: 'description11', link: '/GalapagosPenguin'},
        { name: 'Humboldt Penguin', imageUrl: 'url12', description: 'description12', link: '/HumboldtPenguin'},
        { name: 'Magellanic Penguin', imageUrl: 'url13', description: 'description13', link: '/MagellanicPenguin'},
        { name: 'Yellow-eyed Penguin', imageUrl: 'url14', description: 'description14', link: '/YellowEyedPenguin'},
        { name: 'Northern Rockhopper Penguin', imageUrl: 'url15', description: 'description15', link: '/NorthernRockhopperPenguin'},
        { name: 'Southern Rockhopper Penguin', imageUrl: 'url16', description: 'description16', link: '/SouthernRockhopperPenguin'},
        { name: 'Snares Penguin', imageUrl: 'url17', description: 'description17', link: '/SnaresPenguin'},
        { name: 'Royal Penguin', imageUrl: 'url18', description: 'description18', link: '/RoyalPenguin'},
        { name: 'Erect-crested Penguin', imageUrl: 'url19', description: 'description19', link: '/ErectCrestedPenguin'},
        { name: 'Macquarie Island Penguin', imageUrl: 'url20', description: 'description20', link: '/MacquarieIslandPenguin'},
        { name: 'White-flippered Penguin', imageUrl: 'url21', description: 'description21', link: '/WhiteFlipperedPenguin'},
        { name: 'Humboldt Penguin', imageUrl: 'url24', description: 'description24', link: '/HumboldtPenguin'},
        // Add more penguin objects as needed
    ];

    return (
        <Container>
            <Row>
                {penguins.map((penguin, index) => (
                    <Col xs={12} md={3} key={index}>
                        <Card border="Info" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={penguin.imageUrl} className="penguin-image" />
                            <Card.Body>
                                <Card.Title>{penguin.name}</Card.Title>
                                <Card.Text>
                                    {penguin.description}
                                </Card.Text>
                                <Link to={penguin.link}>
                                    <Button variant="primary">Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Penguins;

/*
Code Storage


*/