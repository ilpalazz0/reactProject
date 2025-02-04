import React from 'react';
import './styles/LocationPage.css';
import FadeInComponent from './FadeInComponent';

const LocationPage = () => {
  // Replace with your actual coordinates
  const location = {
    address: '123 Technology Street, City',
    lat: 40.7128,
    lng: -74.0060,
  };

  return (
    <FadeInComponent>
    <div className="location-page">
      <div className="location-container">
        <div className="location-info">
          <h1>Visit Our Store</h1>
          <div className="info-card">
            <h2>Store Hours</h2>
            <p>Monday - Friday: 9:00 - 18:00</p>
            <p>Saturday: 10:00 - 16:00</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="info-card">
            <h2>Address</h2>
            <p>{location.address}</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@store.com</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Store Location"
            width="100%"
            height="100%"
            frameBorder="0"
            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11780.674925560677!2d49.84526351731287!3d40.3986025667805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d7587bca7%3A0x1a5f46126ca333e4!2z0JPRj9C90LTQttC70LjQug!5e0!3m2!1sru!2saz!4v1738239925698!5m2!1sru!2saz"}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </FadeInComponent>
  );
};

export default LocationPage;