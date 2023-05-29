import React from 'react';
import classes from './Navigation.module.css';
const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <div></div>
      <div className={classes.NavigationList}>
        <span className={classes.NavigationListSpan}>About</span>
        <span className={classes.NavigationListSpan}>Projects</span>
        <span className={classes.NavigationListSpan}>Contact</span>
      </div>
    </div>
  );
};

export default Navigation;
