import React, { Component } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CARD_IMAGE_STYLE = {
    height: '20%',
    width: '20%',
    display: 'block',
    margin: 'auto'
};
/*
 width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  transition: '0.3s',
      objectFit: 'cover',



*/

class PENGUIN_BODY_HERO_DAILYPENGUIN extends Component {
    state = {  }
    render() { 
        return ( 
            <CardGroup>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="/images/Penguin-High-Quality-PNG.png" style={CARD_IMAGE_STYLE}/>
                <Card.Body>
                    <Card.Text>
                        The Emperor Penguin is the largest penguins in the world, and inhabit in antarctica. 
                    </Card.Text>
                    <Link to="/EmperorPenguin">
                        <Button variant="primary">Learn More</Button>
                    </Link>
                </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/Penguin-High-Quality-PNG.png" style={CARD_IMAGE_STYLE}/>
                <Card.Body>
                    <Card.Text>
                        The Fairy Penguin is the smallest penguin in the world. 
                    </Card.Text>
                    <Link to="/LittleBluePenguin">
                        <Button variant="primary">Learn More</Button>
                    </Link>
                </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/Penguin-High-Quality-PNG.png" style={CARD_IMAGE_STYLE}/>
                <Card.Body>
                    <Card.Text> 
                        African Penguin 
                    </Card.Text>
                    <Link to="/AfricanPenguin">
                        <Button variant="primary">Learn More</Button>
                    </Link>
                </Card.Body>
          </Card>
          </CardGroup>
         );
    }
}
 
export default PENGUIN_BODY_HERO_DAILYPENGUIN;