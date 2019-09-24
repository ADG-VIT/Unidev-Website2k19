import React from 'react';
import Image from '../../Components/Image';
import Team from '../../Images/undraw_team_spirit_hrr4.png';
import Para from '../../Components/Para'; 

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. Praesent sodales nisi at dolor laoreet, eu gravida orci convallis. Maecenas hendrerit varius velit, ut pulvinar tellus mollis sit amet. Vivamus finibus tempus nunc eu pellentesque. Aliquam faucibus ex leo, In sed leo in ligula viverra porta.  Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. Praesent sodales nisi at dolor laoreet, eu gravida orci convallis. Maecenas hendrerit varius velit, ut pulvinar tellus mollis sit amet. Vivamus finibus tempus nunc eu pellentesque. Aliquam faucibus ex leo, In sed leo in ligula viverra porta.";

const AboutColumnTwo = () => {
    return (
        <div>
            <div className="aboutimage">
            <Image source={Team} />
            </div>
            <div className="aboutpara">
            <Para intext={text} /> 
            </div>          
        </div>
    )
}

export default AboutColumnTwo;