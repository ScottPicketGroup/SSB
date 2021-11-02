import React from "react"
import {
  BBHeading2,
  NoneDecorationLink,
} from "../../StyledComponents/typography.css"
import { SectionContainer } from "../../StyledComponents/containers.css"

import { WineAndFoodWrapper } from "./landingPage.css"

const WineAndFood = () => {
  return (
    <SectionContainer marginBottom="xl" full>
      <WineAndFoodWrapper>
        <NoneDecorationLink to="/wine">
          <BBHeading2>Wine</BBHeading2>
        </NoneDecorationLink>
        <NoneDecorationLink to="/food">
          <BBHeading2>Food</BBHeading2>
        </NoneDecorationLink>
      </WineAndFoodWrapper>
    </SectionContainer>
  )
}

export default WineAndFood
