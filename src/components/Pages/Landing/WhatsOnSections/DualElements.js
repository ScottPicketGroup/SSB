import React from "react"
import Renderer from "../../../rich-text-renderers/WhatsOnLandingRenderer"
import { getImage } from "gatsby-plugin-image"
import {
  PrivateDiningTextWrapper,
  PrivateDiningImage,
  RenderTextOverHiddenWrapper,
  PrivateDiningImageWrapepr,
  PrivateDiningWrapper,
  WhatsOnEventsMultiWrapper,
  WhatsOnEventsElementWrapper,
} from "../landingPage.css"

import {
  BC1,
  Heading2,
  RedDecorationLink,
} from "../../../StyledComponents/typography.css"

const DualElements = ({ events }) => {
  console.log(events)
  return (
    <div>
      <WhatsOnEventsMultiWrapper>
        {events.map((item, i) => (
          <WhatsOnEventsElementWrapper key={i} first>
            <PrivateDiningImage
              first="true"
              className="first-paragraph"
              image={getImage(item.galleryImages[0])}
              alt="private-dining"
            />
            <PrivateDiningTextWrapper>
              <Heading2 marginBottom="md">{item.eventTitle}</Heading2>
              {item.eventDescription && (
                <RenderTextOverHiddenWrapper>
                  <Renderer node={item.eventDescription} />…
                </RenderTextOverHiddenWrapper>
              )}
              <RedDecorationLink
                to={`events/${item.eventTitle
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <BC1 marginBottom="lg">Learn more…</BC1>
              </RedDecorationLink>
            </PrivateDiningTextWrapper>
          </WhatsOnEventsElementWrapper>
        ))}
      </WhatsOnEventsMultiWrapper>
    </div>
  )
}

export default DualElements
