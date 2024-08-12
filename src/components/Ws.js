import React, { useContext, useState } from 'react';
import PrimarySearchAppBar from './Navbar';
import Footer from './Footer';
import './Wt.css';
import UserContext from '../Context';

function Ws() {
  const [workoutDetails, setWorkoutDetails] = useState({
    workoutType: '',
    duration: '',
    date: '',
  });
  const [user,setuser]=useContext(UserContext)
  const [workouts, setWorkouts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutDetails({
      ...workoutDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, workoutDetails]);
   
    console.log(user);
    setWorkoutDetails({ workoutType: '', duration: '', date: '' });
  };

  return (
    <div>
      <PrimarySearchAppBar />
      {/* <img style={{width:'100%',height:'250px'}} src='https://media.post.rvohealth.io/wp-content/uploads/2023/10/Hub_desktop_fitness_3600x600_5-logo.jpg' /> */}
        <video autoPlay muted loop height={300} width={500}>
          <source width={900} src="//videos.ctfassets.net/7vk8puwnesgc/7aMniDOtQkFEsOOPkQ9weX/df90354941c8eab576d97b83dfa32732/240045_WEB_SUMMER-Maquees_2024_TreadLanebreak_05_Desktop.mp4" />
        </video>
      <div className="container">
        <h2>Workout Tracker</h2>
        <form className="form1" onSubmit={handleSubmit}>
          <div>
            <label>Workout Type:</label>
            <input
              type="text"
              name="workoutType"
              value={workoutDetails.workoutType}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Duration (in minutes):</label>
            <input
              type="number"
              name="duration"
              value={workoutDetails.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={workoutDetails.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Workout</button>
        </form>

        <h3>Workout Log</h3>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>
              {workout.date} - {workout.workoutType} for {workout.duration} minutes
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Ws;
