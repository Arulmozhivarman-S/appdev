import React from 'react'
import PrimarySearchAppBar from '../Navbar'
import Footer from '../Footer'
import './Workout.css'
import { Link } from 'react-router-dom'
import VoiceNavigation from '../VoiceNavigation'
function Workout() {
  return (
    <div>
      <PrimarySearchAppBar/>
      <VoiceNavigation/>
      <div className='overvieww'>
        <h1 style={{float:'left',marginLeft:'220px',marginTop:'150px',color:'white',paddingTop:'20px'}}>Level Up</h1><br></br>
       <blockquote style={{width:'500px',marginTop:'150px'}}> <h2 style={{color:'white',float:'left'}}>
        Reach your fitness goals with the best home gym equipment, racing and marathon training tips, and expert physical and mental health insights.</h2>
        </blockquote>
      </div>

      <div className='workoutgrid'>
          <div id='img1' className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/25286543/pexels-photo-25286543/free-photo-of-man-in-pull-up-competition.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <Link style={{textDecoration:'none'}} to="/pullups"><h2>Pull ups</h2></Link>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/3837781/pexels-photo-3837781.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <h2>Bench press</h2>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/4853272/pexels-photo-4853272.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            
            <h2>Squat</h2>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=600'/>
          
            <h2>Pushups</h2>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/16966303/pexels-photo-16966303/free-photo-of-men-in-a-weightlifting-competition.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <h2>Deadlift</h2>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/6550844/pexels-photo-6550844.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            
            <h2>Biceps curls</h2>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=600'/> 
            <h2>Abs</h2>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/6456014/pexels-photo-6456014.jpeg?auto=compress&cs=tinysrgb&w=600'/> 
            <h2>Triceps</h2>
          </div>
          <div className='workoutgriditem'>
            <img style={{width:'300px',height:'200px'}} src='https://images.pexels.com/photos/3836880/pexels-photo-3836880.jpeg?auto=compress&cs=tinysrgb&w=600'/> 
            <h2>Shoulder</h2>
          </div>
          
      </div>

      <Footer/>
    </div>
  )
}

export default Workout
