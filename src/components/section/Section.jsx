import React from 'react';
import Dev from '../assets/images/dev1.jpg';
import classes from './Section.module.css';
const Section = () => {
  return (
    <div className={classes.Section}>
      <img src={Dev} alt="" />
    </div>
  );
};

export default Section;
