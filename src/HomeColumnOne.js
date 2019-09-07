import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Logo from './Logo';
import Para from './Para';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. Praesent sodales nisi at dolor laoreet, eu gravida orci convallis. Maecenas hendrerit varius velit, ut pulvinar tellus mollis sit amet. Vivamus finibus tempus nunc eu pellentesque. Aliquam faucibus ex leo, vitae rhoncus leo tincidunt at."

const HomeColumnOne = () => {
    return (
        <div>
            <Logo/>
            <SubHeading intext="GRAVITAS 19" />
            <Heading intext="UNIDEV 3" />
            <SubHeading intext="AR.UNITY.NO CODE" />
            <Para intext={text} />
        </div>
    )
}

export default HomeColumnOne;