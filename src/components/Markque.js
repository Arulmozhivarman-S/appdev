import React from 'react';
import './Marque.css';

const MarqueeOffers = () => {
  return (
    <div className="marquee" style={{marginTop:'50px'}}>
      <div className="marquee-content">
        <div className="marquee-item"> 🐽 50% off on all Yoga Classes! </div>
        <div className="marquee-item"> 🩺 Free Health Checkup with any Wellness Package! Book Today!</div>
        <div className="marquee-item"> 🌿 Enjoy a 30% Discount on All Natural Skincare Products! </div>
        <div className="marquee-item"> 👻 Buy 1 Get 1 Free on Organic Supplements! |</div>
        <div className="marquee-item"> 🦄 Free Health Checkup with any Wellness Package!</div>
      </div>
    </div>
  );
};

export default MarqueeOffers;
