import React from 'react';

const Burger = (props) => {
    return (
        <div>
            <div>
            <div className="burger" style={{borderColor: props.colour}} ></div>
            <div className="burger" style={{borderColor: props.colour}} ></div>
            <div className="burger" style={{borderColor: props.colour}} ></div>
            </div>
        </div>
    )
}

export default Burger;