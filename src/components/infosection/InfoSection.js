import React from 'react'
import { Button } from '../navbar/NavBarElements'
import { Container, Section, ColumnLeft, ColumnRight } from './InfoSectionElements'

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
      
          <Section>
              <Container>
                  <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/products' primary="true">{buttonLabel}</Button>
                  </ColumnLeft>
                  <ColumnRight reverse={reverse}>
                  <img src={image} alt="product"/>
                  </ColumnRight>
              </Container>
          </Section>

    )
}

export default InfoSection
