import React from "react"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import { FoodIntroWrapper } from "./FoodPage.css"

const Intro = ({ pageTitle }) => {
  return (
    <SectionContainer
      marginBottom="lg"
      width="40%"
      centered={true}
      red={true}
    >
      <FoodIntroWrapper>
        <Heading1 color="white">{pageTitle}</Heading1>
      </FoodIntroWrapper>
    </SectionContainer>
  )
}

export default Intro
