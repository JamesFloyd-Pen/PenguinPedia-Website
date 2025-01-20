import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import penguinImage1 from './chinstrap-penguin-test.jpg';
import penguinImage2 from './emperor-penguins-going-into-water.jpg';
import penguinImage3 from './lil-penguin-nest.jpg';
import './Penguin_Carousel.css';

const penguinData = [
    {
        image: penguinImage1,
        title: "Adelie Penguin",
        description: "A common species of penguin",
        link: "/AdeliePenguin"
    },
    {
        image: penguinImage2,
        title: "Emperor Penguin",
        description: "The Largest Penguin in the World",
        link: "/EmperorPenguin"
    },
    {
        image: penguinImage3,
        title: "Little Penguin",
        description: "The smallest Penguin in the World",
        link: "/LittleBluePenguin"
    }
];

const PenguinCarousel = () => (
    <div className="carousel-container">
        <Carousel>
            {penguinData.map(({ image, title, description, link }, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={image} alt={`${title} slide`} />
                    <Carousel.Caption>
                        <h5>{title}</h5>
                        <p className="orange-text">{description}</p>
                        <Link to={link}>
                            <button type="button" className="btn btn-primary">Learn More</button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
);

export default PenguinCarousel;
