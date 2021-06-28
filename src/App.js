import React, { useState } from 'react'
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar'
import GlobalStyle from './globalStyling';
import { slideDataOne } from './services/SliderData'
import Dropdown from './components/dropdown/Dropdown'
import InfoSection from './components/infosection/InfoSection'
import { InfoData } from './services/InfoData';


function App() {
  const[ isOpen, setIsOpen ] = useState(false);

  const toggle = () => { 
    setIsOpen(!isOpen)
  }



  return (
    <>
      <GlobalStyle/>
        <NavBar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero
        slides={slideDataOne}/>
        <InfoSection {...InfoData}/>
    </>
  );
}

export default App;
