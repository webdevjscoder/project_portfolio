import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;
    }
    
    @media (max-width: 480px) {
      flex-flow: column nowrap;
      background-color: #000;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      text-align: center;
      font-size: 24px;
      margin-top: 0;
  
      li {
        color: #fff;
      }
    }
    
    @media (min-width: 481px)
     and (max-width: 767px) {
      flex-flow: column nowrap;
      background-color: #000;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      text-align: center;
      font-size: 24px;
      margin-top: 0;
  
      li {
        color: #fff;
      }
    }
    
    @media (min-width: 768px)
    and (max-width: 1024px) {
        margin: 0;
        padding: 0 0 0 50px;
        font-size: 20px;
        font-weight: 400;
        background-color: #141414;
      
      li {
        padding: 25px 50px 18px 0;
      }
     
      li:nth-child(5) {
          margin-left: auto;
      }
    }
    
    @media (min-width: 1025px) 
    and (max-width: 1280px) {
        margin: 0;
        padding: 0 0 0 50px;
        font-size: 20px;
        font-weight: 400;
        background-color: #141414;
      
      li {
        padding: 25px 50px 18px 0;
      }
     
      li:nth-child(5) {
          margin-left: auto;
      }
    }
    
    @media (min-width: 1281px) {
        margin: 0;
        padding: 0 0 0 50px;
        font-size: 20px;
        font-weight: 400;
        background-color: #141414;
      
      li {
        padding: 25px 50px 18px 0;
      }
     
      li:nth-child(5) {
          margin-left: auto;
      }
    }
`;

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '#F17C1C',
            color2: '',
            color3: '',
            color4: '',
            color5: ''
        }
    }

    handleClick = (e) => {
        if (e.target.pathname === '/') {
            this.setState({
                color1: '#F17C1C',
                color2: '',
                color3: '',
                color4: '',
                color5: ''
            })
        } else if (e.target.pathname === '/about') {
            this.setState({
                color1: '',
                color2: '#F17C1C',
                color3: '',
                color4: '',
                color5: ''
            })
        } else if (e.target.pathname === '/work') {
            this.setState({
                color1: '',
                color2: '',
                color3: '#F17C1C',
                color4: '',
                color5: ''
            })
        } else if (e.target.pathname === '/blog') {
            this.setState({
                color1: '',
                color2: '',
                color3: '',
                color4: '#F17C1C',
                color5: ''
            })
        } else if (e.target.pathname === '/contact') {
            this.setState({
                color1: '',
                color2: '',
                color3: '',
                color4: '',
                color5: '#F17C1C'
            })
        }
    }

    render() {
        return (
            <Ul open={this.props.open} onClick={() => this.props.setOpen(!this.props.open)}>
                <li>
                    <Link to='/' style={{color: this.state.color1}} onClick={this.handleClick}>Home</Link>
                </li>
                <li>
                    <Link to='/about' style={{color: this.state.color2}} onClick={this.handleClick}>About</Link>
                </li>
                <li>
                    <Link to='/work' style={{color: this.state.color3}} onClick={this.handleClick}>Work</Link>
                </li>
                <li>
                    <Link to='/blog' style={{color: this.state.color4}} onClick={this.handleClick}>Blog</Link>
                </li>
                <li>
                    <Link to='/contact' style={{color: this.state.color5}} onClick={this.handleClick}>Contact</Link>
                </li>
            </Ul>
        )
    }
}

export default Navbar;