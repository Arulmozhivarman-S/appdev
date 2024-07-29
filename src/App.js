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
import SleepTracker from './components/SleepT';
import { Accordion } from 'react-bootstrap';
import Gs2 from './components/Gs2';
import Diet from './components/Diet';
import Oats from './components/Recipe/Oats';
import Smoothie from './components/Recipe/Smoothie';
import Salad from './components/Recipe/Salad';
import Plans from './components/workout/plans';
import Cart from './components/Cart';
import FoodSelector from './components/Recipe/Macros';

function App() {
  return (
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/macros" element={<FoodSelector />} />
          </Routes>
      </Router> 
      </header>
    </div>
  );
}

export default App;
