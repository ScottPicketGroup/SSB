import React from "react"
import Renderer from "../../rich-text-renderers/ReservationRenderer"
import { getImage } from "gatsby-plugin-image"

import { SectionContainer } from "../../StyledComponents/containers.css"
import {
  Heading1,
  NoneDecorationLink,
  BBHeading2,
  BBHeading3,
} from "../../StyledComponents/typography.css"
import {
  IntroductionWrapper,
  DesktopLinkWrapper,
  MobileLinkWrapper,
  ReservationImage,
  HeadingWrapper,
} from "./Reservation.css"

const Reservation = ({
  pageTitle,
  introduction,
  image,
  privateFunctionsHeading,
  bookATableHeading,
  bookATableUrl,
}) => {
  return (
    <SectionContainer column centered full red={true}>
      <HeadingWrapper>
        <Heading1 color="white">{pageTitle}</Heading1>
      </HeadingWrapper>
      <IntroductionWrapper>
        <Renderer node={introduction} />
      </IntroductionWrapper>
      <DesktopLinkWrapper>
        <a
          href={bookATableUrl}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <BBHeading2 color="white">{bookATableHeading}</BBHeading2>
        </a>
        <NoneDecorationLink to="/private-dining">
          <BBHeading2 color="white">{privateFunctionsHeading}</BBHeading2>
        </NoneDecorationLink>
      </DesktopLinkWrapper>
      <MobileLinkWrapper>
        <a
          href={bookATableUrl}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <BBHeading3 color="white">{bookATableHeading}</BBHeading3>
        </a>
        <NoneDecorationLink to="">
          <BBHeading3 color="white">{privateFunctionsHeading}</BBHeading3>
        </NoneDecorationLink>
      </MobileLinkWrapper>
      <ReservationImage image={getImage(image)} alt="reservation-image" />
    </SectionContainer>
  )
}

export default Reservation
