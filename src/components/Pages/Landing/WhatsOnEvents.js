import React from "react"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading2 } from "../../StyledComponents/typography.css"
import {
  PrivateDiningWrapper,
  PrivateDiningTextWrapper,
  PrivateDiningImage,
  WhatsOnEventsWrapper,
  WhatsOnEventsTwoInWrapper,
} from "./landingPage.css"
import Renderer from "../../rich-text-renderers/sample"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { color } from "../../StyledComponents/variables"

const WhatsOnEvents = ({ whatsOnEvents }) => {
  const events = whatsOnEvents.events
  return (
    <SectionContainer>
      <WhatsOnEventsWrapper>
        <PrivateDiningWrapper whatsonfirst="true">
          <PrivateDiningTextWrapper whatsonfirst="true">
            <Heading2 marginBottom="sm">{events[2].eventTitle}</Heading2>
            <Renderer node={events[2].eventDescription} />
            <Link
              to="/whats-on/page-title"
              style={{
                marginTop: "0.75rem",
                textDecorationColor: color.PRIMARY_RED_ROUGE,
              }}
            >
              <BC1>Learn more...</BC1>
            </Link>
          </PrivateDiningTextWrapper>
          <PrivateDiningImage
            image={getImage(events[2].eventMenuImage)}
            whatsonfirst="true"
            alt="private-dining"
          />
        </PrivateDiningWrapper>
        <WhatsOnEventsTwoInWrapper>
          <PrivateDiningWrapper column="true">
            <PrivateDiningImage
              image={getImage(events[1].eventMenuImage)}
              column="true"
              alt="private-dining"
            />
            <PrivateDiningTextWrapper column="true">
              <Heading2 marginBottom="sm">{events[1].eventTitle}</Heading2>
              <Renderer node={events[1].eventDescription} />
              <Link
                to="/whats-on/page-title"
                style={{
                  marginTop: "0.75rem",
                  textDecorationColor: color.PRIMARY_RED_ROUGE,
                }}
              >
                <BC1>Learn more...</BC1>
              </Link>
            </PrivateDiningTextWrapper>
          </PrivateDiningWrapper>
          <PrivateDiningWrapper column="true">
            <PrivateDiningImage
              image={getImage(events[1].eventMenuImage)}
              column="true"
              alt="private-dining"
            />
            <PrivateDiningTextWrapper column="true">
              <Heading2 marginBottom="sm">{events[0].eventTitle}</Heading2>
              <Renderer node={events[0].eventDescription} />
              <Link
                to="/whats-on/page-title"
                style={{
                  marginTop: "0.75rem",
                  textDecorationColor: color.PRIMARY_RED_ROUGE,
                }}
              >
                <BC1>Learn more...</BC1>
              </Link>
            </PrivateDiningTextWrapper>
          </PrivateDiningWrapper>
        </WhatsOnEventsTwoInWrapper>
      </WhatsOnEventsWrapper>
    </SectionContainer>
  )
}

export default WhatsOnEvents
