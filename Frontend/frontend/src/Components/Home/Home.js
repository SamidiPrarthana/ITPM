import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom"; 
import './home.css';
import Navbar from "../Bar/NavBar";
import Footer from "../Bar/Footer";

function Home() {
  const videoUrl = 'https://videocdn.cdnpk.net/videos/cab497db-a0a2-4794-9f50-7216519a863c/horizontal/previews/videvo_watermarked/large.mp4'; 
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    
    <div className="home-container">
      <Navbar/>
      <div className="video-container">
        {videoError ? (
          <div className="video-error">
            <p>Video playback failed. Please try again later.</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            muted
            className="full-screen-video"
            onError={handleVideoError}
          />
        )}
      </div>

      <div className="home-content">
        <h1>Welcome to Your Apartment Community</h1>
        <p>Manage your apartment community with ease.</p>
        <div className="product-link">
          
          <Link to="/productList">
            <h2>Booking Your Home...</h2>
          </Link>

          </div>
         
       
        </div>
        <Footer/>
      </div>
    
  );
}

export default Home;