import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import GallerySlider from "../components/Common/GallerySlider/GallerySlider"
import Renderer from "../components/rich-text-renderers/WhiteSample"
import Seo from "../components/seo"
import { PageContainer, SectionContainer } from "../components/StyledComponents/containers.css"
import {
  BBHeading2,
  Heading2,
  BC2,
  BC1,
  Heading1,
  NoneDecorationLink,
} from "../components/StyledComponents/typography.css"
import {
  Intro,
  GalleryWrapper,
  DescriptionWrapper,
  MenuDuJourContainer,
  BrunchFirstWrapper,
  MenuDuJourItemWrapper,
  SeasonalTitleWrapper,
  BrunchHiddenOnMobImage,
  MenuHeadingWrapper
} from "./index.css"

const EventTemplate = () => {
  const data = useStaticQuery(graphql`
    query eventQuery {
      contentfulWhatsOnPageEventsLandingPageContent(
        id: { eq: "4437fbd8-135c-5422-b690-67964664d1f9" }
      ) {
        events {
          bookNowLinkText
          bookNowLinkUrl
          id
          eventDateAndStartTime(formatString: "DD-MM-YY")
          eventTitle
          galleryImages {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 0.7
            )
          }
          eventDescription {
            raw
          }
          eventEndDateAndTime(formatString: "DD-MM-YY")
          eventMenu {
            menuName
            sideMenuName
            eventMenuItems {
              menuITem
              menuItemLongDescription
              menuItemPrice
              menuItemShortDescription
            }
          }
          eventMenuImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 0.7
            )
          }
        }
      }
    }
  `)
  const eventData = data.contentfulWhatsOnPageEventsLandingPageContent.events[0]
  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red>
      <SectionContainer red full centerd column>
        <Intro>
          <Heading1 color="white" marginBottom="lg">
            {eventData.eventTitle}
          </Heading1>
          <BC1 color="white">{eventData.eventDateAndStartTime}</BC1>
          <BC1 color="white" marginBottom="md">
            {eventData.eventDateAndStartTime}
          </BC1>
          <NoneDecorationLink to={eventData.bookNowLinkUrl}>
            <BBHeading2 color="white">{eventData.bookNowLinkText}</BBHeading2>
          </NoneDecorationLink>
        </Intro>
        <GalleryWrapper>
          <GallerySlider images={eventData.galleryImages} bgRed/>
        </GalleryWrapper>
        <DescriptionWrapper>
          <Renderer node={eventData.eventDescription} />

          <Link
            to={eventData.bookNowLinkUrl}
            style={{ textDecorationColor: "white" }}
          >
            <BC1 color="white" marginTop="md">
              {eventData.bookNowLinkText}
            </BC1>
          </Link>
        </DescriptionWrapper>

        <BrunchFirstWrapper>
          <MenuDuJourContainer>
            <MenuHeadingWrapper>
              <Heading2 color="black">
                {eventData.eventMenu.menuName}
              </Heading2>
            </MenuHeadingWrapper>

            {eventData.eventMenu.eventMenuItems.map((item, index) => (
              <MenuDuJourItemWrapper key={index}>
                <BC2 color="black" bold>
                  {item.menuITem}
                </BC2>
                <BC2 color="black" bold>
                  {item.menuItemShortDescription}
                </BC2>
                <BC2 color="black">{item.menuItemLongDescription}</BC2>
              </MenuDuJourItemWrapper>
            ))}

            <SeasonalTitleWrapper>
              <BC2 bold>{eventData.eventMenu.sideMenuName}</BC2>
            </SeasonalTitleWrapper>
          </MenuDuJourContainer>

          <BrunchHiddenOnMobImage
            image={getImage(eventData.eventMenuImage)}
            alt="brunch-hidden"
          />
        </BrunchFirstWrapper>
      </SectionContainer>
      </PageContainer>
    </Layout>
  )
}

export default EventTemplate
