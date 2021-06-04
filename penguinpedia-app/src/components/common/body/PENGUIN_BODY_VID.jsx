import React, 
{ Component } from 'react';

const backgroundImage = process.env.PUBLIC_URL + '/images/HD_Emperor_Penguin.jpg';

class PENGUIN_BODY_VID extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{'backgroundImage': `url(${backgroundImage})`}}>
                <p>A</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lF9qWq3uVcg" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                </iframe>
            </div>


         );
    }
}

export default PENGUIN_BODY_VID;