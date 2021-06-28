import React from 'react'
import Footer from './Footer'

import { FiTwitter, FiInstagram, FiGithub} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'


const FooterContainer = () => {
    return (
        <Footer>
           <Footer.Wrapper>
               <Footer.Row>
               <Footer.Column>
                   <Footer.Title>About Us</Footer.Title>
                   <Footer.Link href="#">Story</Footer.Link>
                   <Footer.Link href="#">Clients</Footer.Link>
                   <Footer.Link href="#">Testimonials</Footer.Link>
               </Footer.Column>
               <Footer.Column>
                   <Footer.Title>Services</Footer.Title>
                   <Footer.Link href="#">Marketing</Footer.Link>
                   <Footer.Link href="#">Consulting</Footer.Link>
                   <Footer.Link href="#">Development</Footer.Link>
               </Footer.Column>
               <Footer.Column>
                   <Footer.Title>Contact Us</Footer.Title>
                   <Footer.Link href="#">United States</Footer.Link>
                   <Footer.Link href="#">Jamaica</Footer.Link>
                   <Footer.Link href="#">Support</Footer.Link>
               </Footer.Column>
               <Footer.Column>
                   <Footer.Title>Social</Footer.Title>
                   <Footer.Link href="#"><FiInstagram/> Instagram</Footer.Link>
                   <Footer.Link href='https://twitter.com/cierralaurenn'><FiTwitter/>  Twitter</Footer.Link>
                   <Footer.Link href='https://github.com/Cierra-McDonald'><FiGithub/>  Github</Footer.Link>
                   <Footer.Link href='https://www.linkedin.com/in/cierra-mcdonald/'><AiOutlineLinkedin/>  LinkedIn</Footer.Link>
               </Footer.Column>
               </Footer.Row>
           </Footer.Wrapper> 
        </Footer>
    )
}

export default FooterContainer;
