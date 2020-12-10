import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Homepage from "./homePage";

// function Home() {
//     return <h1>Home</h1>
// }

function About() {
    return <h1>About</h1>
}

function Work() {
    return <h1>Work</h1>
}

function Blog() {
    return <h1>Blog</h1>
}

function Contact() {
    return <h1>Contact</h1>
}

function App() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/work'>Work</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/work'>
                    <Work />
                </Route>
                <Route path='/blog'>
                    <Blog />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <Homepage />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
