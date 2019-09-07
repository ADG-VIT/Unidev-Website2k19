import React from 'react';
import Logo from './Logo';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Para from './Para';

const text = "Lorem ipsum dolar sit amet, consectetur adipiscing elit";

const WhyColumnOne = () => {
    return (
        <div>
            <Logo/>
            <Heading intext="WHY" />
            <Heading intext="ATTEND" />
            <SubHeading intext="GAME.FILTERS.LIFE" />
            <Para intext={text} />
        </div>
    )
}

export default WhyColumnOne;