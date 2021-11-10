import React from "react"
import {
  FooterLinksGrid,
  SocialLinks,
  ServiceTime,
  PageLinks,
  Lunch,
  DayWrapper,
  TimeWrapper,
  MobileWrapper,
  MobileSocialWrapper,
  FooterLink,
} from "./Footer.css"
import { FBC1 } from "../StyledComponents/typography.css"
import FacebookIcon from "../Icons/FacebookIcon"
import InstagramIcon from "../Icons/InstagramIcon"
const FooterLinks = () => {
  return (
    <>
      <FooterLinksGrid>
        <PageLinks>
          <FooterLink to="">
            <FBC1 color="white" marginBottom="sm">
              Smith St Bistrot
            </FBC1>
          </FooterLink>
          <FooterLink to="/">
            <FBC1 color="white" marginBottom="sm">
              Home
            </FBC1>
          </FooterLink>
          <FooterLink to="/contact-us">
            <FBC1 color="white" marginBottom="sm">
              Contact
            </FBC1>
          </FooterLink>
          <FooterLink to="/terms-conditions">
            <FBC1 color="white" marginBottom="sm">
              Terms and Conditions
            </FBC1>
          </FooterLink>
        
            <a href="http://www.facebook.com" target="_blank" rel="noreferrer" style={{marginRight: "1rem"}}>
              <FBC1 color="white" marginBottom="sm">
                FaceBook
              </FBC1>
            </a>
            <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
              <FBC1 color="white" marginBottom="sm">
                Instagram
              </FBC1>
            </a>
        
        </PageLinks>
        <ServiceTime>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="xs">
                Lunch
              </FBC1>
              <FBC1 color="white" marginBottom="sm">
                Monday-Friday
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
                Noon - 4.00 pm
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="xs">
                Dinner
              </FBC1>
              <FBC1 color="white" marginBottom="sm">
                Tuesday-Sunday
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
                6 pm - late
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="sm">
                Monday
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
                Closed
              </FBC1>
            </TimeWrapper>
          </Lunch>
        </ServiceTime>
        <PageLinks>
          <FBC1 color="white" marginBottom="xs">
            300 Smith St
          </FBC1>
          <FBC1 color="white" marginBottom="sm">
            Colling Wood VIC 3066
          </FBC1>
          <FBC1 color="white" marginBottom="xs">
            info@smithstbistrot.com.au
          </FBC1>
          <FBC1 color="white" marginBottom="sm">
            03 9419 2202
          </FBC1>
          <FBC1 color="white" marginBottom="sm">
            Scott Pickett Group
          </FBC1>
        </PageLinks>
      </FooterLinksGrid>
      <MobileWrapper>
        <FBC1 color="white" bold>
          LOCATION & CONTACT DETAILS
        </FBC1>

        <MobileSocialWrapper>
          <PageLinks>
            <FBC1 color="white" marginBottom="xs">
              300 Smith St
            </FBC1>
            <FBC1 color="white" marginBottom="sm">
              Colling Wood VIC 3066
            </FBC1>
            <FBC1 color="white" marginBottom="xs">
              info@smithstbistrot.com.au
            </FBC1>
            <FBC1 color="white" marginBottom="sm">
              03 9419 2202
            </FBC1>
            <FBC1 color="white" marginBottom="sm">
              Scott Pickett Group
            </FBC1>
          </PageLinks>
          <SocialLinks>
            <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </SocialLinks>
        </MobileSocialWrapper>
        <ServiceTime>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="xs">
                Lunch
              </FBC1>
              <FBC1 color="white" marginBottom="sm">
                Monday-Friday
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
                Noon - 4.00 pm
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="xs">
                Dinner
              </FBC1>
              <FBC1 color="white" marginBottom="sm">
                Tuesday-Sunday
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
                6 pm - late
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="sm">
                Monday
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
                Closed
              </FBC1>
            </TimeWrapper>
          </Lunch>
        </ServiceTime>
      </MobileWrapper>
    </>
  )
}
export default FooterLinks
