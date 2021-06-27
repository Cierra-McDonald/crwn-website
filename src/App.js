import React from 'react'
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar'
import GlobalStyle from './globalStyling';
import { slideDataOne } from './services/SliderData'


function App() {
  return (
    <>
      <GlobalStyle/>
        <NavBar/>
        <Hero
        slides={slideDataOne}/>
    </>
  );
}

export default App;
