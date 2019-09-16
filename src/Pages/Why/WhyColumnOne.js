import React from 'react';
import Heading from '../../Components/Heading';
import SubHeading from '../../Components/SubHeading';
import Para from '../../Components/Para';
import adg__logo from '../../Images/ADG-logo(black).png';

const text = "Lorem ipsum dolar sit amet, consectetur adipiscing elit";

const WhyColumnOne = () => {
    return (
        <div>
            <div className="Logo">
                <img src={adg__logo} alt="" className="app-logo" />
            </div>
            <div className="whywhy">
            WHY
            <br/>
            ATTEND
            </div>
            <SubHeading intext="GAME.FILTERS.LIFE" />
            <Para intext={text} />
        </div>
    )
}

export default WhyColumnOne;