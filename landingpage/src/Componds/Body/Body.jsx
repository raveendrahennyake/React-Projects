import React from 'react'
import './Body.css'
import profileimage from '../../Source Image/profileimage.jpg'

const Body = () => {
  return (
    <div>
        <div className='bodyconnect'>
            <img id='image1' src= {profileimage}></img>
            <h1><span>I'm Full Stack Developer In sri Lanka</span></h1>
            <p id='text1'> is my Portfolio website and i'm learning Backend Java,spring,MongoDB and 
            frontend frameworks React</p>
            <div className='footer'>
              <p id='text2'> with me</p>
              <p id='text3'> resume me</p>

            </div>
            
            
          
        </div>
        
        
      
    </div>
  )
}

export default Body
