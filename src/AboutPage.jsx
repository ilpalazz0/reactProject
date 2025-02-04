import React from 'react';
import "./styles/AboutPage.css";
import FadeInComponent from './FadeInComponent';

const AboutPage = () => {
  
  return (
    <FadeInComponent>
      
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        
        <div className="about-sections">
          <div className="about-card">
            <div className="card-content">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for excellence, we've been dedicated to providing outstanding products and services to our customers since our inception. Our journey began with a simple idea: to create a shopping experience that combines quality, convenience, and exceptional customer service.
              </p>
            </div>
          </div>

          <div className="mission-vision-grid">
            <div className="about-card">
              <div className="card-content">
                <h2>Our Mission</h2>
                <p>
                  To deliver innovative solutions and outstanding customer experiences that exceed expectations and create lasting value for our community.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="card-content">
                <h2>Our Vision</h2>
                <p>
                  To be the leading provider in our industry, recognized for our commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="card-content">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3>Quality</h3>
                  <p>
                    We maintain the highest standards in everything we do.
                  </p>
                </div>
                <div className="value-item">
                  <h3>Integrity</h3>
                  <p>
                    We operate with honesty and transparency in all our dealings.
                  </p>
                </div>
                <div className="value-item">
                  <h3>Innovation</h3>
                  <p>
                    We continuously evolve and improve our offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="card-content">
              <h2>Our Commitment</h2>
              <p>
                We're committed to providing exceptional service and support to our customers. Our team works tirelessly to ensure that every interaction with our company exceeds expectations and delivers real value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FadeInComponent>
  );
};

export default AboutPage;