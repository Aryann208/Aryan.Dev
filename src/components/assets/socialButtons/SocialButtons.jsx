import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import classes from './SocialButtons.module.css';
const SocialButtons = ({
  icon = <FaLinkedinIn />,
  link = '#',
  textColor = '#fcf951',
  bgColor = '#422057',
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className={classes.RoundedButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHover ? textColor : bgColor,
        color: isHover ? bgColor : textColor,

        borderColor: isHover ? bgColor : textColor,
        hover: true,
      }}
    >
      <a href={link} target="_blank">
        {' '}
        {icon}
      </a>
    </div>
  );
};

export default SocialButtons;
