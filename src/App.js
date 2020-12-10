import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Homepage from "./homePage";
import About from "./about";
import Work from "./work";
import Blog from "./blog";
import Contact from "./contact";

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
