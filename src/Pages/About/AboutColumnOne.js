import React from 'react';
import Logo from '../../Components/Logo';
import Heading from '../../Components/Heading';
import SubHeading from '../../Components/SubHeading';
import SubPara from '../../Components/SubPara';

const text = "Jenem widerklang versuch die  . Nennt froher mich herauf schatten entwöhntes auf das labyrinthisch denen. Träne mich die ihr."

const AboutColumnOne = () => {
    return (
        <div>
            <Logo />
            <div className="abouthead">
            <Heading intext="ABOUT " />
            <Heading intext="ADG" />
            </div>
            <div className="aboutsubhead">
            <SubHeading intext="THE COOL BOIS" />
            </div>
            <div className="aboutsubpara">
            <SubPara intext={text} />
            </div>
        </div>    
    )
}

export default AboutColumnOne;