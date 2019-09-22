import React from 'react';
import SubHeading from '../../Components/SubHeading';
import Subpara from '../../Components/SubPara';
import adg__logo from '../../Images/ADG-logo(black).png';
import { AnimateOnChange } from 'react-animation'

const text = "Lorem ipsum dolar sit amet, consectetur adipiscing elit";

const WhyColumnOne = () => {
    return (
        <div>
            <div className="Logo">
                <img src={adg__logo} alt="" className="app-logo" />
            </div>
            
            <div className="whywhy">
            <AnimateOnChange animationIn="custom-animation-in 500ms ease-out forwards"
            animationOut="custom-animation-out 1000ms ease-out forwards"
            durationOut={500}>
            WHY
            </AnimateOnChange>
            <br/>
            <AnimateOnChange animationIn="custom-animation-in 00ms ease-out forwards"
            animationOut="custom-animation-out 1000ms ease-out forwards"
            durationOut={500}>
            ATTEND
            </AnimateOnChange>
            </div>
            
            <SubHeading intext="GAMES. FILTERS. LIFE" />
            <div id="whysubpara">
            <Subpara intext={text} />
            </div>
        </div>
    )
}

export default WhyColumnOne;