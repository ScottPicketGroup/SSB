import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "../../StyledComponents/variables"

export const MenuDuJourContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 482px;
  height: 842px;
  align-items: center;
  padding-top: 3.5rem;
  margin-bottom: 6rem;
  background-color: ${props =>
    props.coffee ? "#AC785B" : color.SECONDARY_WHITE};
  @media (max-width: 451px) {
    height: 500px;
    width: 254px;
    padding-top: 1.75rem;
    margin: 0 auto 1.75rem;
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
  width: 100%;
  @media (max-width: 451px) {
    height: 100%;
  }
`
export const BrunchHiddenOnMobImage = styled(GatsbyImage)`
  margin-top: 6rem;
  width: 45%;
  height: 35vw;
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
export const DrinksIntroWrapper = styled.div`
  margin-top: 6rem;
  @media (max-width: 451px) {
    margin-top: 3.5rem;
  }
`
export const DrinksScrollMenuDesktopWrapper = styled.div`
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
export const DrinksScrollMenuMobileWrapper = styled.div`
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
  margin-bottom: 3.5rem;
  @media (max-width: 451px) {
    margin-bottom: 1rem;
    width: ${props=>props.cocktail ? "80%" : "100%"};
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
export const WinesByTheGlassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`
export const WineSectionWrapper = styled.div`
  margin-bottom: 1.75rem;
`

export const WineSectionItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`
export const CocktailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 71%;
  @media(max-width: 451px){
    flex-direction: column;
    width: 100%;
  }
`
export const NonAlcoholicContainer = styled.div`
  position: relative;
  display: flex;
  width: 482px;
  height: 842px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 6rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 55% 50%;
  background-color: #AC785B;
  background-image: url("${props=>props.backgroundImage}");
  @media (max-width: 451px) {
    height: 500px;
    width: 254px;
    margin: 0 auto;
    background-position: 55% 50%;
  }
`
export const NonAlcoholicItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-self: flex-end;
  margin-right: 5.5rem;
  @media (max-width: 451px) {
    width: 48%;
    margin-right: 1rem;
  }
`
export const NonAlcoholicSeasonalTitleWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 6%;
  text-align: left;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    top: 3.5rem;
  }
`
export const BottomGatsByImage = styled(GatsbyImage)`
  width: 100%;
  height: 35vw;
  @media (max-width: 451px) {
    height: 65vw;
  }
`