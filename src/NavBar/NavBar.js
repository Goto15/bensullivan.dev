import React from 'react';
import '../App.css'

const NavBar = (props) => {

  const navStyle = {
    color: props.palette[0],
  }

  return (
    <ul className="navBar" style={navStyle}>
      <li><a href="#Contact" className="navRight" style={{color: props.palette[0]}}>Contact</a></li>
      <li><a href="#Resume" style={{color: props.palette[0]}}>Resume</a></li>
      <li><a href="#Writing" style={{color: props.palette[0]}}>Writing</a></li>
      <li><a href="#Projects" style={{color: props.palette[0]}}>Projects</a></li>
    </ul>
  )
}

export default NavBar