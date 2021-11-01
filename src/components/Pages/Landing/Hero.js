import React from "react"
import { getImage } from "gatsby-plugin-image"

import {
  DesktopContainer,
  MobileContainer,
  SectionContainer,
} from "../../StyledComponents/containers.css"
import { BC2, Heading1, Heading2 } from "../../StyledComponents/typography.css"
import { HeroImage, HeroTextWrapper, HeroWrapper } from "./landingPage.css"

import LogoIcon from "../../Icons/LogoIcon"

const Hero = ({ heroImage, heroImageTitle }) => {
  return (
    <SectionContainer marginBottom="xl" full>
      <HeroWrapper>
        <HeroImage image={getImage(heroImage)} layout="fullWidth" alt="hero" />
        <HeroTextWrapper>
          <MobileContainer>
            <Heading2 marginBottom="md">{heroImageTitle}</Heading2>
            <LogoIcon />
          </MobileContainer>
          <DesktopContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "3rem",
              }}
            >
              <BC2>300 SMITH STREET</BC2>
              <Heading1>{heroImageTitle}</Heading1>
              <BC2>INFO@SMITHSTBISTROT.COM.AU</BC2>
            </div>
            <LogoIcon />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Heading1>{"Wine & Food"}</Heading1>
              <Heading1>French etc</Heading1>
            </div>
          </DesktopContainer>
        </HeroTextWrapper>
        <MobileContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              bottom: "1rem",
              width: "96%",
              left: "2%",
            }}
          >
            <Heading2>{"Wine & Food"}</Heading2>
            <Heading2>French etc</Heading2>
          </div>
        </MobileContainer>
      </HeroWrapper>
    </SectionContainer>
  )
}

export default Hero
