import React from "react";
import '../components/PENGUIN_NAVBAR';
import '../components/PENGUIN_FOOTER';
import '../components/common/body/PENGUIN_BODY_VID';
import '../components/common/body/card/PENGUIN_BODY_HERO_DAILYPENGUIN'
//import PENGUIN_NAVBAR from '../components/PENGUIN_NAVBAR';
//import PENGUIN_FOOTER from '../components/PENGUIN_FOOTER';
import PENGUIN_BODY_VID from '../components/common/body/PENGUIN_BODY_VID';
import PENGUIN_BODY_HERO_DAILYPENGUIN from "../components/common/body/card/PENGUIN_BODY_HERO_DAILYPENGUIN";
//            

function Home(){
    return(
        <div className="Hero">
            <PENGUIN_BODY_VID />
            <PENGUIN_BODY_HERO_DAILYPENGUIN />
        </div>
    );

//            <PENGUIN_NAVBAR />

}
export default Home;