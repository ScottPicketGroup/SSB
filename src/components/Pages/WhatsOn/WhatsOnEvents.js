import React from "react"
import {
  BC1,
  Heading3,
  RedDecorationLink,
} from "../../StyledComponents/typography.css"
import {
  EventWrapper,
  EventTextWrapper,
  EventImage,
  RenderTextOverHiddenWrapper,
  WhatsOnEventsContainer,
} from "./WhatsOn.css"
import { getImage } from "gatsby-plugin-image"
import { SectionContainer } from "../../StyledComponents/containers.css"
import Renderer from "../../rich-text-renderers/sample"

const WhatsOnEvents = ({ events }) => {
  return (
    <SectionContainer width="62vw" column>
      <WhatsOnEventsContainer>
        {events.map((item, index) => (
          <EventWrapper key={index} order={index}>
            {item.eventMenuImage === null ? (
              <EventImage
                image={getImage(events[0].eventMenuImage)}
                alt="whats-on-image"
              />
            ) : (
              <EventImage
                image={getImage(item.eventMenuImage)}
                alt="whats-on-image"
              />
            )}
            <EventTextWrapper>
              <Heading3 marginBottom="md">{item.eventTitle}</Heading3>
              <RenderTextOverHiddenWrapper>
                <Renderer node={item.eventDescription} />
              </RenderTextOverHiddenWrapper>
              {/* <RedDecorationLink to={"/events/"+ item.eventTitle.toLowerCase().replaceAll(' ' , '-')}> */}
              <RedDecorationLink to={"/events/"+ item.id}>
                <BC1>Learn more...&nbsp;&nbsp;</BC1>
              </RedDecorationLink>
            </EventTextWrapper>
          </EventWrapper>
        ))}
      </WhatsOnEventsContainer>
    </SectionContainer>
  )
}

export default WhatsOnEvents
