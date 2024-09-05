import React from 'react';
import './Homepage.css';
import home_image from '../Assets/home.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Homepage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/allitems'); // Redirect to "All items" page
  };

  return (
    <div className='homepage-container'>
      <div className="content">
        <p className="description">
        Welcome to MedDoor, your trusted partner in health and wellness. Discover a wide range of quality medicines and healthcare products, delivered right to your door with care and precision. Your health is our priority—shop with confidence and let us take care of you.
        </p>
        <button className="all-items-button" onClick={handleButtonClick}>
          Shop Now
        </button>
      </div>
      <div className="image">
        <img src={home_image} alt="Homepage_Image" className='homeImage' />
      </div>
    </div>
  );
};

export default Homepage;
