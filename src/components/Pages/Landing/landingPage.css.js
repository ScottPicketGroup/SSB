import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const HeroWrapper = styled.div`
  position: relative;
  height: 52vw;
  text-align: center;
  width: 100%;
  @media (max-width: 451px) {
    height: 100%;
  }
`
export const IntroWrapper = styled.div`
  text-align: center;

  p {
    padding: 0 25%;
  }
  @media (max-width: 451px) {
    p {
      padding: 0 5%;
    }
  }
`
export const HeroTextWrapper = styled.div`
  width: 67%;
  height: 30%;
  top: 30%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 451px) {
    width: 96%;
    height: 100%;
  }
`
export const HeroImage = styled(GatsbyImage)`
  aspect-ratio: 5/5;
`

export const WineAndFoodWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WeekdayItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 451px) {
  }
`
export const WeekdayItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3.5rem;
  @media (max-width: 451px) {
    margin-top: 1.75rem;
  }
`
export const PrivateDiningWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${props => (props.whatsonfirst ? "6rem" : "11.25rem")};
  @media (max-width: 451px) {
    flex-direction: column;
    margin-bottom: ${props => (props.whatsonfirst ? "3.25rem" : "6rem")};
  }
`
export const PrivateDiningImage = styled(GatsbyImage)`
  width: ${props => (props.column ? "100%" : "50%")};
  @media (max-width: 451px) {
    order: ${props => (props.whatsonfirst ? "0" : "1")};
    width: 100%;
  }
`

export const PrivateDiningTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: left;
  margin-top: 3.5rem;
  width: ${props => (props.column ? "100%" : "43%")};
  @media (max-width: 451px) {
    order: ${props => (props.whatsOnFirst ? "1" : "0")};
    width: 100%;
    margin-top: 1.75rem;
  }
`

export const WhatsOnEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const WhatsOnEventsTwoInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8vw;
  justify-content: space-between;
  @media (max-width: 451px) {
    flex-direction: column;
  }
`
