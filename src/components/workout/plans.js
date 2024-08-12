import React from 'react'
import PrimarySearchAppBar from '../Navbar'
import Footer from '../Footer'
import './plans.css'
import Cart from '../Cart'

function Plans() {
    const a="1 Month plan";
    const b="2 Month plan";
    const c="3 Month plan";

    const handleCart =(e)=>{
        alert("Added to Cart");
           <Cart message={e} />
    }

  return (
    <div>
      <PrimarySearchAppBar/>
      <div className='grid'>
        
        <div className='plan'>
            <blockquote>
                <h2>1 Month Plan</h2>
               <h3 style={{textDecorationLine:'line-through'}}> INR 5,0000</h3>
                <h3>INR 3,000</h3>
                <h3>Save 30% Now</h3>
                <button onClick={()=> handleCart (a) } type='button'>Add to Cart</button>
                </blockquote>
        </div>
        <div className='plan'>
        <blockquote>
                <h2>3 Month Plan</h2>
                
               <h3 style={{textDecorationLine:'line-through'}}> INR 12,0000</h3>
                <h3>INR 6,000</h3>
                <h3>Save 30% Now</h3>
                <button onClick={handleCart} type='button'>Add to Cart</button>
                </blockquote>
        </div>
        <div className='plan'>
        <blockquote>
                <h2>6 Month Plan</h2>
                
               <h3 style={{textDecorationLine:'line-through'}}> INR 22,0000</h3>
                <h3>INR 10,000</h3>
                <h3>Save 30% Now</h3>
                <button onClick={handleCart} type='button'>Add to Cart</button>
                </blockquote>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Plans
