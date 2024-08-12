import React from 'react'
import PrimarySearchAppBar from '../Navbar'
import Footer from '../Footer'
import './Elbow.css'

function Elbow() {
  return (
    <div>
        <PrimarySearchAppBar/>
        <div className='maincontent'>
            <blockquote>

                <h1>Tennis Elbow: Symptoms, Causes and Cure</h1>
                <p>Tennis elbow, a condition medically referred to as lateral epicondylitis is much more common that you may think. Associated with the sport of Tennis, it can occur to anyone playing or not playing Tennis. This post gives you a brief overview of what you may want to know about Tennis Elbow and its treatment.</p>
            </blockquote>
            <blockquote>
                 <h2>What is Tennis Elbow ?</h2>
                 <p>Tennis elbow is a condition that causes pain around the outside of the elbow. Clinically known as lateral epicondylitis, Tennis elbow is a painful condition that occurs when tendons in your elbow are overloaded, usually by repetitive movements of forearm, arm or wrist. Despite the name, athletes are not the only people who suffer but also people with repetitive hand movements such as plumbers, carpenters, butchers or house maids are the ones who commonly suffer from tennis elbow.
                 </p>
            </blockquote>
            <blockquote>
                <h2>What are the symptoms of Tennis Elbow?</h2>
                <p>The pain of tennis elbow can range from mild discomfort while using your elbow, to severe pain that can be felt when your elbow is still.
                    If you have tennis elbow, you will usually experience:</p>
                    <ul>
                        <li>Pain, tenderness and swelling around the elbow.</li>
                        <li>Pain flows right from the bony bump of the elbow into the forearm or wrist.</li>
                        <li>Pain or burning sensation on the outer part of the elbow.</li>
                        <li>Shooting or intense pain especially when moving the arm particularly for twisting</li>
                        <li>Trouble moving the wrist normally and stretching the hand.</li>
                        <li>Pain when picking things up, gripping objects, typing on a computer and putting pressure on the lower arms in other ways.</li>
                    </ul>
            </blockquote>
            <div className='causes'>
                <div className='content' >
                    <blockquote><h2>What are the Causes of Tennis Elbow?</h2>
                    <p>The elbow joint is surrounded by muscles that move your elbow, wrist and fingers. The tendons in your elbow join the bones and muscles together, and control the muscles of your forearm.

                    Tennis elbow is usually caused by overusing the muscles attached to your elbow and used to straighten your wrist. If the muscles and tendons are strained, tiny tears and inflammation can develop near the bony lump (the lateral epicondyle) on the outside of your elbow.</p>
                    </blockquote>
                </div>
                <div className='contentimg'>
                    <blockquote >
                        <img style={{width:'300px',height:'200px'}}  src="data:image/jpeg;base64,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" />
                    </blockquote>
                </div>
            </div>
            <blockquote>
                <h2>What are the Treatment options for Tennis Elbow?</h2>
                <ul>
                    <li>
                        <b>Measures for immediate pain relief</b>
                        <p>
                        Rest : It is important to stop using the injured arm and give it some rest </p>
                       <p> RICE : Holding a cold compress, such as a bag of frozen peas wrapped in a towel, against your elbow for a few minutes several times a day can help ease the pain. Read more to know about RICE protocol.</p>
                        <p>Elbow Support : Using a brace, band or strap to support the elbow may help alleviate the pain to a large extent. But it is important to identify the right size and type for your elbow. Read more about using braces and band for treating Tennis elbow
                        If pain persists then you may look at the next line of treatment.</p>
                       
                    </li>
                    <li><b>Physiotherapy</b> <p>is recommended in more severe and persistent cases. Massaging and manipulating the affected area may help relieve the pain and stiffness, and improve the range of movement in your arm. Read more about Physiotherapy best treatment for pain relief.</p></li>
                    <li><b>Surgery</b> <p>may be used as a last resort to remove the damaged part of the tendon.</p>
                    </li>
                </ul>
            </blockquote>
        </div>

        <Footer/>
      
    </div>
  )
}

export default Elbow