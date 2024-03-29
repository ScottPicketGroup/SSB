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
  justify-content: space-between;
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

const moveSlideshow = keyframes`
100% { 
  transform: translateX(-2025px);  
}
`

export const Logos = styled.div`
  display: flex;

  align-items: center;
  height: auto;
  padding: 1.65rem 0;
  border-top: white 1px solid;
  border-bottom: white 1px solid;

  svg,
  path,
  g {
    fill: #f9f9f4;
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
  fill: #f9f9f4;
  margin-right: 70px;
  svg {
    fill: #f9f9f4;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  & a {
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
    text-decoration-color: ${color.SECONDARY_WHITE};
  }
  @media (max-width: 451px) {
    width: 30vw;
    justify-content: space-evenly;
  }
`
export const PageLinks = styled.div`
  max-width: 20vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 451px) {
    max-width: 70vw;
  }
`
export const ServiceTime = styled.div`
  max-width: 30vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 451px) {
    max-width: 80vw;
  }
`
export const Lunch = styled.div`
  display: flex;
  line-height: 0 !important;
  align-items: end;
  text-align: left;
  margin-bottom: 0.5rem;
`
export const DayWrapper = styled.div`
  width: 14vw;
  text-align: left;
  @media (max-width: 451px) {
    width: 40vw;
  }
`
export const TimeWrapper = styled.div`
  text-align: left;
`
export const FooterFormWrapper = styled.div`
  background-color: ${color.SECONDARY_CREME};
  width: 100vw;
`
export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 3.5rem auto 3.5rem;
  // align-items: self-start;
  text-align: left;
  gap: 30px;
  @media (max-width: 451px) {
    flex-direction: column;
    text-align: center;
    margin: 1.75rem auto 1.75rem;
    gap: 0;
  }
`

export const FooterThankyouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 3.5rem auto 3.5rem;
  // align-items: self-start;
  text-align: left;
  gap: 30px;
  @media (max-width: 451px) {
    flex-direction: column;
    text-align: center;
    margin: 1.75rem auto 1.75rem;
    gap: 0;
  }
`

export const Input = styled.input`
  border-bottom: 1px solid #e88585;
  border-top: none;
  width: 30%;
  border-right: none;
  border-left: none;
  padding: 0.5rem 0;
  background-color: ${color.SECONDARY_CREME};
  background: transperant;
  font-family: PitchRegular;
  ::placeholder {
    color: #e88585;
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
    cursor: pointer;
  }
  @media (max-width: 451px) {
    align-self: center;
  }
`
export const FBC2 = styled(BC2)`
  color: #800103;
  width: 30%;
  font-weight: bold;
  @media (max-width: 451px) {
    width: 80%;
    margin: 0 auto;
  }
`
export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 1.5rem auto;
  text-align: left;
  @media (min-width: 450px) {
    display: none;
  }
`
export const MobileSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 1rem auto 1.75rem;
  text-align: left;
  @media (min-width: 450px) {
    display: none;
  }
`
export const FooterLink = styled(NoneDecorationLink)`
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${color.SECONDARY_WHITE};
  }
`
