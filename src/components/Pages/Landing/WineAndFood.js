import React from "react"
import { Link } from "gatsby"
import { BBHeading2 } from "../../StyledComponents/typography.css"
import { SectionContainer } from "../../StyledComponents/containers.css"

import { WineAndFoodWrapper } from "./landingPage.css"

const WineAndFood = () => {
  return (
    <SectionContainer marginBottom="xl" full>
      <WineAndFoodWrapper>
        <Link to="/wine" style={{ textDecoration: "none" }}>
          <BBHeading2>Wine</BBHeading2>
        </Link>

        <Link to="/food" style={{ textDecoration: "none" }}>
          <BBHeading2>Food</BBHeading2>
        </Link>
      </WineAndFoodWrapper>
    </SectionContainer>
  )
}

export default WineAndFood
