import React from "react"
import { Link } from "gatsby"
import { Heading2 } from "../../StyledComponents/typography.css"
import { SectionContainer } from "../../StyledComponents/containers.css"

import { WineAndFoodWrapper } from "./landingPage.css"

const WineAndFood = () => {
  return (
    <SectionContainer marginBottom="xl" full>
      <WineAndFoodWrapper>
        <Link to="/wine" style={{ textDecoration: "none" }}>
          <Heading2 style={{ lineHeight: 1.5, borderBottom: "1.5px solid" }}>Wine</Heading2>
        </Link>

        <Link to="/food" style={{ textDecoration: "none" }}>
          <Heading2 style={{ lineHeight: 1.5, borderBottom: "1.5px solid" }}>Food</Heading2>
        </Link>
      </WineAndFoodWrapper>
    </SectionContainer>
  )
}

export default WineAndFood
