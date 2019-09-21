import React from 'react';
import AboutColumnOne from './AboutColumnOne';
import AboutColumnTwo from './AboutColumnTwo';
import './About.css';

const About = () => {
    return (
        <div id="about">
            <div></div>
            <AboutColumnOne id="about1" />
            <div></div>
            <AboutColumnTwo id="about2" />
        </div>
    )
}

export default About;