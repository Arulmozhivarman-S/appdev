import React from 'react'
import './Midportion.css'
function Midportion() {
  return (
    <div>
        <div className='newsletter'>
            <br/>
                <h1 style={{color:'#627254'}}>Grab Our Newsletter</h1>
                <h3>Subscribe today for our exclusive offers, latest news and updates about health care programs.</h3>
                <div>
                    <input style={{width:'300px'}} placeholder=' Enter your email' type='email'/>
                    <button type='button' style={{backgroundColor:'#627254'}}>Subscribe</button>
                </div>
        </div>
    </div>
  )
}

export default Midportion
