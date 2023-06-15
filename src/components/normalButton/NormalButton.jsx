import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import classes from './NormalButton.module.css';
const NormalButton = ({
  icon = <FaLinkedinIn />,
  textColor = '#a41c3c',
  bgColor = '#f8dcc1',
  width = '100%',
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
        width: width,
        borderColor: isHover ? bgColor : textColor,
        hover: true,
      }}
    >
      {icon}
    </div>
  );
};

export default NormalButton;
