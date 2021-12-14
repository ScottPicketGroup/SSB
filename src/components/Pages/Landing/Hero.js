import React from "react"
import { getImage } from "gatsby-plugin-image"
import {
  DesktopContainer,
  MobileContainer,
} from "../../StyledComponents/containers.css"
import { BC1, Heading1, Heading2 } from "../../StyledComponents/typography.css"
import {
  HeroTextWrapper,
  HeroWrapper,
  LogoTopTextWrapper,
  LogoBottomTextWrapper,
  MobileLogoBottomTextWrapper,
  HeroImage,
  LandingHeroContainer,
} from "./landingPage.css"
import LogoIcon from "../../Icons/LogoIcon"

const Hero = ({
  heroImage,
  heroImageTitle,
  heroTopCenterText,
  heroAddress,
}) => {
  return (
    <LandingHeroContainer marginBottom="" full>
      <HeroWrapper>
        <HeroImage image={getImage(heroImage)} layout="fullWidth" alt="hero" />
        <HeroTextWrapper>
          <MobileContainer>
            <Heading2 marginBottom="md" mbOnMob="1.75rem">{heroImageTitle}</Heading2>
            <LogoIcon />
          </MobileContainer>
          <DesktopContainer>
            <LogoTopTextWrapper>
              <BC1>{heroAddress.toUpperCase()}</BC1>
              <Heading1>{heroTopCenterText}</Heading1>
              <BC1>
                <a
                  href="mailto: INFO@SMITHSTBISTROT.COM.AU"
                  rel="noreferrer"
                  style={{ textDecoration: `none`, color: `inherit` }}
                >
                  INFO@SMITHSTBISTROT.COM.AU
                </a>
              </BC1>
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
    </LandingHeroContainer>
  )
}

export default Hero
