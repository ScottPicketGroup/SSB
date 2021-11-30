import React, { useRef, useEffect } from "react"
import {
  BC1,
  Heading2,
  RedDecorationLink,
} from "../../StyledComponents/typography.css"
import { ParallaxBanner } from "react-scroll-parallax"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  RenderTextOverHiddenWrapper,
  PrivateDiningImageWrapepr,
  PrivateDiningImage,
  LandingImageWrapper,
} from "./landingPage.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SectionContainer } from "../../StyledComponents/containers.css"
import useScrollPosition from "../../hooks/ScrollPosition"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const PrivateDining = ({
  privateDiningHeading,
  privateDiningImage,
  privateDiningIntro,
}) => {
  const image = getImage(privateDiningImage)

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      { y: 0 },
      {
        y: -50,
        scrollTrigger: {
          trigger: element.querySelector(".first-paragraph"),
          start: " 50% ",
          end: "bottom ",
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <SectionContainer marginBottom="xl">
      <PrivateDiningWrapper first="true" dining="true" ref={ref}>
        <PrivateDiningImageWrapepr>
          <div className="first-paragraph">
            <PrivateDiningImage
              image={getImage(privateDiningImage)}
              alt="private-dining"
              first="true"
            />
          </div>
        </PrivateDiningImageWrapepr>
        <PrivateDiningTextWrapper dining="true">
          <Heading2 marginBottom="md">{privateDiningHeading}</Heading2>
          <RenderTextOverHiddenWrapper first="true">
            <BC1 dangerouslySetInnerHTML={{ __html: privateDiningIntro }} />
          </RenderTextOverHiddenWrapper>
          <RedDecorationLink to="/private-dining">
            <BC1>Learn more…</BC1>
          </RedDecorationLink>
        </PrivateDiningTextWrapper>
      </PrivateDiningWrapper>
    </SectionContainer>
  )
}

export default PrivateDining
