import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import penguinImage1 from './chinstrap-penguin-test.jpg';
import Link from 'react-router-dom/Link';
import './Penguin_Carousel.css';

class Penguin_Carousel extends React.Component {
    render() {
        return (
            <Carousel interval={3000}>
                <Carousel.Item>
                    <img className="d-block w-25" src={penguinImage1} alt="First slide" />
                    <Carousel.Caption>
                        <h5>Chinstrap-penguin</h5>
                        <p class="orange-text">One of the five penguin species of the Antarctic</p>
                        <Link to="/ChinstrapPenguin">
                            <button type="button" className="btn btn-primary">Learn More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-70" src={penguinImage1} alt="Second slide" />
                    <Carousel.Caption>
                        <h5>Emperor Penguin</h5>
                        <p class="orange-text">The Largeset Penguin in the World</p>
                        <Link to="/EmperorPenguin">
                            <button type="button" className="btn btn-primary">Learn More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-70" src={penguinImage1} alt="Third slide" />
                    <Carousel.Caption>
                    <h5>Little Penguin</h5>
                    <p class="orange-text">The smallest Penguin in the World</p>
                    <Link to="LittleBluePenguin">
                        <button type="button" className="btn btn-primary">Learn More</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Penguin_Carousel;