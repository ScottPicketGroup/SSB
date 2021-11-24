import React from "react"
import { getImage } from "gatsby-plugin-image"

import {
  DesktopContainer,
  MobileContainer,
  SectionContainer,
} from "../../StyledComponents/containers.css"
import { BC2, Heading1, Heading2 } from "../../StyledComponents/typography.css"
import {
  HeroImage,
  HeroTextWrapper,
  HeroWrapper,
  LogoTopTextWrapper,
  LogoBottomTextWrapper,
  MobileLogoBottomTextWrapper,
} from "./landingPage.css"
import LogoIcon from "../../Icons/LogoIcon"

const Hero = ({ heroImage, heroImageTitle }) => {
  return (
    <SectionContainer marginBottom="" full>
      <HeroWrapper>
        <HeroImage image={getImage(heroImage)} layout="fullWidth" alt="hero" />
        <HeroTextWrapper>
          <MobileContainer>
            <Heading2 marginBottom="md">{heroImageTitle}</Heading2>
            <LogoIcon />
          </MobileContainer>
          <DesktopContainer>
            <LogoTopTextWrapper>
              <BC2>300 SMITH STREET</BC2>
              <Heading1>{heroImageTitle}</Heading1>
              <BC2>INFO@SMITHSTBISTROT.COM.AU</BC2>
            </LogoTopTextWrapper>
            <LogoIcon />
            <LogoBottomTextWrapper>
              <Heading1>{"Wine & Food"}</Heading1>
              <Heading1>French etc</Heading1>
            </LogoBottomTextWrapper>
          </DesktopContainer>
        </HeroTextWrapper>
        <MobileContainer>
          <MobileLogoBottomTextWrapper>
            <Heading2>{"Wine & Food"}</Heading2>
            <Heading2>French etc</Heading2>
          </MobileLogoBottomTextWrapper>
        </MobileContainer>
      </HeroWrapper>
    </SectionContainer>
  )
}

export default Hero
