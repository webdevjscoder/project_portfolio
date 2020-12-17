import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Homepage from "./components/home/Homepage";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Burger from "./components/burger/Burger";
import Footer from "./footer/Footer";

function App() {
  return (
    <Router>
        <div className='app-background-image'>
            <header>
                <Burger />
            </header>
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
        <Footer />
    </Router>
  );
}

export default App;
