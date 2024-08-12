import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Recover.css'
import Footer from '../Footer';
import PrimarySearchAppBar from '../Navbar';
import { Link, NavLink } from 'react-router-dom';
import VoiceNavigation from '../VoiceNavigation';
export default function MediaCard() {
  return (
    <div>
      <PrimarySearchAppBar/>
      <VoiceNavigation/>
      <div className='recoverimg' >

      </div>
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Common Injury and Prevention</h1>
        <div className='recovery' >

        <Link to="/elbow">
    <Card sx={{maxHeight:220, maxWidth: 330 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://media.istockphoto.com/id/1152834631/photo/physical-therapists-are-checking-patients-elbows-at-the-clinic-office-room.webp?b=1&s=170667a&w=0&k=20&c=EKQVkerM3V0WNe2TmXPs7jOnKuwhCkq4ZQd5Z3o2h2E="
        title="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Elbow Injury
        </Typography>
       
      </CardContent> */}
      {/* <CardActions >
        <Button style={{marginLeft:'90px',marginTop:'-50px'}} size="small">Learn More</Button></Link>
      </CardActions> */}
    </Card>
    </Link>


   <Link to="/shoulder">
      <Card sx={{maxHeight:220, maxWidth: 330 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://cdn-djmgl.nitrocdn.com/WKDrbFhGmXUqrdsfVwgWscBHIyiXYRMC/assets/images/optimized/rev-e31e453/reliva.in/wp-content/uploads/2024/01/shoulder-pain-treatment.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Shoulder Injury
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button style={{marginLeft:'90px',marginTop:'-50px'}} size="small">Learn More</Button></Link>
       
      </CardActions> */}
    </Card>
    </Link>
    

    <Link to="/knee">
    <Card sx={{ maxHeight:220,maxWidth: 330 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://media.istockphoto.com/id/867056210/photo/knee-trauma-and-joint-pain-sports-injuries.webp?b=1&s=170667a&w=0&k=20&c=Wo04huzNRgLsLDzOAnKM6P71Ge7rV3EoIZNXNqveYjs="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Knee Injury
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button style={{marginLeft:'90px',marginTop:'-50px'}} size="small">Learn More</Button></Link>
      </CardActions> */}
    </Card>
    </Link>

    <Card sx={{maxHeight:220, maxWidth: 330 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://images.pexels.com/photos/7298610/pexels-photo-7298610.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lower back Pain
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        
        <Button style={{marginLeft:'90px',marginTop:'-50px'}} size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{maxHeight:220, maxWidth: 330 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://images.pexels.com/photos/20860604/pexels-photo-20860604/free-photo-of-patients-neck-massaged-by-a-physiotherapist.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Neck Pain
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button style={{marginLeft:'90px',marginTop:'-50px'}} size="small">Learn More</Button>
      </CardActions>
    </Card>


      <Card sx={{maxHeight:220, maxWidth: 330 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://images.pexels.com/photos/7298678/pexels-photo-7298678.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Foot and Ankle Pain
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button style={{marginLeft:'90px',marginTop:'-50px'}} size="small">Learn More</Button>
      </CardActions> */}
      </Card>
        </div>
    <Footer/>

    </div>
    </div>
  );
}
