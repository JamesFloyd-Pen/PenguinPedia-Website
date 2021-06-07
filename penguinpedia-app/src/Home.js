import React from "react";
import './components/PENGUIN_NAVBAR';
import './components/PENGUIN_FOOTER';
import './components/common/body/PENGUIN_BODY_VID';
import PENGUIN_NAVBAR from './components/PENGUIN_NAVBAR';
import PENGUIN_FOOTER from './components/PENGUIN_FOOTER';
import PENGUIN_BODY_VID from './components/common/body/PENGUIN_BODY_VID';


function Home(){
    return(
        <div>
            <PENGUIN_NAVBAR />
            <PENGUIN_BODY_VID />
            <PENGUIN_FOOTER />
        </div>
    );


}
export default Home;