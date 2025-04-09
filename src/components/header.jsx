import React, { useState, useEffect } from 'react';
import vid from '../assets/3196002-uhd_3840_2160_25fps.mp4';
import '../components/header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location=useLocation()
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <div className="video-container">
      <video className='video-full' src={vid} autoPlay loop muted></video>
      {showOverlay && (
        <>
          
        </>
      )}
    </div>
  );
}

export default Header;
