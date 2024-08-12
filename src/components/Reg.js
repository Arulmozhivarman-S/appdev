import React, { useState } from 'react';
import './Reg.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Reg = () => {
    let navigate=useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:8080/adduser', user);
            console.log('Registration successful', response.data);
            navigate("/login")
        } catch (error) {
            alert("Error Registering")
            console.error('There was an error registering!', error);
        }
    };
    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://Purebalance.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    return (
        <div className="registration-container">
            <form onSubmit={handleSubmit} className="registration-form">
           <LockPersonIcon style={{marginLeft:'135px'}}/>
                <h2 style={{color:'grey'}}>Register</h2>
                <div className="form-group">
                    <label style={{color:'grey'}} htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={user.username} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label style={{color:'grey'}} htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label style={{color:'grey'}} htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                <Button onClick={handleSubmit} style={{backgroundColor:'#9CA986',color:'white',marginLeft:'100px' ,borderRadius:'4px',padding:'8px'}} variant="primary"><a style={{textDecoration:'none',color:'white'}} href="/home"><b>Register</b></a></Button>
                </div>
                <Button style={{width:'250px' ,borderRadius:'4px',padding:'8px',backgroundColor:'white'}} ><Link style={{textDecoration:'none',color:'grey'}} to="/">Already have an account? Sign in</Link></Button>
            </form>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </div>
    );
};

export default Reg;
