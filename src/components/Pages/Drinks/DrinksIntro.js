import React from "react"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import { DrinksIntroWrapper } from "./DrinksPage.css"

const DrinksIntro = ({ pageTitle }) => {
  return (
    <SectionContainer
      marginBottom="lg"
      width="40%"
      centered={true}
    >
      <DrinksIntroWrapper>
        <Heading1 color="black">{pageTitle}</Heading1>
      </DrinksIntroWrapper>
    </SectionContainer>
  )
}

export default DrinksIntro
