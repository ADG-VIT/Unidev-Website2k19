import React from 'react';

const Heading = (props) => {
    return (
        <div>
            <p className="heading">
            {props.intext}
            </p>
        </div>
    )
}

export default Heading;