import React, { Component } from 'react';

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
                            <li>About</li>
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