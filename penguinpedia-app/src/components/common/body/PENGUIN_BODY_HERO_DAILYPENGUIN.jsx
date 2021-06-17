import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const EMPEROR_PENGUIN_CARD_IMG = process.env.PUBLIC_URL + '/images/Penguin-High-Quality-PNG.png';
const CARD_IMAGE_STYLE = {
    height: '10%',
    width: '10%',
    display: 'block',
    margin: 'auto'


};

class PENGUIN_BODY_HERO_DAILYPENGUIN extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <Card.Img variant="top" src="/images/Penguin-High-Quality-PNG.png" style={CARD_IMAGE_STYLE}/>
                <Card.Body>
                <Card.Text>
                    The Emperor Penguin is the largest penguins in the world, and inhabit in antarctica. 
                </Card.Text>
                <Button variant="primary">Learn More</Button>
                </Card.Body>
          </Card>

          

         );
    }
}
 
export default PENGUIN_BODY_HERO_DAILYPENGUIN;