import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './FoodInfo.css';
import PrimarySearchAppBar from '../Navbar';
import Footer from '../Footer';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function FoodInfo({ food, quantity }) {
  if (!food) {
    return <div className="food-info">Please select a food to see the nutritional information.</div>;
  }

  const data = [
    { name: 'Protein', value: food.protein * quantity },
    { name: 'Carbs', value: food.carbs * quantity },
    { name: 'Fat', value: food.fat * quantity },
  ];

  return (
    <div className="food-info">
      <h2>{food.name} Nutritional Information</h2>
      <ul>
        <li>Protein: {food.protein * quantity}g</li>
        <li>Carbs: {food.carbs * quantity}g</li>
        <li>Fat: {food.fat * quantity}g</li>
      </ul>
      <PieChart width={400} height={400} style={{marginLeft:'450px'}}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <Footer/>
    </div>
  );
}

export default FoodInfo;
