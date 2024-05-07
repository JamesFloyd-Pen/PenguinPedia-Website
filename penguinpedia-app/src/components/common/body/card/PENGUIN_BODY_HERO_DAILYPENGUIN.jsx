import React, { Component } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CARD_IMAGE_STYLE = {
    height: '20%',
    width: '20%',
    display: 'block',
    margin: 'auto'
};

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
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/Penguin-High-Quality-PNG.png" style={CARD_IMAGE_STYLE}/>
                <Card.Body>
                    <Card.Text>
                        The Fairy Penguin is the smallest penguin in the world. 
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/Penguin-High-Quality-PNG.png" style={CARD_IMAGE_STYLE}/>
                <Card.Body>
                    <Card.Text> 
                        African Penguin 
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
          </Card>
          </CardGroup>
         );
    }
}
 
export default PENGUIN_BODY_HERO_DAILYPENGUIN;