import React from 'react';
import SubHeading from '../../Components/SubHeading';
import Subpara from '../../Components/SubPara';
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
            <div className="subpara">
            <Subpara intext={text} />
            </div>
        </div>
    )
}

export default WhyColumnOne;