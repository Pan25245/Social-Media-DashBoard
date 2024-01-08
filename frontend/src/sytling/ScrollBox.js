// ScrollBox.js
import React from 'react';
import './ScrollBox.css';
import { Element } from 'react-scroll';

// ScrollBox.js
const ScrollBox = ({ id, imgSrc, platform }) => (
  <Element name={id}>
    <div className="scroll-box">
      <img src={`${imgSrc}`} alt={`${id}`} />
      <p>{platform}</p>
    </div>
  </Element>
);

export default ScrollBox;