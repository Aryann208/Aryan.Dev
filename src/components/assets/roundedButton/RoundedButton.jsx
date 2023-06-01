import { useState } from 'react';
import classes from './RoundedButton.module.css';
const RoundedButton = ({
  bgColor = ' #F8DCC1',
  borderColor = '#a41c3c',
  textColor = '#a41c3c',
  text = 'Button',
  link = '',
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div>
      <button
        className={classes.Button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHover ? textColor : bgColor,
          color: isHover ? bgColor : textColor,

          border: isHover ? ` 2px solid ${bgColor}` : ` 2px solid ${textColor}`,
          hover: true,
        }}
      >
        <a href={link} target="_blank">
          {text}
        </a>
      </button>
    </div>
  );
};

export default RoundedButton;
