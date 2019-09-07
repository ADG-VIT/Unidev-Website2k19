import React from 'react';
import adg_logo from './Images/adg-logo.png';

const Logo = () => {
        return (    
            <div className="logo">
                <img src={adg_logo} alt="" className="app-logo" />
            </div>
        );
};

export default Logo;