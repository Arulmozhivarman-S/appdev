import React, { useState } from 'react';
import FoodInfo from './Foodinfo';
import './Macros.css';
import PrimarySearchAppBar from '../Navbar';

const foodData = [
  { name: 'Apple', protein: 0.3, carbs: 14, fat: 0.2 },
  { name: 'Banana', protein: 1.3, carbs: 27, fat: 0.3 },
  { name: 'Chicken Breast', protein: 31, carbs: 0, fat: 3.6 },
  { name: 'Broccoli', protein: 2.8, carbs: 6.6, fat: 0.4 },
];

function FoodSelector() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSelectChange = (event) => {
    const selectedFoodName = event.target.value;
    const food = foodData.find((item) => item.name === selectedFoodName);
    setSelectedFood(food);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className="food-selector">
        <PrimarySearchAppBar />
      {/* <h1>Food Nutritional Information</h1>
      <div className="controls">
        <select onChange={handleSelectChange} defaultValue="">
          <option value="" disabled>Select a food</option>
          {foodData.map((food) => (
            <option key={food.name} value={food.name}>{food.name}</option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <FoodInfo food={selectedFood} quantity={quantity} /> */}
    </div>
  );
}

export default FoodSelector;
