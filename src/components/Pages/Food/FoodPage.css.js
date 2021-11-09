import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "../../StyledComponents/variables"

export const MenuDuJourContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width : 481px;
  height: ${props => props.menus === "brunch" ? "842px" : "714px"};
  align-items: center;
  background-color: ${props =>
    props.coffee ? "#AC785B" : color.SECONDARY_WHITE};
  @media (max-width: 451px) {
    width : 301px;
    height: ${props => props.menus === "brunch" ? "529px" : "445px"};
    margin: 0 auto;
    overflow-y: scroll;
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
export const BrunchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // width: 80%;
  width: 850px;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 451px) {
    height: 100%;
    width: 80%;
  }
`
export const BrunchHiddenOnMobImage = styled(GatsbyImage)`
  margin-top: 6rem;
  width: 335px;
  height: 419px;
  @media (max-width: 451px) {
    display: none;
    width: 26vw;
  height: 32vw;
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
  margin: auto 0;
  @media (max-width: 451px) {
    width: 70%;
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
  width: 900px;
  margin:0 auto;
  text-align: left;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 451px) {
    height: 100%;
    flex-direction: column;
    width: 100%;
  }
`
export const DessertSeasonalTitleWrapper = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 6.5%;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    bottom: 3.5rem;
  }
`
export const DessertImage = styled(GatsbyImage)`
  margin-top: 6rem;
  width: 383px;
  height: 395px;
  margin-bottom: 6rem;
  @media (max-width: 451px) {
    width: 70%;
    height: 64vw;
    margin: 0 auto 3.5rem;
  }
`
export const FoodIntroWrapper = styled.div`
  margin-top: 6rem;
  @media (max-width: 451px) {
    margin-top: 3.5rem;
  }
`
export const FoodScrollMenuDesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  & h2:hover {
    color: ${color.PRIMARY_RED_ROUGE};
  }
  @media (max-width: 451px) {
    display: none;
  }
`
export const FoodScrollMenuMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & h2:hover {
    color: ${color.PRIMARY_RED_ROUGE};
  }
  @media (min-width: 451px) {
    display: none;
  }
`
export const MenuDuJourItemWrapper = styled.div`
  width: 60%;
  margin-bottom: ${props=>props.menus === "brunch" ? "1.75rem" : "3.5rem"};
  @media (max-width: 451px) {
    margin-bottom: ${props=>props.menus === "brunch" ? "0.75rem" : "1.75rem"};
  }
`
export const MenuDuJourTitleWrapper = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 2.25rem;
  @media (max-width: 451px) {
    margin-top: 1.75rem;
    margin-bottom: 1rem;
  }
`
export const DessertItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 451px) {
    margin-bottom: 1rem;
  }
`
export const DessertDrinkSectionWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 1rem;
  @media (max-width: 451px) {
  }
`
export const DessertDrinkSectionContainer = styled.div`
  align-self: flex-end;
  padding-top: 1.75rem;
  @media (max-width: 451px) {
    padding-left: 2.4rem;
  }
`

export const DessertDrinkSectionItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const DessertWrapper = styled(MenuDuJourContainer)`
  background-color: #D39C6E;
  padding-top: 3.5rem;
  padding-left: 5.5rem;
  padding-right: 5.25rem;
  @media (max-width: 451px) {
    padding-top: 1.75rem;
    margin: 0 auto;
    padding-left: 3.5rem;
    padding-right: 3.25rem;
    & h2{
      margin-top: 1.75rem;
    }
  }
`
export const FoodContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width : 776px;
  height: 1156px;
  align-items: center;
  background-color: ${color.SECONDARY_WHITE};
  margin-bottom: 6rem;
  @media (max-width: 451px) {
    width : 301px;
    height: 728px;
    margin: 0 auto 3.5rem;
    overflow-x: scroll;
  }
`

export const FoodItemWrapper = styled.div`
  width: 80%;
  padding: 0 3.5rem 0 2.5rem;
  margin-bottom: 2rem;
  @media (max-width: 451px) {
    margin-bottom: 1rem;
    padding: 0 1rem 0 0;
  }
`
export const FoodSectionItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const FoodTitleWrapper = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  @media (max-width: 451px) {
    margin-top: 1.75rem;
    margin-bottom: 1rem;
  }
`

export const FoodSeasonalTitleWrapper = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 6%;
  text-align: left;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    top: 1rem;
  }
`
export const BrunchHeadingWrapper = styled.div`
  margin-top: 3.5rem;
  @media (max-width: 451px) {
    margin-top: 0rem;
  }
`