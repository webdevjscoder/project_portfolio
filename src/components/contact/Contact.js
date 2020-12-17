import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='contact-container'>
            <h1>Let's get in touch.</h1>
            <p>
                Contact me through these social platforms or by email <strong>webdevjscoder@gmail.com</strong>
            </p>
            <div className='social-links'>
                <a href='https://github.com/webdevjscoder'>Github</a>
                <a href='https://twitter.com/webdevjscoder'>Twitter</a>
                <a href='https://www.linkedin.com/in/juan-cobian-b0b34417b/'>LinkedIn</a>
            </div>
        </div>
    )
}

export default Contact;