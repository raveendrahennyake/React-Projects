import React from 'react'
import './About.css'
import aboutpage from '../../Source Image/aboutpage.jpg'



const About = () => {
  return (
    <div>
        <div className='aboutpage'>
          <h1>About Me</h1>
          <div className='documents'>
              <div className='aboutimage'>  
                <img src= {aboutpage} alt=''></img>
               </div>
               <div className='newone'>
                  <div className='paragraph'>
                   <p>
                    Hi, I'm Tom David from Sri Lanka. I am a Full Stack Developer specializing in front-end web development using HTML, CSS, JavaScript, Bootstrap, and Node.js. I am confident in my ability to contribute effectively to your team.</p>
                  </div>
                  
                    <div className='skills'>
                      <div className='skil'> <h4>HTM & CSS</h4> <hr id='linera' style={{width:"25%"}} /></div>
                      <div className='skil'> <h4>JavaScript</h4><hr style={{width:"20%"}} /></div>
                      <div className='skil'> <h4>React Js</h4><hr style={{width:"20%"}} /></div>
                      <div className='skil'> <h4>SpringBoots</h4><hr style={{width:"25%"}} /></div>
                      <div className='skil'> <h4>Java</h4><hr style={{width:"20%"}} /></div>
                      <div className='skil'> <h4>Node Js</h4><hr style={{width:"10%"}} /></div>
                      
                      <div className='skil'> <h4>MySql & Mongodb</h4><hr style={{width:"20%"}} /></div>
                      
                      
                      

                    </div>


                </div>

                

          </div>

        </div>
      
    </div>
  )
}

export default About
