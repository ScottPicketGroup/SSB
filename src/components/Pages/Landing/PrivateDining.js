import React from "react"
import { BC1, Heading3 } from "../../StyledComponents/typography.css"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  PrivateDiningImage,
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
      <PrivateDiningWrapper>
        <PrivateDiningImage
          image={getImage(privateDiningImage)}
          alt="private-dining"
        />
        <PrivateDiningTextWrapper>
          <Heading3 marginBottom="sm">{privateDiningHeading}</Heading3>
          <BC1 marginBottom="sm">{privateDiningIntro}</BC1>
          <Link
            to="#"
            style={{
              marginTop: "0.75rem",
              textDecorationColor: color.PRIMARY_RED_ROUGE,
            }}
          >
            <BC1>Learn more...</BC1>
          </Link>
        </PrivateDiningTextWrapper>
      </PrivateDiningWrapper>
    </SectionContainer>
  )
}

export default PrivateDining
