import React from "react"
import { BC1, Heading2, RedDecorationLink } from "../../StyledComponents/typography.css"
import { ParallaxBanner } from "react-scroll-parallax";
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  RenderTextOverHiddenWrapper,
} from "./landingPage.css"
import { getImage } from "gatsby-plugin-image"
import { SectionContainer } from "../../StyledComponents/containers.css"

const PrivateDining = ({
  privateDiningHeading,
  privateDiningImage,
  privateDiningIntro,
}) => {
  const { images } = getImage(privateDiningImage);

  const layers = [
    {
      image: images.fallback.src,
      amount: 1,
      expanded: false,
    },
  ];
  return (
    <SectionContainer marginBottom="xl">
      <PrivateDiningWrapper first="true" dining="true">
        <ParallaxBanner
          layers={layers}
          style={{ width: "60%" }}
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
