import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom className="fadeIn">
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" className="slideUp" style={{ animationDelay: '0.2s' }}>
              We are a team of passionate developers building awesome web applications.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom className="fadeIn">
              Quick Links
            </Typography>
            <ul>
              <li className="slideUp" style={{ animationDelay: '0.3s' }}>
                <Link to="/home" variant="body2" color="text.secondary">
                  Home
                </Link>
              </li>
              <li className="slideUp" style={{ animationDelay: '0.4s' }}>
               <Link to="/ws">Services</Link>
              </li>
              <li className="slideUp" style={{ animationDelay: '0.5s' }}>
                <Link href="#" variant="body2" color="text.secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom className="fadeIn">
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" className="slideUp" style={{ animationDelay: '0.6s' }}>
              Email: info@purebalance.com
            </Typography>
            <Typography variant="body2" color="text.secondary" className="slideUp" style={{ animationDelay: '0.7s' }}>
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" color="text.secondary" align="center" className="fadeIn" style={{ animationDelay: '0.8s' }}>
            {'© '}
            {new Date().getFullYear()} Purebalance. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
