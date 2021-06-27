import React from 'react'
// import styled, { css } from 'styled-components/macro'
import { HeroSection, HeroWrapper, HeroContent, HeroImage, HeroSlide, HeroSlider, Arrow,
PrevArrow, NextArrow, SliderButtons } from './HeroElements';
import { Button } from '../navbar/NavBarElements'
//rafce create a functional component for you!



const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <HeroSlide key={index}>
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
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow/>
                    <NextArrow/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
