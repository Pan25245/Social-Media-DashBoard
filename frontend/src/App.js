import React, { useEffect, useState } from 'react';
import ScrollBox from './sytling/ScrollBox';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts'); // Fetch data from Flask API
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Social Media Dashboard</h1>
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>: {post.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="scroll-box-container">
            <p className="box-description">Facebook ScrollBox</p>
            <ScrollBox id="FaceBook Box" imgSrc="Facebook.jpeg" platform="Facebook" />
          </div>
          <div className="scroll-box-container">
            <p className="box-description">Instagram ScrollBox</p>
            <ScrollBox id="Instagram Box" imgSrc="Insta.jpeg" platform="Instagram" />
          </div>
        </div>
        <div className="row">
          <div className="scroll-box-container">
            <p className="box-description">QQ ScrollBox</p>
            <ScrollBox id="QQ Box" imgSrc="QQ.jpeg" platform="QQ" />
          </div>
          <div className="scroll-box-container">
            <p className="box-description">Wechat ScrollBox</p>
            <ScrollBox id="Wechat Box" imgSrc="Wechat.jpeg" platform="Wechat" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
