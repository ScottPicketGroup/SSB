import React, { useRef, useEffect } from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"

import { WhatsOnEventsWrapper } from "./landingPage.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import DualElements from "./WhatsOnSections/DualElements"
import MultiElements from "./WhatsOnSections/MultiElements"
const WhatsOnEvents = ({ whatsOnEvents }) => {
  const ref = useRef(null)
  const events = whatsOnEvents.events

  gsap.registerPlugin(ScrollTrigger)
 
  useEffect(() => {
    const element = ref.current
    gsap.set(".mobile-paragraph", { xPercent: 0, yPercent: 0 })
    gsap.fromTo(
      element.querySelector(".mobile-paragraph"),
      { css: { scale: 1 } },
      {
        css: { scaleX: 3, scaleY: 3 },
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: " top ",
          end: "bottom ",
          scrub: true,
          delay: 0.7,
        },
      }
    )
  }, [])

  return (
    <SectionContainer
      column="true"
      mbOnMob="5.5rem"
      ref={ref}
      marginBottom="lg"
    >
      <WhatsOnEventsWrapper>
        {/* {events.length === 2 ? (
          <DualElements events={events} />
        ) : (
          <MultiElements events={events} />
        )} */}
      </WhatsOnEventsWrapper>
    </SectionContainer>
  )
}

export default WhatsOnEvents
