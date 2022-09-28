import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

import { BackButton } from '../../components';


function Header() {

  const activeClass = (({ isActive }) => isActive ? 'current' : undefined)

  return (
    <>
      <ul>
        <BackButton />
        <NavLink className={activeClass} to="/" end >Home</NavLink>
        <NavLink className={activeClass} to="people">People</NavLink>
        <NavLink className={activeClass} to="about">About</NavLink>
      </ul>

    </>
  );
}

export default Header;
