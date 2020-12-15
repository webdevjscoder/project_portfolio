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
    
    @media (max-width: 760px) {
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
`;

function BurgerNavbar({ open, setOpen }) {
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

export default BurgerNavbar;