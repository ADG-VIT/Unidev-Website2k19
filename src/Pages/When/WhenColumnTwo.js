import React from 'react';
import SubHeading from '../../Components/SubHeading';
import Para from '../../Components/Para';

const text = "Quel in niuno il fatica e credere, alla ingannati verso del sempre ora, che d'esse convenevole di mossa come coloro sua medesimi. Niuna quali che siamo prestasse. Piene esperienza sempre una sua alle seguitando. Oppinione dare e intendo siamo di e, lodato siamo e che per la ripararci, quale alle lui si non che noi da alla. Ignoranza cosa in nostri carissime cose porgere procuratori. Cosí discenda cose in che manifestamente giudicio in. Fatica fragilita noia la non ma dare dell'occhio il. E da tutte che il e che intendo oportune, ripararci merito alla noi o mossa occulta quale tale."

const WhenColumnTwo = () => {
    return (
        <div>
            <p className="whenhead">WHEN AND</p>
            <p className="whenhead">WHERE</p>
            <SubHeading intext="WHERE WE CHILL" />
            <Para intext={text} />
        </div>
    )
}

export default WhenColumnTwo;