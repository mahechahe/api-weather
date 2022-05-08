import React from 'react'
import '../styles/Nav.css'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Logo from '../assets/logo.png'

export const Nav = ({children}) => {
  return (
    <>
      <div className='nav-header--container'>
        <div className='div-nav--logo'>
            <Link to='/'>
              <img src={Logo} alt="Logo" /> 
            </Link>
        </div>
        <div className='div-nav--routes'>
          <Link to="/">
            <Button variant="text">Home</Button>
          </Link>
          <Link to="/news">
            <Button variant="text">News</Button>
          </Link>
          <Link to="/contact">
            <Button variant="text">Contact</Button>
          </Link>
        </div>
      </div>
      {children}
    </>
  )
}
