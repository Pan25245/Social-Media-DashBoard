// FacebookScrollBox.js
import React from 'react';
import './ScrollBox.css';  // Make sure to import your CSS file if needed
import { Element } from 'react-scroll';

const FacebookScrollBox = ({ id, posts }) => (
  <Element name={id} className="social-scroll-box">
    {posts.map((post, index) => (
      <div key={post.id} className="social-post">
        <div className="post-header">
          <h3>Post {index + 1}</h3>
        </div>
        <p className="post-caption">{post.message}</p>
        {post.full_picture && (
          <img 
            src={post.full_picture} 
            alt={`Post ${index + 1}`}
            className="post-image"
          />
        )}
        <div className="post-divider"></div>
      </div>
    ))}
  </Element>
);

export default FacebookScrollBox;









