import React, { useState, useRef } from 'react'
import { Button } from '../navbar/NavBarElements'
import { 
    HeroSection,
    HeroWrapper,
    HeroContent, 
    HeroImage, 
    HeroSlide, 
    HeroSlider, 
    Arrow,
    PrevArrow,
    NextArrow, 
    SliderButtons 
} from './HeroElements';
//rafce create a functional component for you!



const Hero = ({ slides }) => {

    const[current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    const nextSlide = () => { 
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current);
    }

    const prevSlide = () => { 
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(current);
    }
    //if there is no data in the slides props... don't do anything
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <HeroSlide key={index}>
                            { index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt}/>
                                    <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p> 
                                    <Button to={slide.path} primary="true"
                                        css={`max-width: 160px`}>
                                        {slide.label}
                                        <Arrow/>
                                    </Button>
                                    </HeroContent>
                                </HeroSlider>
                            )} 
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
      

    
    )
}

export default Hero
