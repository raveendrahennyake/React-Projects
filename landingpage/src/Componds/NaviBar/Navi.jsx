import React from 'react';
import './Navi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Source Image/logo.jpg';
import { Link } from 'react-router-dom';

const Navi = () => {
  return (
    <div>
      <div className='navigatebar'>
        <img className='imagesize' src={logo} alt="logo" />
        
        <ul className='navmenu'>
          <li> <Link to="/">HOME</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/service">SERVICE</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
        </ul>
        <div className='connectbutton'>Connect with me</div>
      </div>
    </div>
  );
}

export default Navi;
