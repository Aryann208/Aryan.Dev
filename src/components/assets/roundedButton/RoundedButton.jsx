import { useState } from 'react';
import classes from './RoundedButton.module.css';
const RoundedButton = ({
  bgColor = '#a41c3c',
  textColor = ' #F8DCC1',
  text = 'Button',
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
          fontSize: '2.2em',
          border: isHover ? ` 2px solid ${bgColor}` : ` 2px solid ${textColor}`,
          hover: true,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default RoundedButton;
