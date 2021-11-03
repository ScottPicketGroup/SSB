import React from "react"

import { Heading1, Heading2 } from "../../StyledComponents/typography.css"
import { IntroWrapper } from "./PrivateDining.css"

const Intro = ({ pageHeading, introduction }) => {
  return (
    <IntroWrapper>
      <Heading1 marginBottom="lg" color="black">{pageHeading}</Heading1>
      <Heading2 color="black">{introduction}</Heading2>
    </IntroWrapper>
  )
}

export default Intro
