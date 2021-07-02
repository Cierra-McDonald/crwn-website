//rafce create a functional component for you!
import React, { useState, useRef, useEffect } from 'react'
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



const Hero = ({ slides }) => {

    const[current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // useEffect(() => { 
    //     const nextSlide = () => { 
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1));
    //     }
    //     timeout.current = setTimeout(nextSlide, 4000)

    //     return function() { 
    //         if (timeout.current) { 
    //             clearTimeout(timeout.current)
    //         }
    //     };

    // }, [current, length]
    // );

    const nextSlide = () => { 
        if (timeout.current) { 
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current);
    }

    const prevSlide = () => { 
        if (timeout.current) { 
            clearTimeout(timeout.current)
        }
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
                                        css={`max-width: 160px`}
                                        onClick={console.log('in the on!')}>
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
