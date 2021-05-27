import React, { Component } from 'react';

//The website nagivation top bar
class Penguin_navBar extends Component {
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
 
export default Penguin_navBar;