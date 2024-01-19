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


  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
  };

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

      <div className="dashboard-container">
    <div className="platform-selection-box">
    <p className="platform-selection-text">Choose your social media platform:</p>
    <div className="platform-icons">
      <img 
        src="Facebook.jpeg" 
        alt="Facebook" 
        onClick={() => handlePlatformSelect('facebook')} 
      />
      <img 
        src="Twitter.jpeg" 
        alt="Twitter" 
        onClick={() => handlePlatformSelect('twitter')} 
      />
      <img 
        src="Insta.jpeg" 
        alt="Instagram" 
        onClick={() => handlePlatformSelect('instagram')} 
      />
    </div>

    </div>

    {/* Profile Display Container */}
    <div className="profile-display-container">
        {selectedPlatform === 'facebook' && facebookProfile && (
          <div>
            <h3>Facebook Profile</h3>
            <p>Name: {facebookProfile.name}</p>
            <p>ID: {facebookProfile.id}</p>
            {/* Add more Facebook profile details here */}
          </div>
        )}
        {selectedPlatform === 'instagram' && instagramProfile && (
          <div>
            <h3>Instagram Profile</h3>
            <p>Username: {instagramProfile.username}</p>
            <p>ID: {instagramProfile.id}</p>
            {/* Add more Instagram profile details here */}
          </div>
        )}
        {selectedPlatform === 'twitter' && twitterprofile && (
          <div>
            <h3>Twitter Profile</h3>
            <p>Name: {twitterprofile.user.name}</p>
            <p>Username: {twitterprofile.user.screen_name}</p>
            {/* Add more Twitter profile details here */}
          </div>
        )}
        {!selectedPlatform && <p>Select a platform to view profile.</p>}
      </div>
    
      </div>
    {/* Posts Container */}
    <div className="posts-container">
      <h2 className="posts-container-title">
        {selectedPlatform ? `${selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} Posts` : 'Posts'}
      </h2>
      {selectedPlatform === 'facebook' && <FacebookScrollBox id="Facebook Box" posts={facebookPosts}/>}
      {selectedPlatform === 'instagram' && <InstagramScrollBox id="Instagram Box" posts={instagramPosts}/>}
      {selectedPlatform === 'twitter' && <ScrollBox id="Twitter Box"/>} {/* Assuming you have a state for twitter posts */}
      {/* If no platform is selected, you can show a default message or leave it blank */}
      {!selectedPlatform && <p>Select a platform to view posts.</p>}
    </div>
    
  


      </div>
);
}

export default App;
