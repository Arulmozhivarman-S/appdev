import React from 'react'
import './Diet.css'
import PrimarySearchAppBar from './Navbar'
import Footer from './Footer'
import Calorie1 from './Calories'
import VoiceNavigation from './VoiceNavigation'

function Diet() {
  return (
    <div>
          <PrimarySearchAppBar/>
          <VoiceNavigation/>
            <div className='food'>
                <div className='foodname'><a href='/oats'><img className='foodimg' src='https://www.eatingbirdfood.com/wp-content/uploads/2023/08/cheesecake-overnight-oats-hero-cropped-500x500.jpg'/></a><span>Oatmeal</span></div>
                <div className='foodname'><a href='smoothie'><img className='foodimg' src='https://www.eatingbirdfood.com/wp-content/uploads/2022/10/clementine-smoothie-hero-500x500.jpg'/></a><span>Smoothie</span></div>
                <div className='foodname'><a href='salad'><img className='foodimg' src='https://www.eatingbirdfood.com/wp-content/uploads/2024/03/blueberry-corn-chicken-salad-hero-new-500x500.jpg'/></a><span>Salads</span></div>
                <div className='foodname'><a href='highprotein'><img className='foodimg' src='https://www.eatingbirdfood.com/wp-content/uploads/2024/04/protein-bars-overhead-500x500.jpg'/></a><span>High protein</span></div>
                <div className='foodname'><a href='summer'><img className='foodimg' src='https://www.eatingbirdfood.com/wp-content/uploads/2020/06/yogurt-bark-in-bowl-300x300.jpg'/></a><span>Summer</span></div>
                <div className='foodname'><a href='dinner'><img className='foodimg' src='https://www.eatingbirdfood.com/wp-content/uploads/2023/02/chicken-fajita-bowls-hero-cropped-500x500.jpg'/></a><span>Dinner</span></div>
            </div>
            <Calorie1/>
            <div className='overnightoats'>
                    <div className='youtubevid'>
                    </div>
                    <div className='oatsdes'>
                    <h2>Overnight Oats</h2>
                    <p>It's overnight oats season and I have so many different <br/>flavor variations for you to try!
                    making them a versatile and convenient choice for a healthy start to the day.
                    </p>
                   <a href='#'> <h3 style={{paddingTop:'70px',textDecoration:'underline'}}>EASY OVERNIGHT OATS RECIPE 
                   </h3></a>
                    </div>
            </div>

            <div className='chicken'>
               <a href='/sautedveg'> <div className='dietimg1'></div></a>
               <a href='/pesto'> <div className='dietimg2'></div></a>
               <a href='/grill'> <div className='dietimg3'></div></a>
               <a href='/spinach'> <div className='dietimg4'></div></a>
            </div>
            <Footer/>

    </div>
  )
}

export default Diet