import React from 'react'
import PrimarySearchAppBar from '../Navbar'
import Footer from '../Footer'
import './Smoothie.css'
function Smoothie() {
  return (
    <div>
        <PrimarySearchAppBar/>
        <div className='main'>
          <div className='content'>
                 <div > <h1 style={{margin:'50px auto',paddingLeft:'40px'}}>Green Detox Smoothie</h1></div>
                 <div>
                  {/* <hr style={{width:'100%',height:'5px',backgroundColor:'red',border:'none',outline:'none',borderRadius:'5px'}}/> */}
                  <blockquote><p>This refreshing green detox smoothie is packed with hydrating fruit and veggies including fresh mint, apple, lemon, baby spinach and a whole heart of romaine. It’s detoxifying and will truly help you glow from the inside out! </p></blockquote>
                  <blockquote>Without fail, everyone seems to reset and restart their health goals when January rolls around. Myself included! I love setting goals and intentions for the year ahead and those usually include some healthy eating goals.</blockquote>
                  <blockquote>Whether you’re trying to get more veggies in, eat healthier or just want a refreshing smoothie for breakfast or snack, this recipe is for you!</blockquote>
                 </div>
                 <div></div>
                 <div>
                  <blockquote><img style={{width:'100%',height:'900px'}} src='https://www.eatingbirdfood.com/wp-content/uploads/2021/12/Green-Detox-Smoothie-Ingredients-min-633x950.jpg'/></blockquote>
                 </div>
                 
                 <div>
                    <blockquote><h1>How to Make Green Detox Smoothie</h1>
                    <p>While there is a bit of cook time, this recipe is so easy to whip up in one bowl. Here’s the process:</p>
                    <p>Step 1: Preheat your oven to 375° F and spray an 8×8 inch square baking dish with cooking spray.</p>
                    <p>Step 2: In a large bowl, mix together the oats, baking powder, cinnamon and salt. Add in the milk, maple syrup, egg, coconut oil, vanilla and bananas. Stir to combine.</p>
                    <p>Step 3: Add in 1 cup of chopped pecans to the oat mixture and mix to combine. Carefully pour the oatmeal mixture into the prepared baking dish and scatter the remaining pecans on top.</p>
                    <p>Step 4: Placed oatmeal in the oven and bake for 35-40 minutes, until the top is nicely golden and a toothpick comes out clean.</p>
                    <p>Step 5: Remove from the oven and let cool for a few minutes. Portion into 6 slices and serve. I love serving it with fresh berries and a drizzle of nut butter, but you can also drizzle on a little maple syrup if you want it a bit sweeter.</p>
                    </blockquote>
                 </div>


          </div>
          <div className='imgcontent'>
            <div>
              
             <blockquote> <video width="400" height="300" controls>
                <source src="https://videos.pexels.com/video-files/6975626/uhd_25fps.mp4" type="video/mp4"/>
                </video></blockquote>
            </div>
            <div>
            <div style={{margin:'30px auto'}}>
                   <blockquote> <h1 >Ingredients Needed</h1>
                    <ul>
                      <li>
                        <b>romaine heart – </b>
                        <p>a rising agent that helps lighten the texture of the baked oatmeal. It prevents it from becoming too dense or heavy.</p>
                      </li>
                      <li>
                      <b>baby spinach</b> – 
                      <p>cinnamon is the perfect warming spice for oatmeal, but you can also add more spices if you’d love. Ginger and nutmeg would be nice additions.</p>
                      </li>
                      <li><b>banana </b> – 
                      <p>to bring all of the flavors together.</p></li>
                      <li><b>apple</b> – <p>any dairy-free milk works, but I like to use unsweetened vanilla almond milk. Dairy based milk works too if that’s what you have on hand</p></li>
                      <li><b>lemon</b> – 
                      <p>pure maple syrup is the perfect natural sweetener to use in my opinion! If you don’t have maple syrup you can use honey, agave, monk fruit maple or your preferred sweetener.</p>
                      </li>
                      <li><b>fresh ginger</b> – 
                      <p>this helps bind everything together. You can use a regular egg or ground flaxseed. If you’re using the flaxseed, no need to make a flax egg with water, you can just mix the ground flaxseed directly in with the rest of your ingredients.
                        </p>
                      </li>
                      <li><b>fresh mint  –</b><p>  I used chopped pecans as the mix-in and topping for this recipe, which adds healthy fats, texture and protein. Feel free to use your favorite variety of nuts. Any will work!</p></li>
                      <li> <b>chia seeds  –</b><p>  sliced ripe bananas will act as a binding agent while providing plenty of sweetness. You can also use 1/2 cup applesauce instead of the bananas if you prefer.</p></li>
                      
                    </ul></blockquote>
                 </div>
                 <div>
                    <img style={{marginLeft:'30px'}} src='https://www.eatingbirdfood.com/wp-content/uploads/2021/12/green-detox-smoothie-hero-400x600.jpg'/>
                 </div>
            </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Smoothie
