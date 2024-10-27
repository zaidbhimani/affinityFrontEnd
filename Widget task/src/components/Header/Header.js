import React from 'react';
import { NavLink  } from 'react-router-dom';
import s from "./Header.module.scss"
const Header = () => {
  return <nav>
    <NavLink  to="/">Personal</NavLink >
    <NavLink  to="/professional">Professional</NavLink >    
  </nav>
}

export default Header