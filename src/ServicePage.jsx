import React, { useState, useEffect } from 'react';
import './styles/ServicePage.css';
import FadeInComponent from './FadeInComponent';

const ServicePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const serviceImages = [
    '/service1.jpg',
    '/service2.jpg',
    '/service3.jpg',
    '/service4.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % serviceImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + serviceImages.length) % serviceImages.length
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextImage, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <FadeInComponent>
      <div className="service-page">
        {/* Hero Section with Slideshow */}
        <div className="hero-section">
          <div className="slideshow-container">
            {serviceImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Service ${index + 1}`}
                className={`slide-image ${
                  index === currentImageIndex ? 'active' : ''
                }`}
              />
            ))}
            
            <div className="slide-overlay">
              <div className="hero-content">
                <h1 className="hero-title">Advanced Tech Solutions</h1>
                <p className="hero-subtitle">
                  Empowering your digital transformation with cutting-edge technology services and expert support
                </p>
              </div>
            </div>

            <div className="arrow-container">
              <button 
                className="slide-arrow left"
                onClick={prevImage}
                aria-label="Previous slide"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>

              <button 
                className="slide-arrow right"
                onClick={nextImage}
                aria-label="Next slide"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-container">
          {/* Hardware Repair */}
          <div className="service-section">
            <div className="service-card">
              <h2 className="service-title">Hardware Solutions</h2>
              <p className="service-description">
                Expert diagnosis and repair for laptops, desktops, and peripheral devices. 
                Our certified technicians provide comprehensive hardware solutions to keep 
                your devices running at peak performance.
              </p>
            </div>
          </div>

          {/* Software Support */}
          <div className="service-section">
            <div className="service-card">
              <h2 className="service-title">Software Excellence</h2>
              <p className="service-description">
                Comprehensive software installation, configuration, and troubleshooting. 
                We ensure your systems are optimized, secure, and running the latest 
                software solutions for maximum efficiency.
              </p>
            </div>
          </div>

          {/* Network Solutions */}
          <div className="service-section">
            <div className="service-card">
              <h2 className="service-title">Network Infrastructure</h2>
              <p className="service-description">
                Professional network setup, security, and optimization services. 
                Our expert team ensures your network infrastructure is robust, 
                secure, and scalable to meet your growing needs.
              </p>
            </div>
          </div>

          {/* Custom Configurations */}
          <div className="service-section">
            <div className="service-card">
              <h2 className="service-title">Custom Solutions</h2>
              <p className="service-description">
                Tailored technology solutions to meet your specific business or personal needs. 
                We work closely with you to design and implement custom configurations that 
                perfectly align with your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInComponent>
  );
};

export default ServicePage;