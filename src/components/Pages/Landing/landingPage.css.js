import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const HeroWrapper = styled.div`
  position: relative;
  height: 52vw;
  text-align: center;
  width: 100%;
  padding: 0 8%;
  @media (max-width: 451px) {
    height: 100%;
    padding: 0;
  }
`
export const IntroWrapper = styled.div`
  text-align: center;
  margin-top: 3.5rem;
  p {
    padding: 0 15%;
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

  @media (max-width: 451px) {
    top: 6rem;
    width: 96%;
    height: 100%;
  }
`
export const HeroImage = styled(GatsbyImage)`
  aspect-ratio: 5/5;
`

export const WineAndFoodWrapper = styled.div`
  background-image: url("/static/c34fd4c50dfe2cdc8ae743ba5f54967e/SSB_Flower_Illustration_V01-02.png");
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
  flex-direction: ${props => (props.first === true ? "row" : "column")};
  justify-content: ${props => props.first === true && "space-between"};
  width: 100%;
  margin-bottom: ${props => (props.first === true ? "6rem" : "0")};
  @media (max-width: 451px) {
    flex-direction: column;
    margin-bottom: ${props =>
      props.dining === true ? "0" : props.first === true ? "3.25rem" : "0"};
  }
`
export const PrivateDiningImage = styled(GatsbyImage)`
  width: ${props => (props.first === true ? "60%" : "100%")};
  order: ${props => (props.first === true ? "1" : "0")};
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
  width: ${props =>
    props.first === true ? "20%" : props.dining ? "25%" : "80%"};
  margin ${props => (props.dining ? "3.5rem auto 0" : "3.5rem 0 0")};
  order: ${props => (props.first === true ? "0" : "1")};
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
  -webkit-line-clamp: ${props => (props.first === true ? 3 : 2)};
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
export const LogoTopTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 3rem;
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
  @media(max-width: 451px){
    width:70%;
  }
`
export const CircleImageWrapper = styled.div`
  position: relative;
  width: 16vw;
  @media(max-width: 451px){
    position: absolute;
    width: 40vw;
  }
`