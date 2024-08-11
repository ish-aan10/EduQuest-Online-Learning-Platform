import React from 'react';
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Welcome To <span>EduQuest!</span></h1>
        <p>Unlock Your Potential with World-Class Online Learning.
        Join thousands of learners and start your journey today.</p>
      </div>
      <div className="hero-buttons">
        <div className="register-btn">Register</div>
        <div className="free-btn">Start Your Free Trial</div>
        <div className="explore-btn">Explore Courses</div>
      </div>
    </div>
  );
}

export default Hero;