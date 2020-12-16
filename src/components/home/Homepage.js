import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    return (
        <div className='homepage-container'>
            <h2>Hi, I'm Juan.</h2>

            <h1>Software Engineer.</h1>
            <div className='homepage-pg-content'>
                <p>
                    An ex sub contractor turned web developer. Living my best dream,
                    solving complex problems and breaking code!
                </p>
                <p>
                    Problem solving and managing projects runs in my blood.
                </p>
                <p>
                    Always laughing in real life. &#128541;
                </p>
            </div>
            <h4 className='learn-more-link'>
                <Link to='/about'>Learn more ></Link>
            </h4>
        </div>
    )
}

export default Homepage;
