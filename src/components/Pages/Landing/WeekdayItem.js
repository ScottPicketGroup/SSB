import { Link } from "gatsby"
import React from "react"
import { BC1, Heading3 } from "../../StyledComponents/typography.css"
import {
  RenderTextOverHiddenWrapper,
  WeekdayItemWrapper,
} from "./landingPage.css"
import { color } from "../../StyledComponents/variables"

const WeekdayItem = ({ day, description }) => {
  return (
    <WeekdayItemWrapper>
      <Heading3 style={{ width: "30%", fontWeight: "bold" }}>{day}</Heading3>
      <div style={{ width: "60%" }}>
        <RenderTextOverHiddenWrapper>
          <BC1 marginBottom="md">{description}</BC1>
        </RenderTextOverHiddenWrapper>
        <Link to="#" style={{ textDecorationColor: color.PRIMARY_RED_ROUGE }}>
          <BC1>Learn more...&nbsp;&nbsp;</BC1>
        </Link>
      </div>
    </WeekdayItemWrapper>
  )
}

export default WeekdayItem
