import logo from './logo.svg';
import './App.css';
import Sam from './components/Reg';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reg from './components/Reg';
import Homepage from './components/Homepage';
import TemporaryDrawer from './components/Drawer';
import Service from './components/service';
import Footer from './components/Footer';
import QandA from './components/QandA';
import FAQ from './components/QandA';
import ControlledAccordions from './components/Accordition';
import { Accordion } from 'react-bootstrap';
import Gs2 from './components/Gs2';
import Diet from './components/Diet';
import Oats from './components/Recipe/Oats';
import Smoothie from './components/Recipe/Smoothie';
import Salad from './components/Recipe/Salad';
import Plans from './components/workout/plans';
import Cart from './components/Cart';
import FoodSelector from './components/Recipe/Macros';
import Goals from './components/Goals';
import SautedVeg from './components/Recipe/SautedVeg';
import Pesto from './components/Recipe/Pesto';
import Grill from './components/Recipe/Grill';
import Spinach from './components/Recipe/Spinach';
import Highprotien from './components/Recipe/Highprotien';
import Summer from './components/Recipe/Summer';
import Dinner from './components/Recipe/Dinner';
import { useState } from 'react';
import UserContext from './Context';
import Recover from './components/workout/Recover';
import Shoulder from './components/workout/Shoulder';
import Elbow from './components/workout/Elbow';
import Knee from './components/workout/Knee';
import Workout from './components/workout/Workout';
import Pullups from './components/workout/Pullups';
import WorkoutSession from './components/Ws';
import Ws from './components/Ws';

function App() {
  const user=useState(null
   );
  return (
    <UserContext.Provider value={user }>

    <div className="App">
      <header className="App-header">
      <Router>
          <Routes>
            <Route path="/" element={<Gs2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Homepage/>} />
            <Route path="/Reg" element={<Reg />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/oats" element={<Oats />} />
            <Route path="/smoothie" element={<Smoothie />} />
            <Route path="/salad" element={<Salad />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/ws" element={<Ws />} />
            <Route path="/macros" element={<FoodSelector />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/sautedveg" element={<SautedVeg />} />
            <Route path="/pesto" element={<Pesto />} />
            <Route path="/grill" element={<Grill />} />
            <Route path="/spinach" element={<Spinach />} />
            <Route path="/summer" element={<Summer />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/shoulder" element={<Shoulder />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/elbow" element={<Elbow/>} />
            <Route path="/knee" element={<Knee/>} />
            <Route path="/pullups" element={<Pullups/>} />
            <Route path="/highprotein" element={<Highprotien />} />
          </Routes>
      </Router> 
      
      </header>
    </div>
    </UserContext.Provider>
  );
}

export default App;
