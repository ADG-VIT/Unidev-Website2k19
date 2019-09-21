import React from 'react';
import Logo from '../../Components/Logo';
import map from '../../Images/undraw_map_light_6ttm.png';
import Image from '../../Components/Image';

const WhenColumnOne = () => {
    return (
        <div className="ColumnOne">
            <Logo className="Logo"/>
            <Image source={map} className="image" />           
        </div>
    );
}

export default WhenColumnOne;