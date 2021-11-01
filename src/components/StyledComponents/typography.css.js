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
  font-family: OggRegularItalic;
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
    margin-bottom: 24px;
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
  font-family: PitchRegular;
  color: ${props =>
    props.color === "white"
      ? color.SECONDARY_WHITE
      : props.color === "black"
      ? color.PRIMARY_RICH_BLACK
      : color.PRIMARY_RED_ROUGE};
  font-size: 16px;
  line-height: 22px;
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
  font-size: 20px;
  line-height: 26px;
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
  font-size: 20px;
  line-height: 26px;
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
    font-size: 1rem;
    margin-bottom: 2.35rem;
    line-height: 1.15;
  }
`
