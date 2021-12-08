import React from "react"

import { Heading1 } from "../../StyledComponents/typography.css"
import { IntroWrapper } from "./WhatsOn.css"

const Intro = ({ pageHeading }) => {
  return (
      <IntroWrapper>
        <Heading1>{pageHeading}</Heading1>
      </IntroWrapper>
  )
}

export default Intro
