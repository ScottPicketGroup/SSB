import React from "react"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import GallerySlider from "../../components/Common/GallerySlider/GallerySlider"
import Renderer from "../../components/rich-text-renderers/WhiteSample"
import Seo from "../../components/seo"
import {
  PageContainer,
  SectionContainer,
} from "../../components/StyledComponents/containers.css"
import {
  BBHeading2,
  Heading2,
  BC2,
  BC1,
  Heading1,
  NoneDecorationLink,
} from "../../components/StyledComponents/typography.css"
import {
  Intro,
  GalleryWrapper,
  DescriptionWrapper,
  MenuDuJourContainer,
  BrunchFirstWrapper,
  MenuDuJourItemWrapper,
  SeasonalTitleWrapper,
  BrunchHiddenOnMobImage,
  MenuHeadingWrapper,
} from "./index.css"

const EventTemplate = ({ pageContext }) => {
  const eventData = pageContext.eventData
  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red>
        <SectionContainer red full centerd column>
          <Intro>
            <Heading1 color="white" marginBottom="lg">
              {eventData.eventTitle !== null
                ? eventData.eventTitle
                : "What's On - Speicail Event"}
            </Heading1>
            <BC1 color="white">
              {eventData.eventDateAndStartTime !== null
                ? eventData.eventDateAndStartTime
                : "Thuesday through Sunday"}
            </BC1>
            <BC1 color="white" marginBottom="md">
              {eventData.eventEndDateAndTime !== null
                ? eventData.eventEndDateAndTime
                : "12 noon - 2.30 pmm"}
            </BC1>
            <NoneDecorationLink
              to={
                eventData.bookNowLinkUrl !== null
                  ? eventData.bookNowLinkUrl
                  : "/"
              }
            >
              <BBHeading2 color="white">
                {eventData.bookNowLinkText !== null
                  ? eventData.bookNowLinkText
                  : "BOOK NOW"}
              </BBHeading2>
            </NoneDecorationLink>
          </Intro>
          <GalleryWrapper>
            {eventData.galleryImages !== null ? (
              <GallerySlider images={eventData.galleryImages} bgRed />
            ) : (
              <BC1 color="white">No Gallery</BC1>
            )}
          </GalleryWrapper>
          <DescriptionWrapper>
            {eventData.eventDescription !== null ? (
              <Renderer node={eventData.eventDescription} />
            ) : (
              <BC1 color="white">No Description</BC1>
            )}

            <Link
              to={eventData.bookNowLinkUrl}
              style={{ textDecorationColor: "white" }}
            >
              <BC1 color="white" marginTop="md">
                {eventData.bookNowLinkText !== null
                  ? eventData.bookNowLinkText
                  : "book now"}
              </BC1>
            </Link>
          </DescriptionWrapper>

          <BrunchFirstWrapper>
            <MenuDuJourContainer>
              <MenuHeadingWrapper>
                <Heading2 color="black">
                  {eventData.eventMenu !== null
                    ? eventData.eventMenu.menuName
                    : "Menu"}
                </Heading2>
              </MenuHeadingWrapper>

              {eventData.eventMenu !== null ? (
                eventData.eventMenu.eventMenuItems.map((item, index) => (
                  <MenuDuJourItemWrapper key={index}>
                    <BC2 color="black" bold>
                      {item.menuITem}
                    </BC2>
                    <BC2 color="black" bold>
                      {item.menuItemShortDescription}
                    </BC2>
                    <BC2 color="black">{item.menuItemLongDescription}</BC2>
                  </MenuDuJourItemWrapper>
                ))
              ) : (
                <BC1 color="white">No Menu</BC1>
              )}

              {eventData.eventMenu !== null && (
                <SeasonalTitleWrapper>
                  <BC2 bold>{eventData.eventMenu.sideMenuName}</BC2>
                </SeasonalTitleWrapper>
              )}
            </MenuDuJourContainer>
              {eventData.eventMenuImage !== null ? (<BrunchHiddenOnMobImage
              image={getImage(eventData.eventMenuImage)}
              alt="brunch-hidden"
            />) : (<BC1 color="white">No Image</BC1>)}
            
          </BrunchFirstWrapper>
        </SectionContainer>
      </PageContainer>
    </Layout>
  )
}

export default EventTemplate
