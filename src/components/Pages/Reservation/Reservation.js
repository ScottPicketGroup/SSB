import React from "react"
import Renderer from "../../rich-text-renderers/ReservationRenderer"
import { getImage } from "gatsby-plugin-image"

import { SectionContainer } from "../../StyledComponents/containers.css"
import {
  Heading1,
  BBHeading2,
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
  reserverationsLinks
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
      {reserverationsLinks.map((link, i) => (
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <BBHeading2 color="white">{link.label}</BBHeading2>
        </a>
      ))}
       
      </DesktopLinkWrapper>
      <MobileLinkWrapper>
      {reserverationsLinks.map((link, i) => (
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <BBHeading2 color="white">{link.label}</BBHeading2>
        </a>
      ))}
      </MobileLinkWrapper>
      <ReservationImage image={getImage(image)} alt="reservation-image" />
    </SectionContainer>
  )
}

export default Reservation
