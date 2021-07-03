import React from 'react'
import { Header, AboutWrapper, AboutContent, Me, ProfileImage, Title } from './AboutElements'

const About = () => {
    return (
        <AboutWrapper>
            <Header>About Us</Header>
            <ProfileImage/>
            <Me>
                Hi, my name is Cierra McDonald.
            </Me>
            <Title>Creator of CRWN</Title>
            <AboutContent>
                Enim ut fugiat sunt elit eiusmod et commodo commodo proident laboris.
                Elit tempor proident qui officia minim elit aliqua fugiat
                eu veniam Lorem in.
                Magna proident ut dolore id minim veniam enim adipisicing
                aute officia reprehenderit ipsum. Ut id ut exercitation
                culpa voluptate amet Lorem non. Duis commodo est cillum
                adipisicing anim consequat ea ex officia tempor velit.
            </AboutContent>
            <AboutContent>
            Nostrud non tempor commodo reprehenderit incididunt veniam 
            ullamco reprehenderit aliqua voluptate ullamco fugiat 
            cupidatat exercitation. Anim consequat et nisi veniam 
            consequat aliqua. Excepteur incididunt et ad do mollit 
            proident nostrud fugiat elit labore cillum exercitation nisi. 
            Cillum fugiat id culpa ea quis commodo ipsum cupidatat excepteur 
            velit commodo officia. Adipisicing ut pariatur anim velit culpa et labore.
            </AboutContent>
        </AboutWrapper>
    )
}

export default About
