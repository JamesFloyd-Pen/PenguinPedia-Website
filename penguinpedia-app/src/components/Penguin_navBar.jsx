import React, { Component } from 'react';

//The website nagivation top bar
class PENGUIN_NAVBAR extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p>PenguinPedia!</p>
                <a href="#penguin">Penguins</a>
                <a href="#about">About</a>
            </div>
         );
    }
}
 
export default PENGUIN_NAVBAR;