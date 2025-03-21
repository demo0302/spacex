import React from "react";
import "./about.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        
        {/* Heading */}
        <h1 className="about-title">About Galactic Voyages 🚀</h1>

        {/* Introduction */}
        <p className="about-description">
          Welcome to <span className="highlight">Galactic Voyages</span>, the **future of space tourism**. 
          Whether it's a breathtaking **lunar expedition**, a **Mars colony visit**, 
          or a luxury cruise through the **Andromeda Galaxy**, we turn your cosmic dreams into reality.
        </p>

        {/* Why Choose Us Section */}
        <div className="about-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <ul className="about-list">
            <li>🚀 Cutting-edge AI-powered spacecraft</li>
            <li>👨‍🚀 Expert astronaut crew & space scientists</li>
            <li>🌍 Exclusive destinations beyond Earth</li>
            <li>🛰️ Luxury zero-gravity travel experience</li>
          </ul>
        </div>

        {/* Meet Our Fleet */}
        <div className="about-section">
          <h2 className="section-title">Meet Our Fleet</h2>
          <p className="about-description">
            Travel in style aboard the <strong>Lunar Explorer 1</strong>, <strong>Mars Odyssey</strong>, 
            or the <strong>Intergalactic Voyager</strong>—designed for deep space exploration!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
