import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import OggRegularItalic from "../../assetts/fonts/Ogg-RegularItalic.woff"
import PitchRegular from "../../assetts/fonts/Pitch-Regular.woff"
import { color } from "./variables"

export const Typography = createGlobalStyle`
  @font-face {
    font-family: 'OggRegularItalic';
    src: url(${OggRegularItalic});
    format: ("woff");
  }
  @font-face {
    font-family: 'PitchRegular';
    src: url(${PitchRegular}) ;
    format: ("woff");
  }
`
export const Heading1 = styled.h1`
  font-family: ${props =>
    props.font === "pitch" ? "PitchRegular" : "OggRegularItalic"};
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 30px;
  font-weight: 500;
  line-height: 46px;
  transition: color 0.2s ease;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};

  @media (max-width: 450px) {
    font-size: 26px;
    line-height: 32px;
  }
`

export const Heading2 = styled.h2`
  font-family: OggRegularItalic;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;

  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      case "none":
        return "0rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  @media (max-width: 450px) {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: ${props => (props.mbOnMob ? props.mbOnMob : "1rem")};
  }
`

export const Heading3 = styled.h3`
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 22px;
  line-height: 30px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};

  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  @media (max-width: 450px) {
    font-size: 16px;
    margin-bottom: 1rem;
    line-height: ${props => props.lineHeight};
    margin-top: ${props => props.marginTop};
  }
`

export const Heading4 = styled.h4`
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 16px;
  line-height: 21px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};

  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
`

export const BC1 = styled.p`
a {
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE :
       props.color === "red" 
      ? color.PRIMARY_RED_ROUGE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
}
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 16px;
  line-height: ${props => (props.lineHeight ? "0px" : "22px")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "2.75rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      case "openingHours":
        return "1.15rem"
      case "contactEmail":
        return "3.5rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  @media (max-width: 450px) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 1rem;
  }
`

export const BC2 = styled.p`
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 12px;
  line-height: 16px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  @media (max-width: 450px) {
    font-size: 10px;
    line-height: 12px;
  }
`

export const BC3 = styled.p`
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 10px;
  line-height: 26px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};

  @media (max-width: 450px) {
    font-size: 10px;
    line-height: 10px;
  }
`

export const BC4 = styled.p`
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 6px;
  line-height: 8px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};
`

export const FBC1 = styled.p`
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 0.75rem;
  line-height: ${props => (props.lineHeight ? "21px" : "22px")};
  font-weight: 500;
  margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
     
      case "sm":
        return "0"
      case "md":
        return "1.75rem"
        case "fmd":
        return "1.rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      case "lunch":
        return "-.4rem"
      case "address":
        return "-.4rem"
      case "addressLinetwo":
        return ".5rem"
      default:
        return "0"
    }
  }};
  margin-top: ${props => {
    switch (props.marginTop) {
      case "xs":
        return ".25rem"
      case "sm":
        return "1rem"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      default:
        return "0"
    }
  }};

  @media (max-width: 450px) {
    font-size: 10px;
    margin-bottom: ${props => {
    switch (props.marginBottom) {
      case "xs":
        return ".25rem"
        case "xsf":
        return ".5rem"
      case "sm":
        return "0"
      case "md":
        return "1.75rem"
      case "lg":
        return "3.5rem"
      case "xl":
        return "6rem"
      case "xxl":
        return "11.25rem"
      case "lunch":
        return "-.4rem"
      case "address":
        return "-.4rem"
      case "addressLinetwo":
        return ".5rem"
      default:
        return "1.25rem"
    }
  }};
    line-height: 1.15;
  }
`
export const FBC1External = styled(FBC1)`
  :hover {
    text-decoration: underline;
  }
`
export const FBC1First = styled(FBC1)`
  text-decoration: underline;
  text-underline-offset: 3px;
`
export const BBHeading2 = styled(Heading2)`
a {
  :hover {
    color: ${color.PRIMARY_RED_ROUGE};
  }
}
  line-height: 1.5;
  border-bottom: 1.5px solid;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
`
export const BBHeading3 = styled(Heading3)`
  line-height: 1.5;
  border-bottom: 1.5px solid;
`
export const NoneDecorationLink = styled(Link)`
  text-decoration: none;
`
export const RedDecorationLink = styled(Link)`
  text-decoration-color: ${color.PRIMARY_RED_ROUGE};
  text-underline-offset: 5px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
`
export const ExtRedDecorationLink = styled.a `
  text-decoration-color: ${color.PRIMARY_RED_ROUGE};
  text-underline-offset: 5px;
`
export const ExtWhiteDecorationLink = styled.a `
  text-decoration-color: white;
  text-underline-offset: 5px;
`

export const RenderBC1 = styled(BC1)`
  font-size: 16px;
`
