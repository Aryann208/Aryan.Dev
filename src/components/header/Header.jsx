import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.Header}>
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
    </div>
  );
};

export default Header;
