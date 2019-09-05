import React from 'react';

const NavbarElement = (props) => {
    return (
        <li onClick={props.click}>
            <a href= "/" onClick={props.click}>
                {props.intext}
            </a>
        </li>
    );
}    
export default NavbarElement;