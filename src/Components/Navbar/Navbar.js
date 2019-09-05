import React from 'react';
import NavbarElement from './NavbarElement';

const Navbar = (props) => {
    return (
        <div>
            <ul>
            <NavbarElement intext="WHEN AND WHERE" click = {props.pageChangeSelectorWhen} />
            <NavbarElement intext="ABOUT ADG" click = {props.pageChangeSelectorAbout} />
            <NavbarElement intext="CONTACT US" click = {props.pageChangeSelectorContact} />
            </ul>
        </div>
    )
}

export default Navbar;