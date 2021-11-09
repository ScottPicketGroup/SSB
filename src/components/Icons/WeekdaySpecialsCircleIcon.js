import React from "react"
import styled from 'styled-components';
import { BC1 } from "../../components/StyledComponents/typography.css"
const WeekdaySpecialsCircleIcon = ({ text }) => {
  return (
    <div>
      <SVGThing xmlns="http://www.w3.org/2000/svg" >
        <path
          id="curve"
          data-name="Path 6"
          d="M-5554.418-2058.066c0-44.471,42.006-87.118,88.3-88.943s88.943,44.471,88.943,88.943-42.647,87.118-88.943,88.943S-5554.418-2013.595-5554.418-2058.066Z"
          transform="translate(5554.918 2147.563)"
          fill="none"
          stroke="#707070"
          stroke-width="1"
        />

        <text width="500">
          <textPath
            alignment-baseline="top"
            xlinkHref="#curve"
            style={{
              fontFamily: `Ogg`,
              color: `#fff`,
              fontSize: `150%`,
            }}
          >
            <BC1>bla bla</BC1>bla bla
          </textPath>
        </text>
      </SVGThing>
    </div>
  )
}

export default WeekdaySpecialsCircleIcon

export const SVGThing = styled.svg`
display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`