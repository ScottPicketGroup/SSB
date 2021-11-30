import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const HeroWrapper = styled.div`
  position: relative;
  height: 52vw;
  text-align: center;
  width: 100%;
  padding: 0 5%;
  @media (max-width: 451px) {
    height: 100%;
    padding: 0;
  }
`
export const IntroWrapper = styled.div`
  text-align: center;

  p {
    padding: 0 10%;
  }
  @media (max-width: 451px) {
    margin-top: 0;
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
  @media only screen and (max-width: 800px) and (min-width: 600px) {
    top: 20%;
    h1 {
      font-size: 1rem;
    }
  } 
  @media (max-width: 451px) {
    top: 6rem;
    width: 96%;
    height: 100%;
  }
`
export const HeroImage = styled(GatsbyImage)`

`

export const WineAndFoodWrapper = styled.div`
  background-image: ${props =>
    props.backgroundImage ? `url(${props.backgroundImage})` : `url("")`};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 35vw;
  background-repeat: norepeat;
  background-size: 100% 100%;
  @media (max-width: 451px) {
    width: 100%;
    height: 70vw;
  }
`
export const WeekdayWrapper = styled.div`
  display: flex;
  padding-top: 5rem;
`

export const WeekdayItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 451px) {
    margin-left: 35%;
    margin-top: 4.5rem;
  }
`
export const WeekdayItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3.5rem;
  @media (max-width: 451px) {
    margin-top: 1.75rem;
    flex-direction: column;
  }
`
export const PrivateDiningWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.first ? "row" : "column")};
  justify-content: ${props => props.first && "space-between"};
  width: 100%;
  margin-bottom: ${props => (props.first ? "6rem" : "0")};
  @media (max-width: 451px) {
    flex-direction: column;
    margin-bottom: ${props =>
      props.dining ? "0" : props.first ? "3.25rem" : "0"};
  }
`

export const PrivateDiningImageWrapepr = styled.div`
 --r: 478.94 / 319.29;

aspect-ratio: var(--r);
width:min(90%, min(478.94px, 90vh*(var(--r))));

overflow: hidden;
`
export const PrivateDiningImage = styled(GatsbyImage)`

  order: ${props => (props.first ? "1" : "0")};
  @media (max-width: 451px) {
    order: 0;
    width: 100%;
  }
`

export const PrivateDiningTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: left;
  margin-top: 3.5rem;
  padding-left: ${props => (props.dining ? "2rem" : "")};
  padding-right: ${props => (props.first ? "2rem" : "")};
  width: ${props => (props.first ? "50%" : props.dining ? "70%" : "80%")};
  margin ${props => (props.dining ? "3rem auto 0" : "3rem 0 0")};
  order: ${props => (props.first ? "0" : "1")};
  @media (max-width: 451px) {
    order: 1;
    width: 100%;
    margin-top: 1.75rem;
  }
`

export const WhatsOnEventsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8vw;
  justify-content: space-between;
  @media (max-width: 451px) {
    flex-direction: column;
  }
`
export const RenderTextOverHiddenWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.first ? 4 : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin-bottom: 1.75rem;
  p {
    margin-bottom: 0;
  }
  @media (max-width: 451px) {
    margin-bottom: 1rem;
  }
`
export const LogoTopTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1200px) and (min-width: 801px) {margin-bottom: 1rem;} 
  @media only screen and (max-width: 799px) and (min-width: 600px) {margin-bottom: 0rem;} 
`
export const LogoBottomTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MobileLogoBottomTextWrapper = styled(LogoBottomTextWrapper)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 1rem;
  width: 96%;
  left: 2%;
`
export const WeekdayItemDescriptionWrapper = styled.div`
  width: 60%;
  @media (max-width: 451px) {
    width: 70%;
  }
`
export const CircleImageWrapper = styled.div`
  position: relative;
  width: 26vw;
  @media (min-width: 452px) {
    margin-top: -5rem;
  }
  @media (max-width: 451px) {
    position: absolute;
    width: 40vw;
    margin-top: 2rem;
    right: 205px;
  }
`
