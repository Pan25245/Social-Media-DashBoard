import React, { useEffect, useState } from 'react';
import InstagramScrollBox from './sytling/InstagramScrollBox';
import FacebookScrollBox from './sytling/FacebookScrollBox';
import ScrollBox from './sytling/ScrollBox';
import './App.css';

function App() {
  const [twitterprofile, setTwitterProfile] = useState({});
  const [instagramProfile, setInstagramProfile] = useState({});
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [facebookProfile, setFacebookProfile] = useState({});
  const [facebookPosts, setFacebookPosts] = useState([]);

  useEffect(() => {
    async function fetchTwitterProfile() {
      try {
        const response = await fetch('http://localhost:5000/twitter/profile');
        const data = await response.json();
        setTwitterProfile(data)
      } catch (error) {
          console.error('Error authenticating with Twitter:', error);
      }
    }

    async function fetchInstagramProfile() {
      try {
        const response = await fetch('http://localhost:5000/instagram/profile'); // Replace with your Instagram profile endpoint
        const data = await response.json();
        setInstagramProfile(data); // Update the Instagram profile state
      } catch (error) {
        console.error('Error fetching Instagram profile:', error);
      }
    }

    // Fetch Instagram posts
    async function fetchInstagramPosts() {
      try {
        const response = await fetch('http://localhost:5000/instagram/posts');
        const data = await response.json();
        setInstagramPosts(data); // Assuming your server returns posts data in the expected format
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    }

    async function fetchFacebookProfile() {
      try {
        const response = await fetch('http://localhost:5000/facebook/profile'); // Replace with your Instagram profile endpoint
        const data = await response.json();
        setFacebookProfile(data); // Update the Instagram profile state
      } catch (error) {
        console.error('Error fetching Instagram profile:', error);
      }
    }

    // Fetch Instagram posts
    async function fetchFacebookPosts() {
      try {
        const response = await fetch('http://localhost:5000/facebook/posts');
        const data = await response.json();
        setFacebookPosts(data); // Assuming your server returns posts data in the expected format
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    }

    fetchTwitterProfile();
    fetchInstagramProfile();
    fetchInstagramPosts();
    fetchFacebookProfile();
    fetchFacebookPosts();
  }, []);

  return (
    <div className="App">
      <h1 className="main-title">Social Media Dashboard</h1>
      <div>
      <h2 className="section-title">Facebook Profile</h2>
          <div className="profile-info">
            <p>ID: {facebookProfile.id}</p>
            <p>Name: {facebookProfile.name}</p>
          </div>
        <h2>Twitter Profile</h2>
          <div>
            {twitterprofile.user && (
              <div className="profile-info">
                <p>Name: {twitterprofile.user.name}</p>
                <p>Username: {twitterprofile.user.screen_name}</p>
              </div>
            )}
          </div>
        <h2>Instagram Profile</h2>
          <div className="profile-info">
            <p>ID: {instagramProfile.id}</p>
            <p>Name: {instagramProfile.username}</p>

          </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="scroll-box-container">
            <p className="box-description">Facebook Scroll Box <img src={`Facebook.jpeg`} alt={`Facebook`}/></p>
            <FacebookScrollBox id="FaceBook Box" posts={facebookPosts}/>
          </div>
          <div className="scroll-box-container">
            <p className="box-description">Instagram Scroll Box <img src={`Insta.jpeg`} alt={`Insta`}/></p>
            <InstagramScrollBox id="Instagram Box" posts={instagramPosts}/>
          </div>
        </div>
        <div className="row">
          <div className="scroll-box-container">
            <p className="box-description">Twitter Scroll Box <img src={`Twitter.jpeg`} alt={`Twitter`}/></p>
            <ScrollBox id="Twitter Box"/>
          </div>
          <div className="scroll-box-container">
            <p className="box-description">Wechat Scroll Box <img src={`Wechat.jpeg`} alt={`Wechat`}/></p>
            <ScrollBox id="Wechat Box"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
