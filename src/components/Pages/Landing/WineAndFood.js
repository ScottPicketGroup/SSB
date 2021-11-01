import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Heading1 } from "../../StyledComponents/typography.css"
import { SectionContainer } from "../../StyledComponents/containers.css"

import { WineAndFoodWrapper } from "./landingPage.css"

const WineAndFood = () => {
  return (
    <SectionContainer marginBottom="xl">
      <WineAndFoodWrapper>
        <Link to="#" style={{ textDecorationColor: "#DC1E28" }}>
          <Heading1 style={{lineHeight: 0.75}}>Wine</Heading1>
        </Link>
        <StaticImage
          src="../../../images/SSB_Flower_Illustration_V01-02.png"
          alt="rose"
        />
        <Link to="#" style={{ textDecorationColor: "#DC1E28" }}>
          <Heading1>Food</Heading1>
        </Link>
      </WineAndFoodWrapper>
    </SectionContainer>
  )
}

export default WineAndFood
