import React from "react"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading2 } from "../../StyledComponents/typography.css"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  PrivateDiningImage,
  WhatsOnEventsWrapper,
  WhatsOnEventsTwoInWrapper,
  RenderTextOverHiddenWrapper,
} from "./landingPage.css"
import Renderer from "../../rich-text-renderers/sample"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { color } from "../../StyledComponents/variables"

const WhatsOnEvents = ({ whatsOnEvents }) => {
  const events = whatsOnEvents.events
  return (
    <SectionContainer column="true" marginBottom="xxl">
      <PrivateDiningWrapper first={true}>
        <PrivateDiningTextWrapper first={true}>
          <Heading2 marginBottom="md">{events[0].eventTitle}</Heading2>
          <RenderTextOverHiddenWrapper first={true}>
            <Renderer node={events[0].eventDescription} />
          </RenderTextOverHiddenWrapper>
          <Link
            to="/whats-on/page-title"
            style={{
              textDecorationColor: color.PRIMARY_RED_ROUGE,
            }}
          >
            <BC1>Learn more...&nbsp;&nbsp;</BC1>
          </Link>
        </PrivateDiningTextWrapper>
        <PrivateDiningImage
          image={getImage(events[1].eventMenuImage)}
          first={true}
          alt="private-dining"
        />
      </PrivateDiningWrapper>
      <WhatsOnEventsWrapper>
        {events.map(
          (item, index) =>
            index > 0 && (
              <PrivateDiningWrapper>
                <PrivateDiningTextWrapper>
                  <Heading2 marginBottom="md">{item.eventTitle}</Heading2>
                  <RenderTextOverHiddenWrapper>
                    <Renderer node={item.eventDescription} />
                  </RenderTextOverHiddenWrapper>
                  <Link
                    to="/whats-on/page-title"
                    style={{
                      textDecorationColor: color.PRIMARY_RED_ROUGE,
                    }}
                  >
                    <BC1>Learn more...&nbsp;&nbsp;</BC1>
                  </Link>
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
