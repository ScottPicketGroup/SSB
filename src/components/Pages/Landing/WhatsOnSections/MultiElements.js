import React from "react"
import Renderer from "../../../rich-text-renderers/LandingWhatsOnRenderer"
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

const MultiElements = ({ events }) => {
  console.log(events)
  return (
    <div>
      <PrivateDiningWrapper first whatson>
        <PrivateDiningTextWrapper first>
          <Heading2 marginBottom="md">{events[0].eventTitle}</Heading2>
          <Renderer node={events[0].previewDescription} />
          <RedDecorationLink
            marginBottom="lg"
            to={`/events/${events[0].eventTitle
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <BC1 marginBottom="lg">Learn more…</BC1>
          </RedDecorationLink>
        </PrivateDiningTextWrapper>
        <PrivateDiningImageWrapepr first>
          <div className="first-paragraph">
            <PrivateDiningImage
              image={getImage(events[0].galleryImages[0])}
              alt="private-dining"
              first="true"
            />
          </div>
        </PrivateDiningImageWrapepr>
        <PrivateDiningImageWrapepr mobile>
          <div className="mobile-paragraph">
            {events[0].galleryImages && (
              <PrivateDiningImage
                image={getImage(events[0].galleryImages[0])}
                alt="private-dining"
                first="true"
              />
            )}
          </div>
        </PrivateDiningImageWrapepr>
      </PrivateDiningWrapper>
      <WhatsOnEventsMultiWrapper>
        {events.length > 1 &&
          events.map((item, i) =>
            i > 0 && i < 3 ? (
              <WhatsOnEventsElementWrapper key={i} first i={i}>
                <PrivateDiningImage
                  first="true"
                  className="first-paragraph"
                  image={getImage(item.galleryImages[0])}
                  alt="private-dining"
                />
                <PrivateDiningTextWrapper>
                  <Heading2 marginBottom="md">{item.eventTitle} </Heading2>
                  {item.previewDescription && (
                    <RenderTextOverHiddenWrapper>
                      <Renderer node={item.previewDescription} />
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
            ) : null
          )}
      </WhatsOnEventsMultiWrapper>
    </div>
  )
}

export default MultiElements
