import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import GallerySlider from "../../components/Common/GallerySlider/GallerySlider"
import Renderer from "../../components/rich-text-renderers/WhiteSample"
import Seo from "../../components/seo"
import {
  PageContainer,
  SectionContainer,
} from "../../components/StyledComponents/containers.css"
import {
  BC1,
  Heading1,
  ExtWhiteDecorationLink,
} from "../../components/StyledComponents/typography.css"
import { Intro, GalleryWrapper, DescriptionWrapper } from "./index.css"
import EventMenu from "./Menus/EventMenu"
import LunchAndDinnerMenu from "./Menus/LunchAndDinnerMenu"

const EventTemplate = ({ pageContext }) => {
  const eventData = pageContext.eventData
  console.log(eventData, "hi")

  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red>
        <SectionContainer red full centerd column>
          <Intro>
            <Heading1 color="white" marginBottom="lg">
              {eventData.eventTitle
                ? eventData.eventTitle
                : "What's On - Special Event"}
            </Heading1>
            {eventData.eventDateAndTimeInfo && (
              <BC1 color="white" marginBottom="0">
                {`${eventData.eventDateAndTimeInfo} `}
              </BC1>
            )}
            {eventData.eventDateAndTimeInfoLineTwo && (
              <BC1 color="white" marginBottom="md">
                {`${eventData.eventDateAndTimeInfoLineTwo} `}
              </BC1>
            )}

            <ExtWhiteDecorationLink
              href={eventData.bookNowLinkUrl ? eventData.bookNowLinkUrl : ""}
              style={{ textDecorationColor: "white" }}
            >
              <BC1 color="white">
                {eventData.bookNowLinkText
                  ? `${eventData.bookNowLinkText}…`
                  : ""}
              </BC1>
            </ExtWhiteDecorationLink>
          </Intro>
          <GalleryWrapper>
            {eventData.galleryImages ? (
              <GallerySlider images={eventData.galleryImages} bgRed />
            ) : (
              <BC1 color="white"></BC1>
            )}
          </GalleryWrapper>
          <DescriptionWrapper>
            {eventData.eventDescription ? (
              <Renderer node={eventData.eventDescription} />
            ) : null}
            <ExtWhiteDecorationLink
              href={eventData.bookNowLinkUrl ? eventData.bookNowLinkUrl : ""}
              style={{ textDecorationColor: "white" }}
            >
              <BC1 color="white" marginTop="md">
                {eventData.bookNowLinkText
                  ? `${eventData.bookNowLinkText}…`
                  : ""}
              </BC1>
            </ExtWhiteDecorationLink>
          </DescriptionWrapper>

          {eventData.eventMenu !== null &&
          eventData.eventMenu.__typename === "ContentfulLunchDinnerMenu" ? (
            <LunchAndDinnerMenu eventData={eventData} />
          ) : eventData.eventMenu !== null &&
            eventData.eventMenu.__typename === "ContentfulEventMenu" ? (<>
            <EventMenu eventData={eventData} /> "event menu"</>
          ) : null}
        </SectionContainer>
      </PageContainer>
    </Layout>
  )
}

export default EventTemplate
