import React from 'react'
import { FooterItemsWrapper, FooterWrapper } from './Footer.css'
import FooterLinks from './FooterLinks'

const FooterItems = () => {
    return (
        <FooterWrapper>
           <FooterItemsWrapper>
               <FooterLinks />
           </FooterItemsWrapper>
        </FooterWrapper>
    )
}

export default FooterItems
