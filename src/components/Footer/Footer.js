import React from 'react'
import { FooterWrapper } from './Footer.css'
import FooterItems from './FooterItems'
import LogoSlider from './LogoSlider'
import FooterForm from './FooterForm'


const Footer = () => {
  
    return (
        <FooterWrapper >
            <FooterForm />
            <LogoSlider />
         
            <FooterItems />
        </FooterWrapper>
    )
}

export default Footer
