import React from 'react'
import FooterContainer from '../components/footer/FooterContainer'
import Hero from '../components/hero/Hero'
import InfoSection from '../components/infosection/InfoSection'
import { InfoData } from '../services/InfoData';
import { slideDataOne } from '../services/SliderData'



const HomePage = () => {
    return (
        <div>
            <Hero
             slides={slideDataOne}
             />
            <InfoSection {...InfoData}
            />
            <FooterContainer/>
        </div>
    )
}

export default HomePage;
