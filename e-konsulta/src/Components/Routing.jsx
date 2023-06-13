import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RoutingMenus from './RoutingMenus';
import BabyHealthMonitoring from './BabyHealthMonitoring';
import Cards from '../main/Cards';
import VaccineImmune from './VaccineImmune';
import CareService from './CareService';

export default function Routing() {
  return (
    <BrowserRouter >
      <Routes>
        {/* <Route path="/" element={<RoutingMenus />}/> */}
        <Route index element={<Cards />}/>
        <Route path="/urgent-service" element={<CareService />}/>
        <Route path="/monitoring" element={<BabyHealthMonitoring />}/>
        <Route path="/vaccine" element={<VaccineImmune />}/> 
      </Routes>
    </BrowserRouter>
  )
}
