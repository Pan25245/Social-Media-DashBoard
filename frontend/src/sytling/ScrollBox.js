// ScrollBox.js
import React from 'react';
import { Element } from 'react-scroll';

// ScrollBox.js
// Make sure the paths are correct
const ScrollBox = ({ id, imgSrc, platform }) => (
  <Element name={id}>
    <div className="scroll-box">
      <img src={`images/${imgSrc}`} alt={`Box ${id}`} />
      <p>{platform}</p>
    </div>
  </Element>
);

export default ScrollBox;