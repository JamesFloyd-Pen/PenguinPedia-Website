import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import penguinImage1 from './chinstrap-penguin-test.jpg';
import penguinImage2 from './emperor-penguins-going-into-water.jpg';
import penguinImage3 from './lil-penguin-nest.jpg';
import './Penguin_Carousel.css';


class Penguin_Carousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-70" src={penguinImage1} alt="First slide" />
                        <Carousel.Caption>
                            <h5>Adelie Penguin</h5>
                            <p className="orange-text">A common species of penguin</p>
                            <Link to="/AdeliePenguin">
                                <button type="button" className="btn btn-primary">Learn More</button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-70" src={penguinImage2} alt="Second slide" />
                        <Carousel.Caption>
                            <h5>Emperor Penguin</h5>
                            <p className="orange-text">The Largest Penguin in the World</p>
                            <Link to="/EmperorPenguin">
                                <button type="button" className="btn btn-primary">Learn More</button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-70" src={penguinImage3} alt="Third slide" />
                        <Carousel.Caption>
                            <h5>Little Penguin</h5>
                            <p className="orange-text">The smallest Penguin in the World</p>
                            <Link to="/LittleBluePenguin">
                                <button type="button" className="btn btn-primary">Learn More</button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Penguin_Carousel;