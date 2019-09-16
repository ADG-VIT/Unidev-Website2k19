import React from 'react';
import Logo from '../../Components/Logo';
import map from '../../Images/undraw_checklist_7q37.png';
import Image from '../../Components/Image';


const HomeColumnTwo = () => {
    return (
        <div className="image-div">
            <Image source={map} id="image" />
        </div>
    );
}

export default HomeColumnTwo;