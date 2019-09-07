import React from 'react';
import map from './Images/why-attend.png';
import Image from './Image';
import Para from './Para';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. "

const HomeColumnOne = () => {
    return (
        <div>
            <Image source={map} />
            <Para intext={text} />
        </div>
    )
}

export default HomeColumnOne;

