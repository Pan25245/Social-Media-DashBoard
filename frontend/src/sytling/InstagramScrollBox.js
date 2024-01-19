// InstagramScrollBox.js
import React from 'react';
import './ScrollBox.css';  // Make sure to import your CSS file if needed
import { Element } from 'react-scroll';

const InstagramScrollBox = ({ id, posts }) => (
  <Element name={id} className="social-scroll-box"> {/* Use a shared class name */}
    {posts.map((post, index) => (
      <div key={post.id} className="social-post"> {/* Use a shared class name */}
        <div className="post-header">
          <h3>Post {index + 1}</h3>
        </div>
        <p className="post-caption">{post.caption}</p>
        {post.media_url && (
          <img 
            src={post.media_url} 
            alt={`Post ${index + 1}`}
            className="post-image"
          />
        )}
        <div className="post-divider"></div>
      </div>
    ))}
  </Element>
);

export default InstagramScrollBox;
