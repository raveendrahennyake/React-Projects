import React from 'react'
import './Body.css'
import profileimage from '../../Source Image/profileimage.jpg'

const Body = () => {
  return (
    <div>
        <div className='bodyconnect'>
            <img id='image1' src= {profileimage}></img>
            <h1>I'm Full Stack Developer In sri Lanka</h1>
            <p>This is my Portfolio website and i'm learning Backend Java,spring,MongoDB and 
            frontend frameworks React</p>
            <p>connect with me</p>
            <p>resume me</p>
            
          
        </div>
        
        
      
    </div>
  )
}

export default Body
