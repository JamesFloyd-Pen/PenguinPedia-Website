import React from 'react';
import '../components/styles/About.css';
import penguinImage from '../components/img/Emperor-Penguin-March.jpg';
import { Container, Row, Col } from 'react-bootstrap';



function About() {
    return (
        <Container className="about-page">
            <Row>
                <Col>
                    <h1 className="about-title">PenguinPedia</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <img className="about-penguin-image" src={penguinImage} alt="Emperor Penguin march" />
                </Col>
                <Col md={6}>
                    <h2 className="about-heading">What is PenguinPedia?</h2>
                    <p className="about-text">PenguinPedia provides information of all 18 penguin species across the globe. It is a great resource for people who are interested in learning more about these fascinating birds. Alongside this we aim to bring awareness of the dangers the penguins face in modern times.</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2 className="about-heading">Goal of PenguinPedia</h2>
                    <p className="about-text">The Goal of PenguinPedia is to inform people of these awesome birds and the challenges they face. As globe warning continues to effect the earth, penguins increasing face challenges . One of the biggest I learn is from news to even discussions from my family on what tragedies occured in the south pole. </p>
                </Col>
                <Col md={6}>
                    <p>Insert IMAGE HERE</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2 className="about-heading">About the Author</h2>
                    <p className="about-text">Hello, my name is James Floyd. I grew up as a penguin enthusiastic during the 2000  penguin craze of the  time. I learned much of about these fascinating birds when I watched March of the Penguins, Madcessanger, and read numurous books like Mr Hopper's Penguins. </p>
                </Col>
                <Col md={6}>
                    <p>Insert IMAGE HERE</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="about-heading">More Information</h2>
                    <p className="about-text">You can find information on penguin news and resources here.</p>
                    <p className="about-links">Insert Links</p>
                </Col>

            </Row>
        </Container>
    );
};
export default About;



/*
Code Placeholder

<Container className="about-page">
            <Row>
                <Col>
                    <h1 className="about-title">About Page</h1>
                    <p className="about-intro">Welcome to the About page of PenguinPedia!</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2 className="about-heading">What is PenguinPedia?</h2>
                    <p className="about-text">PenguinPedia provides information of all 18 penguin species across the globe. It is a great resource for people who are interested in learning more about these fascinating birds. Alongside this we aim to bring awareness of the dangers the penguins face in modern times.</p>
                </Col>
                <Col md={6}>
                    <h2 className="about-heading">About the Author</h2>
                    <p className="about-text">Hello, my name is James Floyd. I grew up as a penguin enthusiastic during the 2000  penguin craze of the  time. I learned much of about these fascinating birds when I watched March of the Penguins, Madcessanger, and read numurous books like Mr Hopper's Penguins. </p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h2 className="about-heading">Goal of PenguinPedia</h2>
                    <p className="about-text">The Goal of PenguinPedia is to inform people of these awesome birds and the challenges they face. As globe warning continues to effect the earth, penguins increasing face challenges . One of the biggest I learn is from news to even discussions from my family on what tragedies occured in the south pole. </p>
                </Col>
                <Col md={6}>
                    <h2 className="about-heading">More Information</h2>
                    <p className="about-text">You can find information on penguin news and resources here.</p>
                    <p className="about-links">Insert Links</p>
                </Col>
            </Row>
        </Container>




*/