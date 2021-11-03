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
  MobileSocialWrapper
} from "../Footer.css"
import {
  BC1,
  NoneDecorationLink,
} from "../../../StyledComponents/typography.css"
import FacebookIcon from "../../../Icons/FacebookIcon"
import InstagramIcon from "../../../Icons/InstagramIcon"
const FooterLinks = () => {
  return (
    <>
      <FooterLinksGrid>
        <SocialLinks>
          <a href="http://www.facebook.com" target="_blank" rel="no referer">
            <FacebookIcon />
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="no referer">
            <InstagramIcon />
          </a>
        </SocialLinks>
        <PageLinks>
          <NoneDecorationLink>
            <BC1 color="white" marginBottom="sm">
              Smith St Bistrot
            </BC1>
          </NoneDecorationLink>
          <NoneDecorationLink to="/">
            <BC1 color="white" marginBottom="sm">
              Home
            </BC1>
          </NoneDecorationLink>
          <NoneDecorationLink to="/contact-us">
            <BC1 color="white" marginBottom="sm">
              Contact
            </BC1>
          </NoneDecorationLink>
          <NoneDecorationLink to="/terms-conditions">
            <BC1 color="white" marginBottom="sm">
              Terms and Conditions
            </BC1>
          </NoneDecorationLink>
        </PageLinks>
        <ServiceTime>
          <Lunch>
            <DayWrapper>
              <BC1 color="white" marginBottom="xs">
                Lunch
              </BC1>
              <BC1 color="white" marginBottom="sm">
                Monday-Friday
              </BC1>
            </DayWrapper>
            <TimeWrapper>
              <BC1 color="white" marginBottom="sm">
                Noon - 4.00 pm
              </BC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <BC1 color="white" marginBottom="xs">
                Dinner
              </BC1>
              <BC1 color="white" marginBottom="sm">
                Tuesday-Sunday
              </BC1>
            </DayWrapper>
            <TimeWrapper>
              <BC1 color="white" marginBottom="sm">
                6 pm - late
              </BC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <BC1 color="white" marginBottom="sm">
                Monday
              </BC1>
            </DayWrapper>
            <TimeWrapper>
              <BC1 color="white" marginBottom="sm">
                Closed
              </BC1>
            </TimeWrapper>
          </Lunch>
        </ServiceTime>
        <PageLinks>
          <BC1 color="white" marginBottom="xs">
            300 Smith St
          </BC1>
          <BC1 color="white" marginBottom="sm">
            Colling Wood VIC 3066
          </BC1>
          <BC1 color="white" marginBottom="xs">
            info@smithstbistrot.com.au
          </BC1>
          <BC1 color="white" marginBottom="sm">
            03 9419 2202
          </BC1>
          <BC1 color="white" marginBottom="sm">
            Scott Pickett Group
          </BC1>
        </PageLinks>
      </FooterLinksGrid>
      <MobileWrapper>
        <BC1 color="white" bold>
          LOCATION & CONTACT DETAILS
        </BC1>

        <MobileSocialWrapper>
          <PageLinks>
            <BC1 color="white" marginBottom="xs">
              300 Smith St
            </BC1>
            <BC1 color="white" marginBottom="sm">
              Colling Wood VIC 3066
            </BC1>
            <BC1 color="white" marginBottom="xs">
              info@smithstbistrot.com.au
            </BC1>
            <BC1 color="white" marginBottom="sm">
              03 9419 2202
            </BC1>
            <BC1 color="white" marginBottom="sm">
              Scott Pickett Group
            </BC1>
          </PageLinks>
          <SocialLinks>
            <a href="http://www.facebook.com" target="_blank" rel="no referer">
              <FacebookIcon />
            </a>
            <a href="http://www.instagram.com" target="_blank" rel="no referer">
              <InstagramIcon />
            </a>
          </SocialLinks>
        </MobileSocialWrapper>
        <ServiceTime>
          <Lunch>
            <DayWrapper>
              <BC1 color="white" marginBottom="xs">
                Lunch
              </BC1>
              <BC1 color="white" marginBottom="sm">
                Monday-Friday
              </BC1>
            </DayWrapper>
            <TimeWrapper>
              <BC1 color="white" marginBottom="sm">
                Noon - 4.00 pm
              </BC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <BC1 color="white" marginBottom="xs">
                Dinner
              </BC1>
              <BC1 color="white" marginBottom="sm">
                Tuesday-Sunday
              </BC1>
            </DayWrapper>
            <TimeWrapper>
              <BC1 color="white" marginBottom="sm">
                6 pm - late
              </BC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <BC1 color="white" marginBottom="sm">
                Monday
              </BC1>
            </DayWrapper>
            <TimeWrapper>
              <BC1 color="white" marginBottom="sm">
                Closed
              </BC1>
            </TimeWrapper>
          </Lunch>
        </ServiceTime>
      </MobileWrapper>
    </>
  )
}
export default FooterLinks
