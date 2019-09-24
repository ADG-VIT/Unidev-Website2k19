import React from 'react';

const Navbar = (props) => {
    return (
    <div>
        <div id="navbar">
            <div className="navbar-element-div">
                <p id="home-nav" onClick={props.changetoHome} className="navbar-element active">HOME</p>
            </div>
            <div className="navbar-element-div">
                <p id="why-nav" onClick={props.changetoWhy} className="navbar-element">WHY ATTEND</p>
            </div>
            <div className="navbar-element-div">
                <p id="when-nav" onClick={props.changetoWhen} className="navbar-element">WHEN AND WHERE</p>
            </div>
            <div className="navbar-element-div">
                <p id="about-nav" onClick={props.changetoAbout} className="navbar-element">ABOUT ADG</p>
            </div>
        </div>
    </div>
    )
}

export default Navbar;