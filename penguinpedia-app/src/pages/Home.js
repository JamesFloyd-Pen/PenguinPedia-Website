import React from "react";
import '../components/Penguin_navBar';
import '../components/Penguin_footer';
import '../components/common/body/PENGUIN_BODY_VID';
import '../components/common/body/card/PENGUIN_BODY_HERO_DAILYPENGUIN'
import PENGUIN_BODY_VID from '../components/common/body/PENGUIN_BODY_VID';
import PENGUIN_CAROUSEL from "../components/common/body/Penguin_Carousel";
import { Container, Row, Col } from 'react-bootstrap';
import '../components/styles/Hero.css';
//import BackgroundPenguin from '../components/img/HD_Emperor_Penguin.jpg';


const backgroundImage = process.env.PUBLIC_URL + '/images/HD_Emperor_Penguin.jpg';


function Home(){
    return(
        <div className="Hero" style={{ 'backgroundImage': `url(${backgroundImage})` }}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <PENGUIN_BODY_VID />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <PENGUIN_CAROUSEL />
                    </Col>
                </Row>
            </Container>
        </div>
    );

//            <PENGUIN_NAVBAR />
//            <PENGUIN_BODY_HERO_DAILYPENGUIN />

}
export default Home;

