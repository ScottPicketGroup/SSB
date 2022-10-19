import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SectionContainer } from "../../StyledComponents/containers.css"

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
  @media (max-width: 451px) {
    height: 100%;
  }
`

export const WineAndFoodWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
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
  @media (max-width: 451px) {
    padding-top: 0;
    margin-top: -6rem;
  }
`

export const WeekdayItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 451px) {
    margin-left: 35%;
    margin-top: 5.5rem;
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

export const WhatsOnEventsElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.key === 0 && "space-between"};
  width: 43%;
  
  margin-bottom: ${props => (props.i === 0 ? "9rem" : "9rem")};
  min-height: 640px;
  margin-right: ${props => (props.i === 1 ? "1rem" : "inherit")};

  @media (max-width: 451px) {
    flex-direction: column;
    margin-bottom: 0;
  }
  /* Safari 11+ */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      selector {
        margin-right: 10vw;
      }
    }
  }
  /* Test website on real Safari 11+ */

  /* Safari 10.1 */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (not (stroke-color: transparent)) {
      selector {
        margin-right: 10vw;
      }
    }
  }

  /* Safari 6.1-10.0 (but not 10.1) */
  @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
    @media {
      selector {
        margin-right: 10vw;
      }
    }
  }
`
export const WhatsOnEventsMultiWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  // gap: 8vw;
`
export const PrivateDiningWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.first ? "row" : "column")};
  justify-content: ${props => props.first && "space-between"};
  width: 100%;
  margin-bottom: ${props => (props.first && props.whatson ? `9rem` : props.first ? "6rem" : "0")};
  @media (max-width: 451px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

export const LandingEventImageWrapepr = styled.div`
  --r: 536 / 356;

  aspect-ratio: var(--r);
  width: min(90%, min(536px, 90vh * (var(--r))));

  overflow: hidden;
`
export const PrivateDiningImageWrapepr = styled.div`
  --r: 318 / 211;

  aspect-ratio: 1.52;
  
  
  overflow: hidden;
  width: 100%;
  display: ${props => (props.mobile ? "none" : "block")};

  @media (max-width: 451px) {
    width: 100%;
    display: ${props => (props.mobile ? "block" : "none")};
  }
`
export const PrivateDiningImage = styled(GatsbyImage)`
  aspect-ratio: 3/2 !important;
  min-width: 100%;
  margin-right: 1rem;
  gap: 4rem;
  order: ${props => (props.first ? "1" : "0")};
  @media (max-width: 451px) {
    order: 0;
    width: 100%;
    min-width: 100%;
  }
`

export const PrivateDiningTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: left;
  margin-top: 3.5rem;

  padding-left: ${props => (props.dining ? "4rem" : "")};
  padding-right: ${props => (props.first ? "20%" : "")};
  width: ${props => (props.first ? "50%" : props.dining ? "50%" : "80%")};
  /* margin ${props => (props.dining ? "3rem auto 0" : "3rem 0 0")}; */
  order: ${props => (props.first ? "0" : "1")};
  @media (max-width: 451px) {
    order: 1;
    width: 100%;
    margin-top: 1.75rem;
    padding-left: ${props => props.dining && "0"};
    padding-right: ${props => props.dining && "2rem"};
  }
`

export const WhatsOnEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: space-between;
  @media (max-width: 451px) {
    flex-direction: column;
  }
`
export const RenderTextOverHiddenWrapper = styled.div`
  display: -webkit-box;
  // -webkit-line-clamp: ${props => (props.first ? 4 : 3)};
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (min-color-index: 0) and (-webkit-min-device-pixel-ratio: 0) {
    height: 70px;
  }

  margin-bottom: 1.75rem;
  p {
    margin-bottom: 0;
  }
  @media (max-width: 451px) {
    margin-bottom: 1rem;
    height: 30px;
  }
`
export const LogoTopTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1200px) and (min-width: 801px) {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 799px) and (min-width: 600px) {
    margin-bottom: 0rem;
  }
`
export const LogoBottomTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const MobileLogoBottomTextWrapper = styled(LogoBottomTextWrapper)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 96%;
  left: 2%;
`
export const WeekdayItemDescriptionWrapper = styled.div`
  width: 65%;
  @media (max-width: 451px) {
    width: 100%;
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
    margin-top: 9vw;
    right: 52%;
  }
`
export const WeekdayHeadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3.5rem;

  @media (max-width: 451px) {
    margin-bottom: 5.25rem;
  }
`
export const LandingHeroContainer = styled(SectionContainer)`
  @media (max-width: 451px) {
    height: 90vw;
  }
`
