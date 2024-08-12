import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios, { HttpStatusCode } from 'axios';
import { useNavigate } from "react-router-dom";
import UserContext from '../Context';
import VoiceNavigation from './VoiceNavigation';
const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://your-website.com/">
        Purebalance
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Login() 
{
  const [user1,setUser1]=useContext(UserContext);
  
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
        ...prevState,
        [name]: value
    }));
    
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/ch/${user.email}/${user.password}`);
      if(response.status === HttpStatusCode.Ok){
      navigate("/home")
      // console.log(response.data);
      setUser1(response.data);

      console.log(user1);
      
      // alert("Succes");
      }
  } catch (error) {
   // console.log(user);
       alert('There was an error Logging!', error);
  }
  };

  return (
    <ThemeProvider theme={theme}>
      <VoiceNavigation/>
      <Container component="main" style={{marginTop:'50px'}} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{color:'grey'}}>
            Sign in
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handleChange}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'#808D7C'}}
              onClick={handleSubmit}
            >
              <a style={{textDecoration:'none',color:'white'}} >Sign In</a>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color:'grey',textDecoration:'none'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Reg" variant="body2" style={{color:'grey',textDecoration:'none'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}