import React from "react"
import styled from 'styled-components';
const WeekDaySpecialsIcon = ({text}) => {
  return (
   
<SVGWrapper xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 220 200">
  <path id="circle" data-name="Path 6" d="M-5447.778-2375.829c0-38.4,38.4-76.8,76.8-76.8s76.8,38.4,76.8,76.8-38.4,76.8-76.8,76.8S-5447.778-2337.429-5447.778-2375.829Z" transform="translate(5481 2478)" fill="none" stroke="none" stroke-width="1"/>
  
  <text width="500"
   style={{
  
    transform: `rotate(-89deg)`,
    transformOrigin: `center`
  }}
  >
          <textPath
            alignment-baseline="top"
            xlinkHref="#circle"
            style={{
              fontFamily: `Ogg`,
              fill: `red`,
              stroke: `red`,
              fontSize: `150%`,
              
            }}
          >
     {text}
          </textPath>
        </text>
</SVGWrapper>

  
   
  )
}

export default WeekDaySpecialsIcon

export const SVGWrapper = styled.svg`
width: 286;
height: 286;
`