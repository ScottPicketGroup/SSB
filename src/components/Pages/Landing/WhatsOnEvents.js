import React from "react"

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
} from "./landingPage.css"
import Renderer from "../../rich-text-renderers/sample"
import { getImage } from "gatsby-plugin-image"

const WhatsOnEvents = ({ whatsOnEvents }) => {
  const events = whatsOnEvents.events
  return (
    <SectionContainer column="true" marginBottom="xxl">
      <PrivateDiningWrapper first="true">
        <PrivateDiningTextWrapper first="true">
          <Heading2 marginBottom="md">{events[0].eventTitle}</Heading2>
          <RenderTextOverHiddenWrapper first="true">
            <Renderer node={events[0].eventDescription} />
          </RenderTextOverHiddenWrapper>
          <RedDecorationLink to={`events/${events[0].id}`}>
            <BC1>Learn more…</BC1>
          </RedDecorationLink>
        </PrivateDiningTextWrapper>
        <PrivateDiningImage
          image={getImage(events[0].eventMenuImage)}
          first="true"
          alt="private-dining"
        />
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
