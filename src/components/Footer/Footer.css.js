import styled, { keyframes } from "styled-components"
import { color } from "../StyledComponents/variables"
import { BC2, NoneDecorationLink } from "../StyledComponents/typography.css"
export const FooterWrapper = styled.div`
  width: 100%;
  background: ${color.PRIMARY_RED_WINE};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const FooterItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3.5rem 6% 0 3%;

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 2.65rem 1rem 6rem 1rem;
  }
`

export const FooterLinksGrid = styled.div`
  width: 78%;
  padding-bottom: 8.65rem;
  display: flex;
  @media (max-width: 450px) {
    padding-bottom: 1.5rem;
    display: none;
  }
`

export const FooterLinksColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    margin-bottom: 1.5rem;
  }
`

// export const FooterLink = styled(Link)`
//   color: white;
//   margin-bottom: ${props => {
//     switch (props.marginBottom) {
//       case "sm":
//         return ".75rem"
//       case "md":
//         return "1.25rem"
//       case "lg":
//         return "3.75rem"
//       case "xl":
//         return "8rem"
//       case "xxl":
//         return "9.63rem"
//       default:
//         return "0"
//     }
//   }};
//   margin-top: ${props => {
//     switch (props.marginTop) {
//       case "sm":
//         return "1rem"
//       case "md":
//         return "1.5rem"
//       case "lg":
//         return "3.75rem"
//       case "xl":
//         return "8rem"
//       case "xxl":
//         return "100%"
//       default:
//         return "0"
//     }
//   }};
//   :hover {
//     font-family: bold;
//   }
//   @media (max-width: 450px) {
//     font-size: 1rem;
//     margin-bottom: 2.35rem;
//     line-height: 1.15;
//   }
// `

const moveSlideshow = keyframes`
100% { 
  transform: translateX(-2025px);  
}
`

export const Logos = styled.div`
  background-color: rgba(128, 1, 3, 0.9);
  display: flex;
  width: 4800px;
  align-items: center;
  height: auto;
  padding: 1.65rem 0;
  border-top: white 1px solid;
  border-bottom: white 1px solid;
  transform: translate3d(0, 0, 0);
  animation-name: ${moveSlideshow};
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg,
  path,
  g {
    fill: #ffffff;
  }

  /* @media screen and (max-width: 450px) {
    .slick-list {
      width: 1500px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  } */
  @media (max-width: 450px) {
    padding: 20px 0;
  }
`
export const Logo = styled.div`
  fill: #ffffff;
  margin-right: 70px;
  svg {
    fill: #ffffff;
  }
`

export const SocialLinks = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-evenly;
  @media(max-width: 451px){
    width: 30vw;
  }
`
export const PageLinks = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-width: 451px){
    width: 50vw;
  }
`
export const ServiceTime = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-width: 451px){
    width: 70vw;
  }
`
export const Lunch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  text-align: left;
`
export const DayWrapper = styled.div`
  width: 45%;
  text-align: left;
`
export const TimeWrapper = styled.div`
  width: 45%;
  text-align: left;
`
export const FooterFormWrapper = styled.div`
  background-color: ${color.SECONDARY_CREME};
  width: 100vw;
`
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 3.5rem auto 3.5rem;
  align-items: self-start;
  text-align: left;
  @media(max-width: 451px){
    flex-direction: column;
    text-align: center;
    margin: 1.75rem auto 1.75rem;
  }
`

export const Input = styled.input`
  border-bottom: 1px solid #E88585;
  border-top: none;
  width: 30%;
  border-right: none;
  border-left: none;
  padding: 0.5rem 0;
  background-color: ${color.SECONDARY_CREME};
  background: transperant;
  font-family: PitchRegular;
  ::placeholder {
    color: #E88585;
    font-size: 12px;
    background: transperant;
    font-family: PitchRegular;
  }
  :focus {
    outline: none;
    background: transparent;
    font-family: PitchRegular;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 1rem auto;
  }
`
export const Button = styled.button`
  background: transparent;
  border: none;
  width: ${props => (props.submit ? "35%" : "")};
  color: ${color.PRIMARY_RICH_BLACK};
  padding: 0.5rem 0.75rem;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #2b3c31;
    background: white;
  }
  @media(max-width: 451px){
    align-self: center;
  }
`
export const FBC2 = styled(BC2)`
  color: #800103;
  width: 30%;
  font-weight: bold;
  @media(max-width: 451px){
    width: 80%;
    margin: 0 auto;
  }
`
export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 3.5rem auto 6rem;
  text-align: left;
  @media(min-width: 450px){
    display: none;
  }
`
export const MobileSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 1rem auto 1.75rem;
  text-align: left;
  @media(min-width: 450px){
    display: none;
  }
`
export const FooterLink = styled(NoneDecorationLink)`
  &:hover{
    text-decoration: underline;
    text-decoration-color: ${color.SECONDARY_WHITE};
  }
`