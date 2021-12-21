import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "../../StyledComponents/variables"

export const MenuDuJourContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 482px;
  align-items: space-between;
  justify-content: space-between;
  // padding: 3.5rem 2rem 0rem 2rem;
  padding: 3.5rem 3rem 0rem 3.5rem;
  margin-bottom: ${props => props.coffee ? "6rem" : "0"};
  background-color: ${props =>
  props.coffee ? "#AC785B" : color.SECONDARY_WHITE};
  @media (max-width: 451px) {
    // height: 500px;
    width: 80%;
    padding: 1.75rem 0 0;
    margin: 0 auto 1.75rem;
  }
`
export const SeasonalTitleWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 6%;
  text-align: left;
  -webkit-line-clamp: 1;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    top: 1.75rem;
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
    cursor: pointer;
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
  margin-bottom: 1.75rem;
  @media (max-width: 451px) {
    // margin: ${props => (props.cocktail && "0 1rem auto" )};
    // width: ${props => (props.cocktail ? "80%" : "100%")};
    width: 100%;
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
  width: 95%;
  @media(max-width: 451px) {
    width: 100%;
  }
`
export const WineSectionWrapper = styled.div`
  margin-bottom: 1.75rem;
`

export const WineSectionItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  @media(max-width: 451px){
    gap: 13px;
  }
`
export const CocktailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1050px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 70%;
  }
  @media (max-width: 451px) {
    flex-direction: column;
    width: 100%;
  }
`
export const NonAlcoholicContainer = styled.div`
  position: relative;
  display: flex;
  width: 482px;
  // height: 942px;
  align-items: center;
  justify-content: flex-end;

  background-repeat: no-repeat;
  background-size: 250%;
  background-position: 53% 0;
  background-color: #ac785b;
  background-image: url("${props => props.backgroundImage}");
  @media (max-width: 451px) {
    // height: 500px;
    width: 80%;
    margin: 0 auto;
    background-position: 55% 50%;
  }
`
export const NonAlcoholicItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-self: flex-end;
  margin-right: 3.5rem;
  position: absolute;
  bottom: 1.75rem;
  @media (max-width: 451px) {
    width: 48%;
    margin-right: 1rem;
    bottom: 0;
  }
`
export const NonAlcoholicSeasonalTitleWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 6%;
  text-align: left;
  -webkit-line-clamp: 1;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    top: 1.75rem;
  }
`
export const BottomGatsByImage = styled(GatsbyImage)`
  width: 100%;
  height: 28vw;
  @media (max-width: 451px) {
    height: 65vw;
  }
`
export const WinesByTheGlassContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto;
  }
`

export const ByGlassTitleWrapper = styled.div`
  opacity: 0;
  width: 5%;
  text-align: left;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
    display: none;
  }
`
export const VerticalByGlassTitleWrapper = styled.div`
  width: 5%;
  text-align: left;
  writing-mode: vertical-lr;
  text-orientation: upright;
  @media (max-width: 451px) {
  }
`
export const DesktopContainer = styled.div`
  @media (max-width: 451px) {
    display: none;
  }
`
export const MobileContainer = styled.div`
  @media (min-width: 451px) {
    display: none;
  }
`
export const ItemsWrapper = styled.div`
  @media (max-width: 451px) {
    width: 75%;
    margin: 0 auto;
  }
`