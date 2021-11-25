import React from "react"
import { getImage } from "gatsby-plugin-image"
import { Parallax } from 'react-scroll-parallax';
import {
  DesktopContainer,
  MobileContainer,
  SectionContainer,
} from "../../StyledComponents/containers.css"
import { BC1, BC2, Heading1, Heading2 } from "../../StyledComponents/typography.css"
import {
  HeroImage,
  HeroTextWrapper,
  HeroWrapper,
  LogoTopTextWrapper,
  LogoBottomTextWrapper,
  MobileLogoBottomTextWrapper,
} from "./landingPage.css"
import LogoIcon from "../../Icons/LogoIcon"

const Hero = ({ heroImage, heroImageTitle, heroTopCenterText, heroAddress }) => {
  return (
    <SectionContainer marginBottom="" full>
      <HeroWrapper>
      <Parallax key={1} y={[20, -20 ]}>
        <HeroImage image={getImage(heroImage)} layout="fullWidth" alt="hero" />
        </Parallax>
        <HeroTextWrapper>
          <MobileContainer>
            <Heading2 marginBottom="md">{heroImageTitle}</Heading2>
            <LogoIcon />
          </MobileContainer>
          <DesktopContainer>
            <LogoTopTextWrapper>
              <BC1>{heroAddress}</BC1>
              <Heading1>{heroTopCenterText}</Heading1>
              <BC1>INFO@SMITHSTBISTROT.COM.AU</BC1>
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
