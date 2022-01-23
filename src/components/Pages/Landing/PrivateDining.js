import React, { useRef, useEffect } from "react"
import {
  BC1,
  Heading2,
  RedDecorationLink,
} from "../../StyledComponents/typography.css"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  RenderTextOverHiddenWrapper,
  PrivateDiningImageWrapepr,
  PrivateDiningImage,
} from "./landingPage.css"
import { getImage } from "gatsby-plugin-image"
import { SectionContainer } from "../../StyledComponents/containers.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const PrivateDining = ({
  privateDiningHeading,
  privateDiningImage,
  privateDiningIntro,
}) => {

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

  useEffect(() => {
    const element = ref.current

    gsap.fromTo(
      element.querySelector(".mobile-paragraph"),
      { y: 0 },
      {
        y: -50,
        scrollTrigger: {
          trigger: element.querySelector(".mobile-paragraph"),
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
        <PrivateDiningImageWrapepr mobile>
          <div className="mobile-paragraph">
            <PrivateDiningImage
              image={getImage(privateDiningImage)}
              alt="private-dining"
              first="true"
              
            />
          </div>
        </PrivateDiningImageWrapepr>
        <PrivateDiningTextWrapper dining="true">
          <Heading2 marginBottom="md">{privateDiningHeading}</Heading2>
          <RenderTextOverHiddenWrapper privateDining={true}>
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
