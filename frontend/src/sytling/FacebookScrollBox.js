// FacebookScrollBox.js
import React from 'react';
import './ScrollBox.css';  // Make sure to import your CSS file if needed
import { Element } from 'react-scroll';

const FacebookScrollBox = ({ id, posts }) => (
  <Element name={id}>
    <div className="scroll-box">
      {posts.map((post, index) => (
        <div key={post.id} className="facebook-post">
          <p>Post: {index+1}</p>
          <p>Caption: {post.message}</p>
          <img 
            src={post.full_picture} 
            alt={post.id} 
            style={{ width: '50%', height: 'auto' }}
          />
          <p>--------------------------------------------------------------------</p>
        </div>
      ))}
    </div>
  </Element>
);

export default FacebookScrollBox;
