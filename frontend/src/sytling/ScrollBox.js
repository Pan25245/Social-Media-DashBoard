// ScrollBox.js
import React from 'react';
import './ScrollBox.css';
import { Element } from 'react-scroll';

// ScrollBox.js
const ScrollBox = ({ id, imgSrc, platform }) => (
  <Element name={id}>
    <div className="scroll-box">
      <p>{platform}</p>
      <img src={`${imgSrc}`} alt={`${id}`} />
    </div>
  </Element>
);

export default ScrollBox;