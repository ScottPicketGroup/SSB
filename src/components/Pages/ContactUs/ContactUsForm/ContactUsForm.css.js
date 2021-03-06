import styled from "styled-components"
import { color } from "../../../StyledComponents/variables"
export const ContactUsFormContainer = styled.div`
  margin-bottom: 6.75rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 0;
`
export const ContactFormRow = styled.div`
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2.25rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 0;
  }
`
export const InputContainer = styled.div`
  min-width: 48%;
  margin-bottom: 1.75rem;
  background: transperant;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`
export const TixboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.25rem;
  margin-bottom: 1.75rem;
`

export const LabelBC1 = styled.p`
  margin-bottom: ${props =>
    props.marginBottom ? props.marginBottom : `.5rem`};
  font-size: 1rem;
  line-height: 1.2;
  color: ${color.PRIMARY_RICH_BLACK};
  cursor: ${props => (props.link ? "pointer" : "text")};
  transition: color 2s ease-out;
  li {
    list-style-type: none;
  }

  &:hover {
  }
`

export const SubContainer = styled.div`
  width: 100%;

  overflow: visible;
  margin-top: 1rem;
  p {
    font-size: 1rem;
  }
`

export const SignUp = styled.form`
  font-size: 1.25rem;

  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }

  display: flex;
`
export const Input = styled.input`
  width: 100%;
  height: 1.75rem;
  background: rgba(255, 255, 255, 0);
  border: none;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  line-height: none;
  border-bottom: 1px solid
    ${props => (props.err ? "#CB0000" : color.PRIMARY_RICH_BLACK)};
  ::placeholder {
    color: ${props => (props.err ? "#CB0000" : color.PRIMARY_RICH_BLACK)}};
    font-size: 1rem;
    background: transperant;
    font-family: PitchRegular;
    @media(max-width: 451px){
      font-size: 10px;
    }
  }
  :focus {
    outline: none;
    background: transparent;
    font-family: PitchRegular;
    height: 3rem;
    font-size: 150%;
    color: ${color.PRIMARY_RICH_BLACK};
  }
  :valid {
    font-size: 1rem;
    background: transperant;
    font-family: PitchRegular;
    color: ${color.PRIMARY_RICH_BLACK};
  }
  ::-moz-focus-outer {
    color: ${color.PRIMARY_RICH_BLACK};
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 1rem;
    font-size: 10px;
  }
`

export const InputMessage = styled.textarea`
  width: 100%;
  height: 11.25rem;
  font-size: 16px;
  font-family: PitchRegular;
  background: rgba(255, 255, 255, 0);
  border: none;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  line-height: none;
  margin-bottom: 1.75rem;
  border-bottom: 1px solid
    ${props => (props.err ? "#CB0000" : color.PRIMARY_RICH_BLACK)};
  overflow: hidden;

  ::placeholder {
    font-size: 16px;
    margin-bottom: 10rem;
    font-family: PitchRegular;
    color: ${props => (props.err ? "#CB0000" : color.PRIMARY_RICH_BLACK)};
  }
  :focus {
    outline: none;
    background: transparent;
    font-family: PitchRegular;
    height: 3rem;
    font-size: 150%;
  }
  :valid {
    color: ${color.PRIMARY_RICH_BLACK};
    font-size: 1rem;
    font-family: PitchRegular;
  }
  ::-moz-focus-outer {
    color: ${color.PRIMARY_RICH_BLACK};
  }
  @media(max-width: 451px){
    font-size: 10px;
  }
`

export const SignUpSubmit = styled.button`
  background: none;
  height: 46px;
  font-family: tTNormsProNormal;
  padding: 0.5rem 2.5rem;
  border: 1px solid ${props => (props.err ? "red" : "#153e35")};
  color: ${props => (props.err ? "red" : "#153e35")};
  margin-top: 1.75rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  width: 13rem;
  :hover {
    opacity: 75%;
    background: ${props => (props.err ? "red" : "#153e35")};
    color: ${props =>
      props.err ? color.PRIMARY_RICH_BLACK : color.PRIMARY_RICH_BLACK};
  }
  p {
    font-family: tTNormsPro;
  }
`
export const Button = styled.button`
  background: transparent;
  border: 1px solid ${color.PRIMARY_RICH_BLACK};
  width: ${props => (props.submit ? "35%" : "")};
  color: ${color.PRIMARY_RICH_BLACK};
  padding: 0.5rem 0.75rem;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #2b3c31;
    background: white;
  }
  p {
    margin-bottom: 0;
  }
`
