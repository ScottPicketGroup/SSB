import React from "react"
import { BC1, Heading3 } from "../../StyledComponents/typography.css"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  PrivateDiningImage,
  RenderTextOverHiddenWrapper,
} from "./landingPage.css"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { color } from "../../StyledComponents/variables"
import { SectionContainer } from "../../StyledComponents/containers.css"

const PrivateDining = ({
  privateDiningHeading,
  privateDiningImage,
  privateDiningIntro,
}) => {
  return (
    <SectionContainer>
      <PrivateDiningWrapper first={true}>
        <PrivateDiningImage
          image={getImage(privateDiningImage)}
          alt="private-dining"
          first={true}
        />
        <PrivateDiningTextWrapper dining={true}>
          <Heading3 marginBottom="md">{privateDiningHeading}</Heading3>
          <RenderTextOverHiddenWrapper first={true}>
            <BC1>{privateDiningIntro}</BC1>
          </RenderTextOverHiddenWrapper>
          <Link
            to="#"
            style={{
              textDecorationColor: color.PRIMARY_RED_ROUGE,
            }}
          >
            <BC1>Learn more...&nbsp;&nbsp;</BC1>
          </Link>
        </PrivateDiningTextWrapper>
      </PrivateDiningWrapper>
    </SectionContainer>
  )
}

export default PrivateDining
