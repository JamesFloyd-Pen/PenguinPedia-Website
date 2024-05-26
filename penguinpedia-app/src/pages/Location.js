import React from 'react';
import PenguinMap from '../components/img/penguinrangemap_orig.jpg';

const Location = () => {
    return (
        <div>
            <h1>Penguin Species Across the Globe</h1>
            <img src={PenguinMap} alt="Penguins across the world"/>
            <h2>From @whatrpenguins</h2>
        </div>
    );
};

export default Location;