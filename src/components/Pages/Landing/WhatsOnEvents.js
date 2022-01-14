import React, { useRef, useEffect } from "react"
import { SectionContainer } from "../../StyledComponents/containers.css"
import {
  BC1,
  Heading2,
  RedDecorationLink,
} from "../../StyledComponents/typography.css"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  PrivateDiningImage,
  WhatsOnEventsWrapper,
  RenderTextOverHiddenWrapper,
  PrivateDiningImageWrapepr,
} from "./landingPage.css"
import Renderer from "../../rich-text-renderers/WhatsOnLandingRenderer"
import { getImage } from "gatsby-plugin-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const WhatsOnEvents = ({ whatsOnEvents }) => {
  const events = whatsOnEvents.events

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  // useEffect(() => {
  //   const element = ref.current
  //   gsap.set(".first-paragraph", { xPercent: 0, yPercent: 0 })
  //   gsap.fromTo(
  //     element.querySelector(".first-paragraph"),
  //     { css: { scale: 0 } },
  //     {
  //       css: { scaleX: 1.5, scaleY: 1.5 },
  //       scrollTrigger: {
  //         trigger: element.querySelector(".first"),
  //         start: " top ",
  //         end: "bottom ",
  //         scrub: true,
  //         delay: 0.7,
  //       },
  //     }
  //   )
  // }, [])

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
console.log(events)
  return (
    <SectionContainer column="true" mbOnMob="5.5rem" ref={ref} marginBottom="lg">
      {/* <PrivateDiningWrapper first="true" ref={ref}>
        <PrivateDiningTextWrapper first="true">
          <Heading2 marginBottom="md">{events[0].eventTitle}</Heading2>
          <RenderTextOverHiddenWrapper first="true">
            <Renderer node={events[0].eventDescription} />
          </RenderTextOverHiddenWrapper>
          <RedDecorationLink to={`events/${events[0].id}`}>
            <BC1>Learn more…</BC1>
          </RedDecorationLink>
        </PrivateDiningTextWrapper>

        <PrivateDiningImageWrapepr>
          <div className="first-paragraph">
            <PrivateDiningImage
              image={getImage(events[0].eventMenuImage)}
              alt="private-dining"
              first="true"
            />
          </div>
        </PrivateDiningImageWrapepr>
        <PrivateDiningImageWrapepr mobile>
          <div className="mobile-paragraph">
            <PrivateDiningImage
              image={getImage(events[0].eventMenuImage)}
              alt="private-dining"
              first="true"
            />
          </div>
        </PrivateDiningImageWrapepr>
      </PrivateDiningWrapper> */}
      <WhatsOnEventsWrapper>
        {events.map(
          (item, index) =>
            index > -1 && (
              <PrivateDiningWrapper key={index}>
                <PrivateDiningTextWrapper>
                  <Heading2 marginBottom="md">{item.eventTitle}</Heading2>
                  <RenderTextOverHiddenWrapper>
                    <Renderer node={item.eventDescription}/>
                  </RenderTextOverHiddenWrapper>
                  <RedDecorationLink to={`events/${item.id}`}>
                    <BC1 marginBottom="xs">Learn more…</BC1>
                  </RedDecorationLink>
                </PrivateDiningTextWrapper>
                <PrivateDiningImage
                className="first-paragraph"
                  image={getImage(item.eventMenuImage)}
                  alt="private-dining"
                />
              </PrivateDiningWrapper>
            )
        )}
      </WhatsOnEventsWrapper>
    </SectionContainer>
  )
}

export default WhatsOnEvents
