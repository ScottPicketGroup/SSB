import React, { useEffect, useRef } from "react"

import { BC1 } from "../../StyledComponents/typography.css"
import {
  WinesByTheGlassWrapper,
  WineSectionWrapper,
  WineSectionItemWrapper,
  WinesByTheGlassContainer,
  ByGlassTitleWrapper,
} from "./DrinksPage.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const WinesByTheGlass = ({ wineByTheGlassMenu }) => {
  const wineData = wineByTheGlassMenu.wineMenuSection

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      { opacity: 1 },
      {
        opacity: 1,

        maxWidth: 10,
        scrollTrigger: {
          trigger: element.querySelector(".menuTop"),
          start: " 25% ",
          end: "36%",

          pin: true,
        },
      }
    )
  }, [])

  return (
    <WinesByTheGlassContainer ref={ref}>
      <WinesByTheGlassWrapper className="first-paragraph">
        {wineData.map((item, index) => (
          <WineSectionWrapper key={index}>
            <BC1 color="black" bold>
              {item.sectionHeadingIeRed}
            </BC1>
            {item.sectionMenuItems.map((i, idx) => (
              <WineSectionItemWrapper key={idx}>
                <BC1 color="black" style={{ width: "50%" }}>
                  {i.producer}
                </BC1>
                <BC1 color="black" style={{ width: "45%" }}>
                  {i.region}
                </BC1>
                <BC1 color="black" style={{ width: "5%" }}>
                  {i.price}
                </BC1>
              </WineSectionItemWrapper>
            ))}
          </WineSectionWrapper>
        ))}
      </WinesByTheGlassWrapper>
      <ByGlassTitleWrapper className="menuTop">
        <BC1 color="red" bold>
          BY THE GLASS
        </BC1>
      </ByGlassTitleWrapper>
    </WinesByTheGlassContainer>
  )
}

export default WinesByTheGlass
