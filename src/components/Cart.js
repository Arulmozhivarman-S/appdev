import React, { useState } from 'react'
import PrimarySearchAppBar from './Navbar'
import Footer from './Footer'

function Cart(props) {


    const [items,setCartItem] =useState(["1 Month"]);

  return (
    <div>
      <PrimarySearchAppBar/>
      <div>
       
            <div>
                <h1>Shopping Cart</h1>
               
                    <ul>
                      <li>Add</li>
                    </ul>
                
            </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Cart
