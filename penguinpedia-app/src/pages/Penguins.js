import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';
import EmperorPenguin_Img from '../components/img/emperorpenguin.jpg';
import GentooPenguin_Img from '../components/img/gentoopenguin-two.jpg';
import KingPenguin_Img from '../components/img/kingpenguin-two.jpg';
import AdeliePenguin_Img from '../components/img/adelie-penguin.jpg';
import ChinstrapPenguin_Img from '../components/img/chinstrap-penguin.jpg';
import MacoaroniPenguin_Img from '../components/img/macaronipenguin.jpg';
import LilBluePen_Img from '../components/img/lilblue-penguin.jpg';
import AfricanPenguin_Img from '../components/img/africanpenguin.jpg';
import FiordlandPenguin_Img from '../components/img/fiordland-penguin.jpg';
import GalapagosPenguin_Img from '../components/img/galapagos-penguin.jpg';
import HumboldtPenguin_Img from '../components/img/humboldt-penguin.jpg';
import MagellanicPenguin_Img from '../components/img/magellanic-penguin.jpg';
import YellowEyedPenguin_Img from '../components/img/yellow-eyed-penguin.jpeg';
import '../components/styles/Penguins.css';


function Penguins() {
    const penguins = [
        { name: 'Emperor Penguin', imageUrl: EmperorPenguin_Img, description: 'description1', link: '/EmperorPenguin'},
        { name: 'King Penguin', imageUrl: KingPenguin_Img, description: 'description2', link: '/KingPenguin'},
        { name: 'Gentoo Penguin', imageUrl: GentooPenguin_Img, description: 'description3', link: '/GentooPenguin'},
        { name: 'Adelie Penguin', imageUrl: AdeliePenguin_Img, description: 'description4', link: '/AdeliePenguin'},
        { name: 'Chinstrap Penguin', imageUrl: ChinstrapPenguin_Img, description: 'description5', link: '/ChinstrapPenguin'},
        { name: 'Macaroni Penguin', imageUrl: MacoaroniPenguin_Img, description: 'description7', link: '/MacaroniPenguin'},
        { name: 'Little Blue Penguin', imageUrl: LilBluePen_Img, description: 'description8', link: '/LittleBluePenguin'},
        { name: 'African Penguin', imageUrl: AfricanPenguin_Img, description: 'description9', link: '/AfricanPenguin'},
        { name: 'Fiordland Penguin', imageUrl: FiordlandPenguin_Img, description: 'description10', link: '/FiordlandPenguin'},
        { name: 'Galapagos Penguin', imageUrl: GalapagosPenguin_Img, description: 'description11', link: '/GalapagosPenguin'},
        { name: 'Humboldt Penguin', imageUrl: HumboldtPenguin_Img, description: 'description12', link: '/HumboldtPenguin'},
        { name: 'Magellanic Penguin', imageUrl:MagellanicPenguin_Img, description: 'description13', link: '/MagellanicPenguin'},
        { name: 'Yellow-eyed Penguin', imageUrl: YellowEyedPenguin_Img, description: 'description14', link: '/YellowEyedPenguin'},
        { name: 'Northern Rockhopper Penguin', imageUrl: 'url15', description: 'description15', link: '/NorthernRockhopperPenguin'},
        { name: 'Southern Rockhopper Penguin', imageUrl: 'url16', description: 'description16', link: '/SouthernRockhopperPenguin'},
        { name: 'Snares Penguin', imageUrl: 'url17', description: 'description17', link: '/SnaresPenguin'},
        { name: 'Royal Penguin', imageUrl: 'url18', description: 'description18', link: '/RoyalPenguin'},
        { name: 'Erect-crested Penguin', imageUrl: 'url19', description: 'description19', link: '/ErectCrestedPenguin'},
        { name: 'Macquarie Island Penguin', imageUrl: 'url20', description: 'description20', link: '/MacquarieIslandPenguin'},
        { name: 'White-flippered Penguin', imageUrl: 'url21', description: 'description21', link: '/WhiteFlipperedPenguin'},
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
<Card.Text>
                                    {penguin.description}
                                </Card.Text>

*/