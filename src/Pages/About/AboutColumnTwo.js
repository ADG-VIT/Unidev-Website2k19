import React from 'react';
import Image from '../../Components/Image';
import Team from '../../Images/undraw_team_spirit_hrr4.png';
import Para from '../../Components/Para'; 

const text = "Gehn mein mund gesellschaft von darfst. Wo wo glück und oft der, denkst im im wärest die wangen. Standest gefärbt von wangen denkst, hab geliebet heut heimat zürnen, wort schwester standest klingt einz'ges. Hab geliebet du der so gehn. Und lachtet bist mutter deiner schnee, es du junge ort du der, gedanken o ja schmilzt gerne dich geträumt so ich wärest. Deiner schon ich der du im, wärest geträumt vaterland ja werden ihr dahinten nicht von, dir du es vögel dich gestehe so friedlich. Heut standest freunde liebe du wo wo ich sie. Werden mut träume mein schnee es sonder.."

const AboutColumnTwo = () => {
    return (
        <div>
            <Image source={Team} />
            <Para intext={text} />           
        </div>
    )
}

export default AboutColumnTwo;