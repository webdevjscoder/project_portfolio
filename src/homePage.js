import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div>
            <h2>Hi, I'm Juan.</h2>

            <h1>Software Engineer.</h1>

            <p>
                An ex sub contractor turned web developer. Living my best dream,
                solving complex problems and breaking code!
            </p>
            <br />
            <p>
                Problem solving and managing projects runs in my blood.
            </p>
            <br />
            <p>
                <Link to='/about'>Learn more ></Link>
            </p>
        </div>
    )
}

export default Homepage;
