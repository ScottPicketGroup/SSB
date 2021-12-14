import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { BC1 } from "../StyledComponents/typography.css"

export const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  padding: 3.5rem 8rem 1.75rem;

  @media (max-width: 756px) {
    padding: 1rem 2rem 3.5rem;
  }

  @media (max-width: 451px) {
    padding: 1rem 1.5rem 3.5rem;
  }
`
export const MenuCancelIconWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 1.75rem;
  z-index: 10;
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  justify-content: space-between;
`
export const MenuLogoWrapper = styled.div`
  margin: 6rem auto;
  width: 100%;
  @media (max-width: 451px) {
    margin-top: 3.5rem;
  }
`
export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 70%;
  display: ${props => (props.giftOpen ? "none" : "block")};
`
export const HeaderLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;

  a {
    text-decoration: none;
  }

  @media (max-width: 451px) {
    a {
      width: 146px;
      text-align: center;
    }
  }
`

export const GiftVouchersItemContainer = styled.div`
  width: 66vw;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 451px) {
    flex-direction: column;
    width: 90vw;
  }
`
export const GiftVouchersItemWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 451px) {
    width: 90vw;
    padding-top: 0.75rem;
  }
`
export const GiftItemImage = styled(GatsbyImage)`
  width: 30vw;
  height: 20vw;
  margin-top: 1rem;
  @media (max-width: 451px) {
    width: 80vw;
    height: 58vw;
    margin-top: 2.5rem;
  }
`
export const MobileHiddenGiftItemImage = styled(GatsbyImage)`
  width: 30vw;
  height: 20vw;
  margin-top: 1rem;
  @media (max-width: 451px) {
    display: none;
  }
`
export const GiftVouchersContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  display: ${props => (props.giftOpen ? "block" : "none")};
`
export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  margin-bottom: 6rem;
  margin-top: 3.5rem;
`
export const ReservationMenuWrapper = styled.div`
  @media (max-width: 451px) {
    width: 20%;
  }
`

export const HamburgerMenuWrapper = styled.div`
  @media (max-width: 451px) {
    width: 10%;
  }
`

export const BookATableText = styled(BC1)`
  font-weight: bold;
  @media (max-width: 451px) {
    margin-bottom: 0.5rem;
  }
`
