import React from 'react'
import './Navi.css'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Source Image/logo.jpg'







const Navi = () => {
  return (
    <div>
      <div className='navigatebar'>
        <img className='imagesize' src={logo}></img>
        <ul className='navmenu'>
          <li>HOME</li>
           <li>ABOUT </li>
            <li>CONTACT </li>
             <li>SERVICE</li>
             <li>Portfolio</li>

        </ul>
        <div className='connectbutton'>Conncet with me</div>
       

        
      


      </div>
        
       
      
    </div>
  )
}

export default Navi
