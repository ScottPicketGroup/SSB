import React from "react"
import {
  BC1,
  Heading3,
  RedDecorationLink,
} from "../../StyledComponents/typography.css"
import {
  RenderTextOverHiddenWrapper,
  WeekdayItemDescriptionWrapper,
  WeekdayItemWrapper,
} from "./landingPage.css"

const WeekdayItem = ({ day, description,showLearnMore }) => {
  return (
    <WeekdayItemWrapper>
      <Heading3 bold style={{ width: "30%" }}>
        {day}
      </Heading3>
      <WeekdayItemDescriptionWrapper>
        <RenderTextOverHiddenWrapper>
          <BC1 marginBottom="md">{description}</BC1>
        </RenderTextOverHiddenWrapper>
       {
         showLearnMore &&  <RedDecorationLink to="">
         <BC1 marginBottom="xs">Learn more…</BC1>
       </RedDecorationLink>
       }
      </WeekdayItemDescriptionWrapper>
    </WeekdayItemWrapper>
  )
}

export default WeekdayItem
