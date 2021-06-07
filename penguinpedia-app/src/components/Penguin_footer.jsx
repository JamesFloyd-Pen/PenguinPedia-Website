import React, { Component } from 'react';

//The footer
class PENGUIN_FOOTER extends Component {
    state = {  }
    render() { 
        return (
            <footer> 
                <div>
                    <h1>PenguinPedia</h1>
                    <div className="Row-Foot-Container">
                        <ul>
                            <li>About</li>
                            <li>Donate</li>
                            <li><a href="https://github.com/JamesFloyd-Pen">Github</a></li>
                        </ul>

                    </div>
                </div>
            </footer>
          );
    }
}
 
export default PENGUIN_FOOTER;