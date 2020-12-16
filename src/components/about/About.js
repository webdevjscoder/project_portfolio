import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <h1>I strive to build innovating web applications.</h1>
            <p>
                I'm Juan Cobian, I go by...well...Juan.
            </p>
            <p>
                I am a software engineer, born and raised in Los Angeles, CA. I graduated from the Flatiron
                School immersive online software engineering program.
            </p>
            <p>
                With a strong background in programming languages such as; HTML5, CSS/SCSS, SQL, Ruby and JavaScript.
                I am driven to develop elegant web applications for users and clean concise code for fellow developers.
            </p>
            <p>
                I am have a strong understanding with frameworks and libraries such as; Sinatra, React (Redux), and Ruby
                on Rails. I've worked on projects that demonstrate my technical, project building, and management skills.
            </p>
            <p>
                I am always eager to improve what I know and/or learn new fascinating technologies, whether new or old.
            </p>
            <p>
                Have an interesting project? <Link to='/contact'>Let's talk.</Link>
            </p>
        </div>
    )
}

export default About;