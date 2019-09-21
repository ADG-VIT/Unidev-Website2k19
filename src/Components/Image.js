import React from 'react';
import '../App.css';

const Image = (props) => {
    return (
        <div>
            <img className="image" src={props.source} alt=""/>
        </div>
    )
}

export default Image;