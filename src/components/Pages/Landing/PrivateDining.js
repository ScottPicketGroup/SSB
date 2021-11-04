import React from "react"
import { BC1, Heading3, RedDecorationLink } from "../../StyledComponents/typography.css"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  PrivateDiningImage,
  RenderTextOverHiddenWrapper,
} from "./landingPage.css"
import { getImage } from "gatsby-plugin-image"
import { SectionContainer } from "../../StyledComponents/containers.css"

const PrivateDining = ({
  privateDiningHeading,
  privateDiningImage,
  privateDiningIntro,
}) => {
  return (
    <SectionContainer>
      <PrivateDiningWrapper first="true" dining="true">
        <PrivateDiningImage
          image={getImage(privateDiningImage)}
          alt="private-dining"
          first="true"
        />
        <PrivateDiningTextWrapper dining="true">
          <Heading3 marginBottom="md">{privateDiningHeading}</Heading3>
          <RenderTextOverHiddenWrapper first="true">
            <BC1>{privateDiningIntro}</BC1>
          </RenderTextOverHiddenWrapper>
          <RedDecorationLink to="">
          <BC1>Learn more...&nbsp;&nbsp;</BC1>
          </RedDecorationLink>
        </PrivateDiningTextWrapper>
      </PrivateDiningWrapper>
    </SectionContainer>
  )
}

export default PrivateDining
