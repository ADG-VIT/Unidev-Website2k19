import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Para from './Para';

const text = "Quel in niuno il fatica e credere, alla ingannati verso del sempre ora, che d'esse convenevole di mossa come coloro sua medesimi. Niuna quali che siamo prestasse. Piene esperienza sempre una sua alle seguitando. Oppinione dare e intendo siamo di e, lodato siamo e che per la ripararci, quale alle lui si non che noi da alla. Ignoranza cosa in nostri carissime cose porgere procuratori. Cosí discenda cose in che manifestamente giudicio in. Fatica fragilita noia la non ma dare dell'occhio il. E da tutte che il e che intendo oportune, ripararci merito alla noi o mossa occulta quale tale."

const WhenColumnTwo = () => {
    return (
        <div>
            <Heading intext="WHEN AND" />
            <Heading intext="WHERE" />
            <SubHeading intext="WHERE WE CHILL" />
            <Para intext={text} />
        </div>
    )
}

export default WhenColumnTwo;