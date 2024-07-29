import React, { useState } from 'react';

const SleepTracker = () => {
  const [sleepData, setSleepData] = useState({
    bedtime: '',
    wakeupTime: '',
    sleepQuality: 'Good',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSleepData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sleepData); 
  };

  return (
    <div className="sleep-tracker">
      <h2>Sleep Quality Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bedtime">Bedtime:</label>
          <input 
            type="time" 
            id="bedtime" 
            name="bedtime" 
            value={sleepData.bedtime} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="wakeupTime">Wakeup Time:</label>
          <input 
            type="time" 
            id="wakeupTime" 
            name="wakeupTime" 
            value={sleepData.wakeupTime} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="sleepQuality">Sleep Quality:</label>
          <select 
            id="sleepQuality" 
            name="sleepQuality" 
            value={sleepData.sleepQuality} 
            onChange={handleChange}
          >
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SleepTracker;
