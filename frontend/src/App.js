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
          <ScrollBox id="FaceBook Box" imgSrc="Facebook.jpeg" platform="Facebook" />
          <ScrollBox id="Instagram Box" imgSrc="Insta.jpeg" platform="Instagram" />
        </div>
        <div className="row">
          <ScrollBox id="QQ Box" imgSrc="QQ.jpeg" platform="QQ" />
          <ScrollBox id="Wechat Box" imgSrc="Wechat.jpeg" platform="Wechat" />
        </div>
      </div>
    </div>
  );
}

export default App;
