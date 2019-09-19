import React from 'react';
import Heading from '../../Components/Heading';
import SubHeading from '../../Components/SubHeading';
import Logo from '../../Components/Logo';
import Para from '../../Components/Para';

const text = "Elitr stet ipsum dolor invidunt elitr et elitr et. Invidunt ipsum sadipscing labore lorem erat voluptua. Sit amet ea sed kasd ea amet stet amet, ea ea vero ea clita vero dolor dolor. Elitr magna et ipsum eos et, kasd ut invidunt sea vero diam eirmod. Est ea diam sit.";

const HomeColumnOne = () => {
    return (
        <div id="home1">
            <Logo/>
            <SubHeading intext="GRAVITAS '19" className="subhead1" />
            <Heading intext="UNIDEV 4" id="home-head" />
            <div id="homesub">
            <SubHeading intext="AR. UNITY. NO CODE" id="subhead2" />
            </div>
            <div id="homepara">
            <Para intext={text} />
            </div>
        </div>
    )
}

export default HomeColumnOne;