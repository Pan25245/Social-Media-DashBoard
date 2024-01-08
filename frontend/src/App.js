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
      {/* Display four scrollable boxes with images */}
      <ScrollBox id="FaceBook Box" imgSrc="../Image/Facebook.jpeg" />
      <ScrollBox id="Instagram Box" imgSrc="../Image/Insta.jpeg" />
      <ScrollBox id="QQ Box" imgSrc="../Image/QQ.jpeg" />
      <ScrollBox id="Wechat Box" imgSrc="../Image/Wechat.jpeg" />
    </div>
  );
}

export default App;
