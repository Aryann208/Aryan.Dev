import React from 'react';
import './Header.module.css';
import PulsingSphere from '../pulsingSphere/PulsingSphere';
const Header = () => {
  return (
    <div className="sphere">
      <div className={classes.sphere1}>
        <PulsingSphere />
        <PulsingSphere />
        <PulsingSphere />
      </div>
    </div>
  );
};

export default Header;
