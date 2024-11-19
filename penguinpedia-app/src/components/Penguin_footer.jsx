import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//The footer
class PENGUIN_FOOTER extends Component {
    state = {  }
    render() { 
        return (
            <footer> 
                <div>
                <div className="Row-Foot-Container">
                    <h1>PenguinPedia</h1>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="https://www.penguinsinternational.org/donate/">Donate</a></li>
                            <li><a href="https://github.com/JamesFloyd-Pen">Github</a></li>
                        </ul>

                    </div>
                </div>
            </footer>
          );
    }
}
 
export default PENGUIN_FOOTER;