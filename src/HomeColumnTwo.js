import React from 'react';
import Logo from './Logo';
import map from './Images/main-page.png';
import Image from './Image';


const HomeColumnTwo = () => {
    return (
        <div>
            <Logo />
            <Image source={map} />
                    
        </div>
    );
}

export default HomeColumnTwo;