import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import classes from './SocialButtons.module.css';
const SocialButtons = ({ icon = <FaLinkedinIn /> }) => {
  return <div className={classes.RoundedButton}>{icon}</div>;
};

export default SocialButtons;
