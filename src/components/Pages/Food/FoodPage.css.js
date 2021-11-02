import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "../../StyledComponents/variables"

export const MenuDuJourContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  // width: 25vw;
  width: 50%;
  align-items: center;
  background-color: ${props =>
    props.coffee ? "#AC785B" : color.SECONDARY_WHITE};
  @media (max-width: 451px) {
    height: 100%;
    width: 100%;
  }
`
export const SeasonalTitleWrapper = styled.div`
  position: absolute;
  top: 8%;
  right: 6%;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    height: 100%;
  }
`
export const BrunchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 451px) {
    height: 100%;
  }
`
export const BrunchHiddenOnMobImage = styled(GatsbyImage)`
  margin-top: 6rem;
  height: 60%;
  width: 40%;
  aspect-ratio: 3/4;
  @media (max-width: 451px) {
    display: none;
  }
`
export const BrunchVerticalImageWrapper = styled.div`
  width: 40%;
  @media (max-width: 451px) {
    display: none;
  }
`
export const BrunchHorizontalImageWrapper = styled.div`
  width: 55%;
  margin-top: 3.5rem;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto;
  }
`

export const BrunchRightImageWrapper = styled(StaticImage)`
  margin-top: 6rem;
  width: 25%;
  @media (max-width: 451px) {
    display: none;
  }
`
export const BrunchFirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 6rem;
  @media (max-width: 451px) {
    height: 100%;
    margin-bottom: 3.5rem;
  }
`

export const BrunchSecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 451px) {
    height: 100%;
  }
`
export const DessertContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  @media (max-width: 451px) {
    height: 100%;
    flex-direction: column;
  }
`
export const DessertSeasonalTitleWrapper = styled.div`
  position: absolute;
  top: 12%;
  left: 5.5%;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    height: 100%;
  }
`
export const DessertImage = styled(GatsbyImage)`
  margin-top: 6rem;
  height: 30vw;
  width: 30vw;
  aspectratio: 1;
  @media (max-width: 451px) {
    width: 90%;
    Height: 81vw;
    margin: 0 auto 3.5rem;
  }
`
