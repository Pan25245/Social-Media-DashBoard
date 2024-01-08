import React, { useEffect, useState } from 'react';
import ScrollBox from './sytling/ScrollBox';

function App() {
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch('http://localhost:5000/facebook/profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }

    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:5000/facebook/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchProfile();
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Social Media Dashboard</h1>
      <div>
        <h2>Facebook Profile</h2>
        <p>ID: {profile.id}</p>
        <p>Name: {profile.name}</p>
      </div>
      <div>
        <h2>Posts 欸嘿 der~ der~ der~ der~ der~ der~ der~</h2>
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
            <p className="box-description">Facebook Scroll Box <img src={`Facebook.jpeg`} alt={`Facebook`} /></p>
            <ScrollBox id="FaceBook Box" platform="Facebook" />
          </div>
          <div className="scroll-box-container">
            <p className="box-description">Instagram Scroll Box <img src={`Insta.jpeg`} alt={`Insta`} /></p>
            <ScrollBox id="Instagram Box" platform="Instagram" />
          </div>
        </div>
        <div className="row">
          <div className="scroll-box-container">
            <p className="box-description">QQ Scroll Box <img src={`QQ.jpeg`} alt={`QQ`} /></p>
            <ScrollBox id="QQ Box" platform="QQ" />
          </div>
          <div className="scroll-box-container">
            <p className="box-description">Wechat Scroll Box <img src={`Wechat.jpeg`} alt={`Wechat`} /></p>
            <ScrollBox id="Wechat Box" platform="Wechat" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
