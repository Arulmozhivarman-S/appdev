import * as React from 'react';
import './service.css'
import MarqueeOffers from './Markque';

function Service() {
  return (
    <div>
          <div className='aboutservice'>
            <h1 style={{color:'#627254'}}>Track your health and wellness</h1>
            <p>Discover a healthier, happier you with our all-in-one wellness app. Your journey to better health starts here.</p>
            <p>Get expert advice on balanced diets, healthy recipes, and meal planning.</p>
          </div>
        <MarqueeOffers  />
          <div className='Container'>
            <a href='/macros'><div className='service1'></div> </a> 
            <div className='service2'></div>  
            <div className='service3'></div> 
        </div>
        <h1 style={{textAlign:'center',marginTop:'0px',marginBottom:'20px',color:'#627254',marginBottom:'50px'}}>Diet</h1>
        <div className='diet'>
            <a href='/diet'><div className='dietimg'>
              <div className='dietpic'></div>
            </div></a>
            <div className='aboutdiet' style={{textAlign:'left'}}>
               <h2 style={{marginLeft:'50px',color:'#627254'}}>Monitor your dietary habits and track your
                 progress
              </h2>
                 <h2 style={{marginLeft:'50px',color:'#627254'}}>with our intuitive tools.</h2>
              <div style={{marginLeft:'50px'}}><p>Our plans ensure you get the right balance of proteins, carbs, fats, vitamins, and minerals.</p>
              </div>
              </div>
        </div>
          <h1 style={{textAlign:'center',marginTop:'50px',marginBottom:'50px',color:'#627254',marginBottom:'50px'}}>Fitness</h1>
        <div className='coach'>
              <div className='coachimg'>
                <a href='/plans'><div className='pic'></div></a>
              </div>
              <div className='aboutcoach'>
                <h1 style={{color:'#627254'}}>Meet Your Coach</h1>
                <h1 style={{color:'#627254'}}>Arul</h1>
                <div>
                <p>
                Welcome to your personal coaching experience! Arul is a certified health and wellness coach with a passion for helping individuals achieve their health goals.
                 With 2 years of experience, He brings a wealth <br/>of knowledge in fitness, nutrition, and mental well-being.
                 </p>
                </div>
              </div>
        </div>
    </div>

  )
}

export default Service



