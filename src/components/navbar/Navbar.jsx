import React, { useState } from 'react';
import classes from './Navbar.module.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router';
import Logo from '../assets/images/whiteLogo.svg';
import Navigation from '../navigation/Navigation';
const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const navToggle = () => {
    setToggled(!toggled);
    console.log(toggled);
  };
  return (
    <>
      <div className={classes.Navbar}>
        <a href="#header">
          {' '}
          <div className={classes.NavbarImage}>
            <img src={Logo} alt="" />
          </div>
        </a>
        <div className={classes.NavbarImage}>
          <BiMenuAltRight className={classes.MenuLogo} onClick={navToggle} />
        </div>
      </div>
      <div>{toggled && <Navigation onClick={navToggle} />}</div>
    </>
  );
};

export default Navbar;
// {toggled && }
