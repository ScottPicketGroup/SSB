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

import { graphql, useStaticQuery } from 'gatsby'

const FooterLinks = () => {
  const footerQuery = useStaticQuery(graphql`
  query footerQuery {
      allContentfulLandingPageContent {
        edges {
          node {
            id
            openingTimesDinnerDaysOpen
            openingTimesDinnerOpenTimes
            openingTimesHeadingDinner
            openingTimesHeadingLunch
            openingTimesLunchDaysOpen
            openingTimesLunchOpenTimes
            phoneNumberFooter
            addressLineOne
            addressLineTwo
            emailFooterInfo
            phoneNumberFooter
            bottomLeftHeading
            daysClosed
            facebookLink
            footerFirstColumnHeading
            instagramLink
          }
        }
      }
    } 
`)
  const footerData = footerQuery.allContentfulLandingPageContent.edges[0].node
  console.log(footerData)
  return (
    <>
      <FooterLinksGrid>
        <PageLinks>
          <FooterLink to="" >
            <FBC1 color="white" marginBottom="sm" style={{textDecoration: 'underline', textUnderlineOffset: `2px`}}>
              {footerData.footerFirstColumnHeading}
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
        
            <a href={footerData.facebookLink} target="_blank" rel="noreferrer" style={{marginRight: "1rem", textDecoration: 'none'}}>
              <FBC1 color="white" marginBottom="sm" style={{}}>
                Facebook
              </FBC1>
            </a>
            <a href={footerData.instagramLink} target="_blank" rel="noreferrer"style={{textDecoration: 'none'}}>
              <FBC1 color="white" marginBottom="sm" >
                Instagram
              </FBC1>
            </a>
        
        </PageLinks>
        <ServiceTime>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="lunch">
               {footerData.openingTimesHeadingLunch}
              </FBC1>
              <FBC1 color="white" marginBottom="">
              {footerData.openingTimesLunchDaysOpen}
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
                {footerData.openingTimesLunchOpenTimes}
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="lunch">
              {footerData.openingTimesHeadingDinner}
              </FBC1>
              <FBC1 color="white" marginBottom="sm">
              {footerData.openingTimesDinnerDaysOpen}
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
              {footerData.openingTimesDinnerOpenTimes}
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="sm">
               {footerData.daysClosed}
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
          <FBC1 color="white" marginBottom="address">
        {footerData.addressLineOne}
          </FBC1>
          <FBC1 color="white" marginBottom="sm">
          {footerData.addressLineTwo}
          </FBC1>
          <FBC1 color="white" marginBottom="address">
          {footerData.emailFooterInfo}
          </FBC1>
          <FBC1 color="white" marginBottom="sm">
          {footerData.phoneNumberFooter}
          </FBC1>
          <FBC1 color="white" marginBottom="sm">
           {footerData.bottomLeftHeading}
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
           {footerData.addressLineOne}
            </FBC1>
            <FBC1 color="white" marginBottom="sm">
            {footerData.addressLineTwo}
            </FBC1>
            <FBC1 color="white" marginBottom="xs">
            {footerData.emailFooterInfo}
            </FBC1>
            <FBC1 color="white" marginBottom="sm">
            {footerData.emailFooterInfo}
            </FBC1>
            <FBC1 color="white" marginBottom="sm">
              Scott Pickett Group
            </FBC1>
          </PageLinks>
          <SocialLinks>
            <a href={footerData.facebookLink} target="_blank" rel="noreferrer" style={{textDecoration: `none`}}>
              <FacebookIcon />hi
            </a>
            <a href={footerData.instagramLink} target="_blank" rel="noreferrer" style={{textDecoration: `none`}}>
              <InstagramIcon />
            </a>
          </SocialLinks>
        </MobileSocialWrapper>
        <ServiceTime>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="xs">
              {footerData.openingTimesHeadingLunch}
              </FBC1>
              <FBC1 color="white" marginBottom="sm">
              {footerData.openingTimesLunchDaysOpen}
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
              {footerData.openingTimesLunchOpenTimes}
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="xs">
              {footerData.openingTimesHeadingDinner}
              </FBC1>
              <FBC1 color="white" marginBottom="sm">
              {footerData.openingTimesDinnerDaysOpen}
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="white" marginBottom="sm">
              {footerData.openingTimesDinnerDaysOpen}
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="white" marginBottom="sm">
              {footerData.daysClosed}
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
