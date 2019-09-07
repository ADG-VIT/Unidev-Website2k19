import React from 'react';
import Logo from './Logo';
import Heading from './Heading';
import SubHeading from './SubHeading';
import SubPara from './SubPara';

const text = "Jenem widerklang versuch die  . Nennt froher mich herauf schatten entwöhntes auf das labyrinthisch denen. Träne mich die ihr."

const AboutColumnOne = () => {
    return (
        <div>
            <Logo />
            <Heading intext="ABOUT ADG" />
            <SubHeading intext="THE COOL BOIS" />
            <SubPara intext={text} />
        </div>    
    )
}

export default AboutColumnOne;