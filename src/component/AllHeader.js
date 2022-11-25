import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        &nbsp; 
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/about">About</Link>
        &nbsp; 
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/Contactus">Contactus</Link>
        &nbsp; 
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/Registeryourself">Registeryourself</Link>
        &nbsp; 
        &nbsp;
        &nbsp;
        &nbsp;
        <Link to="/Practise">Practise</Link>
    </div>
  )
}

export default Header
