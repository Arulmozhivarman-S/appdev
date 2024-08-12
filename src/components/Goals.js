import React, { useContext, useEffect, useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Goals.css';
import PrimarySearchAppBar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import UserContext from '../Context';
import VoiceNavigation from './VoiceNavigation';
Chart.register(ArcElement, ChartDataLabels);

const Goals = () => {
  
  const [user,setUser]=useContext(UserContext);
  const [sleep, setSleep] = useState('');
  const [water, setWater] = useState('');
  const [nutrition, setNutrition] = useState('');
  const [goals, setGoals] = useState({ sleep: 0, water: 0, nutrition: 0 });

  useEffect(() => {
    try {
  const fetch=async()=>{
    const res = await axios.post("http://localhost:8080/getgbu", user);
    if (res.data && res.data.length > 0) {
      const goalData = res.data[0];
      setGoals({ 
        sleep: goalData.sleep || 0, 
        water: goalData.water || 0, 
        nutrition: goalData.calories || 0 
      });
    } else {
      console.error('Unexpected response structure:', res.data);
    }
      console.log('Response:', res.data);
    }
    fetch()
    console.log(goals);
    
      // Update goals state with the latest data from the server
    } catch (error) {
      alert("Error: " + error.message);
    }
  }, [user,goals])

  const handleAddGoal = async () => {
    
    const newGoal = { sleep: Number(sleep), water: Number(water),calories: Number(nutrition),user:user };
    console.log(newGoal);

    
    setSleep('');
    setWater('');
    setNutrition('');

    try {
      const res = await axios.post("http://localhost:8080/addg", newGoal);
      console.log('Response:', res.data);
    } catch (error) {
      alert("Error: " + error.message);
    }

  };

  const generatePieData = () => {
    const { sleep, water, nutrition } = goals;
    return {
      labels: ['Sleep (hours)', 'Nutrition (calories)', 'Water Intake (liters)'],
      datasets: [
        {
          data: [sleep, nutrition, water],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          borderColor: '#fff',
          borderWidth: 2,
        },
      ],
    };
  };

  const pieOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        color: '#fff',
        font: {
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div>
      <PrimarySearchAppBar />
      <VoiceNavigation/>
      <div className="goals-container">
        <h2 style={{ color: "#627254" }}>Add Your Goals</h2>
        <div className="goals-form">
          <label>
            Sleep Goal (hours):
            <input
              type="number"
              value={sleep}
              style={{ marginLeft: '17px' }}
              onChange={(e) => setSleep(e.target.value)}
            />
          </label>
          <label>
            Nutrition Goal (calories):
            <input
              type="number"
              value={nutrition}
              style={{ marginLeft: '17px' }}
              onChange={(e) => setNutrition(e.target.value)}
            />
          </label>
          <label>
            Water Intake Goal (liters):
            <input
              type="number"
              value={water}
              style={{ marginLeft: '17px' }}
              onChange={(e) => setWater(e.target.value)}
            />
          </label>
          <button onClick={handleAddGoal} style={{ margin: '30px auto' }}>
            Add Goal
          </button>
        </div>

        <h3 style={{ color: "#627254" }}>Your Goals</h3>
        <ul className="goals-list">
          {goals
          &&<li>
            Sleep: {goals.sleep} hours, Nutrition: {goals.nutrition} calories, Water Intake: {goals.water} liters
          </li>
}
        </ul>
      

        {goals.sleep > 0 || goals.nutrition > 0 || goals.water > 0 ? (
          <div  className="goals-summary">
            <div  className="pie-chart-container">
              <Pie data={generatePieData()} options={pieOptions} />
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Goals;
