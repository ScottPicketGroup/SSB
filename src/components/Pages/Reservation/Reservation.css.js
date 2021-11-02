import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const IntroductionWrapper = styled.div`
  text-align: center;
  width: 37vw;
  margin: 3.5rem auto 1.75rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 3.5rem auto 1.75rem;
  }
`
export const DesktopLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  margin-bottom: 3.5rem;

  @media (max-width: 451px) {
    display: none;
  }
`
export const MobileLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  margin-bottom: 3.5rem;

  @media (min-width: 451px) {
    display: none;
  }
`

export const ReservationImage = styled(GatsbyImage)`
  margin: 3.5rem auto 11.25rem;
  width: 45%;
  height: 30vw;
  @media (max-width: 451px) {
    width: 70%;
    height: 45vw;
    margin: 0 auto 2.5rem;
  }
`
export const HeadingWrapper = styled.div`
  width: 100%;
  margin-top: 6rem;

  @media (max-width: 451px) {
    margin-top: 3.5rem;
  }
`
