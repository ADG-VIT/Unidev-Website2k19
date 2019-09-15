import React from 'react';
import Logo from '../../Components/Logo';
import map from '../../Images/undraw_map_light_6ttm.png';
import Image from '../../Components/Image';
import SubPara from '../../Components/SubPara';
import './When.css';
import '../../Common.css';

const text = "Vero diam sit stet est justo invidunt. Consetetur et lorem at ipsum dolor at kasd ea sanctus. Nonumy ipsum et.";

const WhenColumnOne = () => {
    return (
        <div className="ColumnOne">
            <Logo className="Logo"/>
            {/* <Image source={map} /> */}
            <SubPara intext={text} />           
        </div>
    );
}

export default WhenColumnOne;