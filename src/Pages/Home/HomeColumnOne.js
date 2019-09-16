import React from 'react';
import Heading from '../../Components/Heading';
import SubHeading from '../../Components/SubHeading';
import Logo from '../../Components/Logo';
import Para from '../../Components/Para';

const text = "Bringing your ideas to life, this gravitas."

const HomeColumnOne = () => {
    return (
        <div>
            <Logo/>
            <SubHeading intext="GRAVITAS 19" className="subhead1" />
            <Heading intext="UNIDEV 4" id="home-head" />
            <SubHeading intext="AR.UNITY.NO CODE" id="subhead2" />
            <Para intext={text} />
        </div>
    )
}

export default HomeColumnOne;