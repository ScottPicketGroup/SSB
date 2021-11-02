import React from "react"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"
import { TSContentWrapper } from "./TermsAndConditions.css"
import Renderer from "../../rich-text-renderers/BlackSample"

const TermsAndConditions = ({ pageHeading, content }) => {
  return (
    <SectionContainer marginTop="xl" column centered full>
        <Heading1 color="black">{pageHeading}</Heading1>
        <TSContentWrapper>
            <Renderer node={content} />
        </TSContentWrapper>
    </SectionContainer>
  )
}

export default TermsAndConditions
