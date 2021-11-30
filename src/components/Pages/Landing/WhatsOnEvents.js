import React, { useRef, useState, useEffect } from "react"
import { Parallax, Background } from 'react-parallax';
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
  LandingImageWrapper,
  WhatsOnEventsWrapper,
  RenderTextOverHiddenWrapper,
  PrivateDiningImageWrapepr,
} from "./landingPage.css"
import Renderer from "../../rich-text-renderers/sample"
import { getImage } from "gatsby-plugin-image"
import useWindowSize from "../../hooks/useWindowSize"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatsOnEvents = ({ whatsOnEvents }) => {
  const events = whatsOnEvents.events
  const image = getImage(events[0].eventMenuImage)


  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.set(".first-paragraph", {xPercent: 0, yPercent: 0})
    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      {css:{scale: 0}},
      {
        
        css:{scaleX:1.5, scaleY: 1.5, },
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: " top ",
          end: "bottom ",
          scrub:true,
         delay: 0.7
        },
      }
    );



  }, []);
 
  return (
  
    <SectionContainer column="true">

      <PrivateDiningWrapper first="true" ref={ref}>
        <PrivateDiningTextWrapper first="true">
          <Heading2 marginBottom="md">{events[0].eventTitle}</Heading2>
          <RenderTextOverHiddenWrapper first="true">
            <Renderer node={events[0].eventDescription} />
          </RenderTextOverHiddenWrapper>
          <RedDecorationLink to={`events/${events[0].id}`}>
            <BC1>Learn more…</BC1>
          </RedDecorationLink>
        </PrivateDiningTextWrapper>

    
  <PrivateDiningImageWrapepr  >
    <div
     className="first-paragraph">
    <PrivateDiningImage
            image={getImage(events[0].eventMenuImage)}
            alt="private-dining"
            first="true"
           
          />
    </div>
      
       </PrivateDiningImageWrapepr>

   
       
      </PrivateDiningWrapper>
      <WhatsOnEventsWrapper>
        {events.map(
          (item, index) =>
            index > 0 && (
              <PrivateDiningWrapper key={index}>
                <PrivateDiningTextWrapper>
                  <Heading2 marginBottom="md">{item.eventTitle}</Heading2>
                  <RenderTextOverHiddenWrapper>
                    <Renderer node={item.eventDescription} />
                  </RenderTextOverHiddenWrapper>
                  <RedDecorationLink to={`events/${item.id}`}>
                    <BC1 marginBottom="xs">Learn more…</BC1>
                  </RedDecorationLink>
                </PrivateDiningTextWrapper>
                <PrivateDiningImage
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
