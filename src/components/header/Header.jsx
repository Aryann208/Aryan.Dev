import React from 'react';
import classes from './Header.module.css';
import Bloom from '../assets/Bloom/Bloom';

const Header = () => {
  return (
    <div className={classes.Header}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className={classes.LeftSection}>
        <p className={classes.RegularText}>
          hi, i am{' '}
          <span className={`${classes.Heading} ${classes.EnhancedText}`}>
            Aryan Trivedi
          </span>
          <br />a{' '}
          <span className={`${classes.Heading2} ${classes.EnhancedText}`}>
            frontend developer
          </span>
        </p>
        <Bloom />
      </div>
    </div>
  );
};

export default Header;
