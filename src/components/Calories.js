import React, { useState } from 'react';
import './UserForm.css';

const NutritionInfo = () => {
  const [food, setFood] = useState('');
  const [nutrition, setNutrition] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFood(e.target.value);
  };

  const fetchNutritionData = async (foodItem) => {
    const appId = '932ca81b';
    const apiKey = '08178ad7c4d78dac662268694b832bbf';
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${apiKey}&ingr=${foodItem}`;

    try {
      const response = await fetch(url);
      console.log(apiKey);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.totalNutrients) {
        setNutrition(data.totalNutrients);
        setError('');
      } else {
        setError('No nutrition data found for the specified food.');
        setNutrition(null);
      }
    } catch (err) {
      setError('Failed to fetch nutrition data.');
      setNutrition(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (food) {
      fetchNutritionData(food);
    }
  };

  return (
    <div className="nutrition-info-container">
      <div className="nutrition-info">
        <h2>Nutrition Information</h2>
        <form onSubmit={handleSubmit}>
          <label >
            Food Item:
            <input style={{marginLeft:'20px',marginTop:'20px'}} type="text" value={food} onChange={handleInputChange} />
          </label>
          <button type="submit">Get Nutrition Info</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      {nutrition && (
        <div className="nutrition-details">
          <h3>Nutrition Details</h3>
          <p><strong>Carbohydrates:</strong> {nutrition.CHOCDF ? nutrition.CHOCDF.quantity : 'N/A'}g</p>
          <p><strong>Protein:</strong> {nutrition.PROCNT ? nutrition.PROCNT.quantity : 'N/A'}g</p>
          <p><strong>Fats:</strong> {nutrition.FAT ? nutrition.FAT.quantity : 'N/A'}g</p>
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;
