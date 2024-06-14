import './App.css';
import Navi from './Componds/NaviBar/Navi';
import Body from './Componds/Body/Body';
import About from './Componds/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Componds/Contact/Contact';
import Service from './Componds/Service/Service';
import Portfolio from './Componds/Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Navi />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
