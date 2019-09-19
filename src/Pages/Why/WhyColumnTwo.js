import React from 'react';
import map from '../../Images/undraw_product_teardown_elol.png';
import Image from '../../Components/Image';
import Para from '../../Components/Para';
import './Why.css';

const text = "Diam ut sed stet dolor sadipscing nonumy ipsum ea est invidunt. At gubergren dolor sadipscing et, ipsum amet labore et ipsum dolores at nonumy labore. Duo et sanctus ipsum vero sea tempor ipsum at, gubergren elitr et dolor ipsum dolore sanctus stet diam. Sit stet dolor magna et tempor. Tempor.";

const WhyColumnTwo = () => {
    return (
        <div>
            <Image source={map} className="image" />
            <img className="image" alt=""/>
            <Para intext={text} />
        </div>
    )
}

export default WhyColumnTwo;