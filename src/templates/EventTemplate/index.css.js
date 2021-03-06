import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { color } from "../../components/StyledComponents/variables"

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  text-align: center;
  align-items: center;
  margin: 6rem auto 3.5rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 3.5rem auto 0;
  }
`
export const GalleryWrapper = styled.div`
  width: 70vw;
  margin: 0 auto 3.5rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto 1.75rem;
  }
`
export const DescriptionWrapper = styled.div`
  width: 40vw;
  margin: -2rem 0 7rem 30vw;
  @media (max-width: 451px) {
    width: 90%;
    margin: 1.75rem auto 3.5rem;
  }
`
export const MenuDuJourContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 481px;
  height: ${props => props.height === "auto" ? "auto" : "713px"};
  overflow: auto;
  align-items: center;
  background-color: ${props =>
    props.coffee ? "#AC785B" : color.SECONDARY_WHITE};
  @media (max-width: 451px) {
    width: 301px;
    height: 445px;
    margin: 0 auto;
  }
`
export const SeasonalTitleWrapper = styled.div`
  position: absolute;
  top: 1.75rem;
  right: 6%;
  text-align: left;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    top: 1rem;
  }
`

export const BrunchHiddenOnMobImage = styled(GatsbyImage)`
  margin-top: 6rem;
  min-width: 340px;
  max-height: 418px;
  aspect-ratio: 4/3;
  margin-bottom: 6em;
  
  @media (max-width: 451px) {
    width: 70%;
    height: 80vw;
    margin: 3.5rem auto 0;
  }
`

export const BrunchFirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // width: 70vw;
  width: ${props =>
    props.lunchAndDinnerMenu ? "80vw" : "870px"};
  justify-content: ${props =>
    props.justify};
  margin: 0 auto 11.25rem;
  @media (max-width: 451px) {
    flex-direction: column;
    width: 90vw;
    height: 100%;
    margin-bottom: 6rem;
  }
`
export const MenuDuJourItemWrapper = styled.div`
  width: 55%;
  margin-bottom: 3.5rem;
  text-align: center;
  @media (max-width: 451px) {
    margin-bottom: 1rem;
  }
`
export const MenuHeadingWrapper = styled.div`
  margin: 3.5rem auto;
  @media (max-width: 451px) {
    margin: 1.75rem auto 0.75rem;
  }
`
