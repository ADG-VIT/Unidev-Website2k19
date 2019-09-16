import React from 'react';
import WhyColumnOne from './WhyColumnOne';
import WhyColumnTwo from './WhyColumnTwo';
import "./Why.css";

const Why = () => {
    return (
        <div id = "why">
            <div></div>
            <WhyColumnOne id="why1"/>
            <div></div>
            <WhyColumnTwo id="why2"/>
        </div>
    );
}

export default Why;