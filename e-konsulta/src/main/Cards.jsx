
import React from 'react';
import UrgentServices from '../Components/UrgentServices';
import BabyHealthMonitoring from '../Components/BabyHealthMonitoring';
import VaccineImmune from '../Components/VaccineImmune';
import BodyServices from './BodyServices';

export default function Cards() {
  

  return (
    <div className='container'>
      <BodyServices />

      <div className="d-flex">
        {/* include grids here */}
        {/* include banner image + slogan here */}
        <UrgentServices />
        <BabyHealthMonitoring />
        <VaccineImmune />
      </div>

    </div>
  )
}
