// InstagramScrollBox.js
import React from 'react';
import './ScrollBox.css';  // Make sure to import your CSS file if needed
import { Element } from 'react-scroll';

const InstagramScrollBox = ({ id, posts }) => (
  <Element name={id}>
    <div className="scroll-box">
      {posts.map((post, index) => (
        <div key={post.id} className="instagram-post">
          <p>Post: {index+1}</p>
          <p>Caption: {post.caption}</p>
          <img 
            src={post.media_url} 
            alt={post.caption} 
            style={{ width: '50%', height: 'auto' }}
          />
          <p>--------------------------------------------------------------------</p>
        </div>
      ))}
    </div>
  </Element>
);

export default InstagramScrollBox;
