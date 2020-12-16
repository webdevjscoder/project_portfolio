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
    
    @media screen and (min-device-width: 280px)
     and (max-device-width: 640px) {
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
      
      li {
        color: #fff;
      }
    }
    
    @media screen and (min-device-width: 768px)
     and (max-device-width: 1280px) {
        margin: 0;
        padding: 0 0 0 50px;
        font-size: 20px;
        font-weight: 400;
      
      li {
        padding: 25px 50px 18px 0;
      }
     
      li:nth-child(5) {
          margin-left: auto;
      }
    }
`;

function Navbar({ open, setOpen }) {
    return (
        <Ul open={open} onClick={() => setOpen(!open)}>
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
        </Ul>
    )
}

export default Navbar;