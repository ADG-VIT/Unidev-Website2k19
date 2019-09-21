import React from 'react';
import Heading from '../../Components/Heading';
import SubHeading from '../../Components/SubHeading';
import Logo from '../../Components/Logo';
import Para from '../../Components/Para';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. Praesent sodales nisi at dolor laoreet, eu gravida orci convallis. Maecenas hendrerit varius velit, ut pulvinar tellus mollis sit amet. Vivamus finibus tempus nunc eu pellentesque. Aliquam faucibus ex leo, vitae rhoncus leo tincidunt at. Sed vehicula ante quis ipsum lobortis viverra. Curabitur pretium, quam commodo aliquet hendrerit, dolor leo pellentesque arcu, eu tincidunt urna diam id mi. Ut eu neque vel magna luctus iaculis. Proin luctus bibendum diam maximus euismod. In in ante sit amet nunc molestie efficitur. Morbi fermentum sem a aliquam auctor. Vivamus ac consectetur massa, quis convallis tellus. In sed leo in ligula viverra porta.";

const HomeColumnOne = () => {
    return (
        <div id="home1">
            <Logo/>
            <SubHeading intext="GRAVITAS '19" className="homesubhead1" />
            <div className="homehead">
            <Heading intext="UNIDEV 4" />
            </div>
            <SubHeading intext="AR. UNITY. NO CODE" className="homesubhead2" />
            <div id="homepara">
            <Para intext={text} />
            </div>
        </div>
    )
}

export default HomeColumnOne;