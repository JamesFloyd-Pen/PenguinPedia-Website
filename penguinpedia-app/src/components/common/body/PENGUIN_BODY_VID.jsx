import React, 
{ Component } from 'react';


//const backgroundImage = process.env.PUBLIC_URL + '/images/HD_Emperor_Penguin.jpg';
//const backgroundImage = process.env.src +'src/components/images/HD_Emperor_Penguin.jpg';
//style={{ 'backgroundImage': `url(${backgroundImage})` }}


class PENGUIN_BODY_VID extends Component {
    state = {  }
    render() { 
        return ( 
                <div className="penguin-hero-body" >
                    <h1> Welcome to PenguinPedia! </h1> 
                    <br></br>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lF9qWq3uVcg" title="YouTube video player"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>

         );
    }
}

export default PENGUIN_BODY_VID;