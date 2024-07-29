import React, { useState } from 'react';
import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Grid, Box } from '@mui/material';

const Calorie1 = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState(null);

  const handleCalculate = () => {
    const weightInKg = weight;
    const heightInCm = height;
    const ageInYears = age;

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }

    let dailyCalories;
    switch (activityLevel) {
      case 'sedentary':
        dailyCalories = bmr * 1.2;
        break;
      case 'light':
        dailyCalories = bmr * 1.375;
        break;
      case 'moderate':
        dailyCalories = bmr * 1.55;
        break;
      case 'active':
        dailyCalories = bmr * 1.725;
        break;
      case 'very active':
        dailyCalories = bmr * 1.9;
        break;
      default:
        dailyCalories = bmr;
    }

    setCalories(Math.round(dailyCalories));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: '#f5f5f5' }}>
      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Calorie Calculator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Weight (kg)"
              variant="outlined"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Height (cm)"
              variant="outlined"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Activity Level</InputLabel>
              <Select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                label="Activity Level"
              >
                <MenuItem value="sedentary">Sedentary (little or no exercise)</MenuItem>
                <MenuItem value="light">Light (light exercise/sports 1-3 days/week)</MenuItem>
                <MenuItem value="moderate">Moderate (moderate exercise/sports 3-5 days/week)</MenuItem>
                <MenuItem value="active">Active (hard exercise/sports 6-7 days a week)</MenuItem>
                <MenuItem value="very active">Very Active (very hard exercise/sports & a physical job)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleCalculate} sx={{ mt: 3, bgcolor: '#1976d2' }}>
              Calculate
            </Button>
          </Grid>
          {calories && (
            <Grid item xs={12} textAlign="center">
              <Typography variant="h6" sx={{ mt: 3 }}>
                Your daily caloric needs: <span style={{ fontWeight: 'bold', color: '#d32f2f' }}>{calories} calories/day</span>
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Calorie1;
