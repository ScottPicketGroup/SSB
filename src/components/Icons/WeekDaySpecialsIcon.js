import React from "react"
import styled from "styled-components"
const WeekDaySpecialsIcon = ({ text }) => {
  return (
    <SVGWrapper xmlns="http://www.w3.org/2000/svg" viewBox="-110 200 500 500">
      <path
        id="circle"
        width="100%"
        height="100%"
        data-name="Path 6"
        d="M110,0A110,110,0,1,1,0,110,110,110,0,0,1,110,0Z"
        fill="none"
      />

      <TextWrapper>
        <textPath
          // alignment-baseline="top"
          xlinkHref="#circle"
          style={{
            fontFamily: `Ogg`,
            fill: `red`,
            stroke: `red`,
            fontSize: `3.5rem`,
            fontStyle: `italic`
          }}
        >
          {text}
        </textPath>
      </TextWrapper>
    </SVGWrapper>
  )
}

export default WeekDaySpecialsIcon

export const SVGWrapper = styled.svg`
  width: 286;
  height: 286;
`
export const TextWrapper = styled.text`
    transform: rotate(285deg);
    transform-origin: center;
    /* transform-origin: left; */
    transform: translate(-155px, 0px) rotate(174deg);
`
