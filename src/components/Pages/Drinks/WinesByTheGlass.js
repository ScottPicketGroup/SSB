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
import { element } from "prop-types"

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
          start: " 20% ",
          end: "47%",
          scrub: 1,
          markers: true,
          // onToggle: self =>{
          //   gsap.set(self.trigger, { autoAlpha: 1 })
          //   gsap.set(element.querySelector(".menuHide"), { autoAlpha: self.isActive ? 0 : 1 })
          // },
          pin: true,
        },
      }
    )

    window.addEventListener('scroll', (e) => {
      if(document.documentElement.scrollTop > 600){
        element.querySelector(".menuTop").style.opacity = "1"
        element.querySelector(".menuHide").style.opacity = "0"
      } else {
        element.querySelector(".menuTop").style.opacity = "0"
        element.querySelector(".menuHide").style.opacity = "1"
      }
    })
  }, [])

  return (
    <WinesByTheGlassContainer ref={ref}>
      <ByGlassTitleWrapper className="menuTop">
        <BC1 color="red" style={{fontSize: "15px", letterSpacing: "-4px"}} bold>
          BY THE GLASS
        </BC1>
      </ByGlassTitleWrapper>
      <WinesByTheGlassWrapper className="first-paragraph">
        <BC1 color="red" className="menuHide" bold>
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
