import React from 'react'
import PrimarySearchAppBar from '../Navbar'
import Footer from '../Footer'

function Pullups() {
  return (
    <div>
        <PrimarySearchAppBar/>
        <div style={{margin:'50px',display:'flex',flexDirection:"row",marginLeft:'200px'}}>
            <img src='https://darebee.com/images/workouts/muscles/50-pull-ups-workout.jpg'/>
            <img style={{height:'300px'}} src='https://darebee.com/images/infobox/focus-upperbody.jpg'/>
            <img style={{height:'300px'}} src='https://darebee.com/images/infobox/type-strength.jpg'/>
            <img style={{height:'300px'}} src='https://darebee.com/images/infobox/difficulty-5.jpg'/>

        </div>
            <blockquote style={{display:'flex',flexDirection:'row'}}>
                <video style={{margin:'20px auto'}} width="420" height="340" controls>
                 <source src="https://videos.pexels.com/video-files/6389831/6389831-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                {/* <div style={{textAlign:'center'}}><b style={{margin:'150px auto'}}>
                All Push-Ups is a workout that takes you to the floor and keeps you there as you fight against gravity using, primarily, your upper body. This is a workout that engages a great many muscle groups beyond its primary focus. It delivers strength and tone gains and helps you maintain a strong, healthy physique without the use of any equipment.
                </b></div> */}
            </blockquote>
        <Footer/>
      
    </div>
  )
}

export default Pullups
