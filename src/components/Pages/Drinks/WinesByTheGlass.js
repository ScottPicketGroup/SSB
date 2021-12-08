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

    gsap.to(
      element.querySelector(".menuSide"),
      
      {
        autoAlpha: 1,
        maxWidth: 10,
        scrollTrigger: {
          trigger: element,
          start: "top 60% ",
          end: "top 35%",
          scrub: 0,
        },
      }
    )
    gsap.to(
      element.querySelector(".menuTop"),
      
      {
        autoAlpha: 0,
        maxWidth: 10,
        scrollTrigger: {
          trigger: element,
          start: "top 65% ",
          end: "top 50%",
          scrub: 0,
         
        },
      }
    )
    ScrollTrigger.create({
      trigger: element.querySelector(".menuSide"),
      start: "top 65%",
      endTrigger: element,
      end: "bottom bottom",
      scrub: 1,
      pin: true,
    })

   
  }, [])

  return (
    <WinesByTheGlassContainer ref={ref}>
      <ByGlassTitleWrapper className="menuSide">
        <BC1
          color="red"
          style={{ fontSize: "15px", letterSpacing: "-4px", marginTop: "1.5rem" }}
          bold
        >
          BY THE GLASS
        </BC1>
      </ByGlassTitleWrapper>
      <WinesByTheGlassWrapper className="first-paragraph">
        <BC1 color="red" className="menuTop" bold>
          BY THE GLASS
        </BC1>
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
    </WinesByTheGlassContainer>
  )
}

export default WinesByTheGlass
