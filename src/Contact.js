import React from 'react';
import Heading from './Heading';
import SubHeading from './SubHeading';

const Contact = () => {
    return (
        <div>
            <Heading intext="Get in Touch" />
            <SubHeading intext="Tell us more about you." />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <a href="/">
                Send ->
            </a>
        </div>
    )
}

export default Contact;