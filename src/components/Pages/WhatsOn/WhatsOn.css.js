import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const IntroWrapper = styled.div`
  text-align: center;
  margin-top: 6rem;
  width: 40%;
  @media (max-width: 451px) {
    margin-top: 3.5rem;
    width: 90%;
  }
`
export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25vw;
  margin-top: ${props=>props.key % 2 === 0 ? "0" : "6rem"};
  margin-bottom: ${props=>props.key % 2 === 1 ? "6rem" : "0"};
  @media (max-width: 451px) {
    width: 90vw;
  }
`
export const EventImage = styled(GatsbyImage)`
  width: 100%;
  height: 18vw;
  @media (max-width: 451px) {
      height: 65vw;
  }
`
export const EventTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 2.75rem;
  width: 80%;
  @media (max-width: 451px) {
    width: 100%;
    margin-top: 1.75rem;
  }
`
export const RenderTextOverHiddenWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.75rem;
  p {
    margin-bottom: 0;
  }
  @media (max-width: 451px) {
    margin-bottom: 1rem;
  }
`
export const WhatsOnEventsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
