import React from 'react';
import map from '../../Images/undraw_product_teardown_elol.png';
import Image from '../../Components/Image';
import Para from '../../Components/Para';
import './Why.css';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. "

const WhyColumnTwo = () => {
    return (
        <div>
            <Image source={map} className="image" />
            <div className ="whyimage">
                <div></div>
                <img className="image" alt=""/>
                <div></div>
            </div>
            <Para intext={text} />
        </div>
    )
}

export default WhyColumnTwo;