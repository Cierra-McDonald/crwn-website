import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from '../navbar/NavBarElements';
import { Container, Section, ColumnLeft, ColumnRight } from './InfoSectionElements'

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    let history = useHistory();

    const handleClick = () => { 
        console.log('in the button here!')
        history.push('/products')
    }

    return (
      
          <Section>
              <Container>
                  <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/products' primary="true" onClick={handleClick}>{buttonLabel}</Button>
                  </ColumnLeft>
                  <ColumnRight reverse={reverse}>
                  <img src={image} alt="product"/>
                  </ColumnRight>
              </Container>
          </Section>

    )
}

export default InfoSection
