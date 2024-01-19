// ScrollBox.js
import React from 'react';
import './ScrollBox.css';
import { Element } from 'react-scroll';

const ScrollBox = ({ id }) => (
  <Element name={id} className="social-scroll-box">
    <div className="scroll-box">
      <div className="social-post">
        <p className="no-content-message">
          Unable to display posts. This could be due to one of the following reasons:
        </p>
        <ul className="error-list">
          <li>No posts are available for this social media platform.</li>
          <li>There may be a connection issue or the platform is currently unsupported.</li>
          <li>There could be restrictions in accessing the content from this platform.</li>
        </ul>
      </div>
    </div>
  </Element>
);

export default ScrollBox;
