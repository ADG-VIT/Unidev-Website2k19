import React from 'react';
import Heading from '../../Components/Heading';
import SubHeading from '../../Components/SubHeading';

const Contact = () => {
    return (
        <div>
            <Heading intext="Get in Touch" />
            <SubHeading intext="Tell us more about you." />
            <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
            </div>
            <div>
                <textarea placeholder="Message" />
            </div>
            <div>
                <a href="/">
                    Send =>
                </a>
            </div>
        </div>
    )
}

export default Contact;