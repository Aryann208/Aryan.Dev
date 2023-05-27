import React from 'react';
import './Bloom.css';

import useExternalScripts from './useExternalScriptsHook';
const Bloom = () => {
  useExternalScripts('./script.js');
  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="1000px"
        height="1000px"
        viewBox="-500 -500 1000 1000"
      >
        <circle className="ring1" r="100" />
        <circle className="ring2" r="100" />
        <circle className="ring3" r="100" />
        <circle className="ring4" r="100" />
        <circle className="ring5" r="100" />
        <circle className="ring6" r="100" />
      </svg>
    </div>
  );
};

export default Bloom;
