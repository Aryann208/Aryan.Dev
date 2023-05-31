import React from 'react';
import classes from './Navigation.module.css';
const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <div></div>
      <div className={classes.NavigationList}>
        <a href="#about">
          {' '}
          <span className={classes.NavigationListSpan}>About</span>
        </a>
        <a href="#project">
          <span className={classes.NavigationListSpan}>Projects</span>
        </a>
        <a href="#footer">
          <span className={classes.NavigationListSpan}>Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
