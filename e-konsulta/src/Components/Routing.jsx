import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CareServices from './CareService';
import Home from './Banner';
import About from './pages/About';
import Navbar from './Navbar';
import Contact from './pages/Contact';
import HealthMonitoring from './HealthMonitoring';
import Immunity from './Imunity';
import Banner from './Banner';
// import SuccessMessage from './SuccessMessage';

export default function Routing() {
  return (
  
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home"/>}/>
          <Route exact path="/Home" element={<Home />}/>
          <Route exact path="/About" element={<About />}/>
          <Route exact path="/Contact" element={<Contact />}/>
          <Route exact path="/urgent-service" element={<CareServices />}/>
          <Route exact path="/health-monitoring" element={<HealthMonitoring />} />
          <Route exact path="/vaccine" element={<Immunity />}/>
        </Routes>
      </Router>
  )
}
