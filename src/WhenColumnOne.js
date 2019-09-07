import React from 'react';
HomeColumnOne
import map from './Images/undraw_map_light_6ttm.png';
import Image from './Image';
import SubPara from './SubPara';

const text = "Vero diam sit stet est justo invidunt. Consetetur et lorem at ipsum dolor at kasd ea sanctus. Nonumy ipsum et.";

const WhenColumnOne = () => {
    return (
        <div>
            <Logo />
            <Image source={map} />
            <SubPara intext={text} />           
        </div>
    );
}

export default WhenColumnOne;