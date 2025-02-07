import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

function BgChanger() {
 

  return (
    <div>
      <Navbar />
      
      {/* Pass the selected image to HeroSection */}
      <HeroSection/>

    </div>
  );
}

export default BgChanger;
