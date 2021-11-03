import styled from "styled-components"
import { color } from "../../StyledComponents/variables"

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  //   align-items: center;
  @media (max-width: 451px) {
    width: 100%;
  }
`
export const ContactUsContainer = styled.div`
  display: flex;
  width: 64vw;
  justify-content: space-between;
  @media (max-width: 451px) {
    width: 90%;
    margin: 0 auto;
  }
`
export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 451px) {
    display: none;
  }
`
export const DesktopHeadingWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 3.5rem;
  text-align: left;
  @media (max-width: 451px) {
    display: none;
  }
`
export const MobileHeadingWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 3.5rem;
  margin-top: 3.5rem;
  text-align: center;
  color: ${color.PRIMARY_RED_ROUGE};
  @media (min-width: 451px) {
    display: none;
  }
`