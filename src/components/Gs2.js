import React from 'react'
import './Gs2.css'
import { Button } from 'react-bootstrap'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Gs2() {
  return (
    <div className='overalldiv'>
      <div className='nav'>
        <AccountCircleIcon style={{float:'right',margin:'20px',marginLeft:'30px',width:'30px',height:'30px'}}/>
      </div>
        <div className='top'>
          <h1>Welcome to</h1>
          <h2 style={{color:'#9CA986'}}>Pure balance</h2>
          <h3>We care about your health!!!</h3>
        </div>
        <div className='mid'>
            <div  className='imgdiv1'></div>
            <div  className='imgdiv2'></div>
            <div  className='imgdiv3'></div>
        </div>
        <div className='foot'>
            <Button variant='primary'> <b><a style={{textDecoration:'none',color:'white'}} href="/login">Get Started</a></b> </Button>
        </div>
      
    </div>
  )
}

export default Gs2
