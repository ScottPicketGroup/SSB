import React from "react"
import { BC1, Heading2, RedDecorationLink } from "../../StyledComponents/typography.css"
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
    <SectionContainer marginBottom="xl">
      <PrivateDiningWrapper first="true" dining="true">
        <PrivateDiningImage
          image={getImage(privateDiningImage)}
          alt="private-dining"
          first="true"
        />
        <PrivateDiningTextWrapper dining="true">
          <Heading2 marginBottom="md">{privateDiningHeading}</Heading2>
          <RenderTextOverHiddenWrapper first="true">
            <BC1 dangerouslySetInnerHTML={{__html: privateDiningIntro}} />
          </RenderTextOverHiddenWrapper>
          <RedDecorationLink to="/private-dining">
          <BC1>Learn more…

          </BC1>
          </RedDecorationLink>
        </PrivateDiningTextWrapper>
      </PrivateDiningWrapper>
    </SectionContainer>
  )
}

export default PrivateDining
