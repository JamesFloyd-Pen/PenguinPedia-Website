import React from "react";
import '../components/PENGUIN_NAVBAR';
import '../components/PENGUIN_FOOTER';
import '../components/common/body/PENGUIN_BODY_VID';
import '../components/common/body/card/PENGUIN_BODY_HERO_DAILYPENGUIN'
import PENGUIN_BODY_VID from '../components/common/body/PENGUIN_BODY_VID';
import PENGUIN_BODY_HERO_DAILYPENGUIN from "../components/common/body/card/PENGUIN_BODY_HERO_DAILYPENGUIN";
import PENGUIN_CAROUSEL from "../components/common/body/Penguin_Carousel";

const backgroundImage = process.env.PUBLIC_URL + '/images/HD_Emperor_Penguin.jpg';


function Home(){
    return(
        <div className="Hero" style={{ 'backgroundImage': `url(${backgroundImage})` }}>
            <PENGUIN_BODY_VID />
            <PENGUIN_CAROUSEL /> 
        </div>
    );

//            <PENGUIN_NAVBAR />
//            <PENGUIN_BODY_HERO_DAILYPENGUIN />

}
export default Home;

