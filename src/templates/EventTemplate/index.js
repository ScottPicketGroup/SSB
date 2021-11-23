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
            <Heading1 color="white" marginBottom="md">
              {eventData.eventTitle
                ? eventData.eventTitle
                : "What's On - Special Event"}
            </Heading1>
            {eventData.eventDateAndStartTime &&
            eventData.eventEndDateAndTime ? (
              <BC1 color="white" marginBottom="md">
                {`${eventData.eventDateAndStartTime} - ${eventData.eventEndDateAndTime}`}
              </BC1>
            ) : (
              <>
                <BC1 color="white">Day to be confirmed</BC1>
                <BC1 color="white" marginBottom="md">
                  Times to be confirmed
                </BC1>
              </>
            )}
            <NoneDecorationLink
              to={eventData.bookNowLinkUrl ? eventData.bookNowLinkUrl : "/"}
            >
              <BBHeading2 color="white" marginBottom="-2rem">
                {eventData.bookNowLinkText
                  ? eventData.bookNowLinkText
                  : "BOOK NOW"}
              </BBHeading2>
            </NoneDecorationLink>
          </Intro>
          <GalleryWrapper>
            {eventData.galleryImages ? (
              <GallerySlider images={eventData.galleryImages} bgRed />
            ) : (
              <BC1 color="white">No Gallery</BC1>
            )}
          </GalleryWrapper>
          <DescriptionWrapper>
            {eventData.eventDescription ? (
              <Renderer node={eventData.eventDescription} />
            ) : (
              <BC1 color="white">No Description</BC1>
            )}
            <Link
              to={eventData.bookNowLinkUrl ? eventData.bookNowLinkUrl : ""}
              style={{ textDecorationColor: "white" }}
            >
              <BC1 color="white" marginTop="md">
                {eventData.bookNowLinkText
                  ? eventData.bookNowLinkText
                  : "Book Now..."}
              </BC1>
            </Link>
          </DescriptionWrapper>
          <BrunchFirstWrapper>
            <MenuDuJourContainer>
              <MenuHeadingWrapper>
                <Heading2 color="black">
                  {eventData.eventMenu ? eventData.eventMenu.menuName : "Menu"}
                </Heading2>
              </MenuHeadingWrapper>

              {eventData.eventMenu ? (
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

              {eventData.eventMenu && (
                <SeasonalTitleWrapper>
                  <BC2 bold>{eventData.eventMenu.sideMenuName}</BC2>
                </SeasonalTitleWrapper>
              )}
            </MenuDuJourContainer>
            {eventData.eventMenuImage ? (
              <BrunchHiddenOnMobImage
                image={getImage(eventData.eventMenuImage)}
                alt="brunch-hidden"
              />
            ) : (
              <BC1 color="white">No Image</BC1>
            )}
          </BrunchFirstWrapper>
        </SectionContainer>
      </PageContainer>
    </Layout>
  )
}

export default EventTemplate
