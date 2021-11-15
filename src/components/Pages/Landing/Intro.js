import React from "react"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import { IntroWrapper } from "./landingPage.css"
import Renderer from "../../rich-text-renderers/sample"

const Intro = ({ quoteHeading, quoteText }) => {
  return (
  <SectionContainer marginBottom="xl" width="50%">
      <IntroWrapper>
  {quoteHeading &&   <Heading1 marginBottom="md">{quoteHeading}</Heading1>}
  {quoteText &&      <Renderer node={quoteText} />}
      </IntroWrapper>
    </SectionContainer> 
  ) 
}

export default Intro
