import { Link } from "gatsby"
import React from "react"
import { BC1, Heading3 } from "../../StyledComponents/typography.css"
import { WeekdayItemWrapper } from "./landingPage.css"

const WeekdayItem = ({ day, description }) => {
  return (
    <WeekdayItemWrapper>
      <Heading3 style={{ width: "30%", fontWeight: "bold" }}>{day}</Heading3>
      <div style={{ width: "60%" }}>
        <BC1 marginBottom="md">{description}</BC1>
        <Link to="#" style={{ textDecoration: "none" }}>
          <BC1>Learn more...</BC1>
        </Link>
      </div>
    </WeekdayItemWrapper>
  )
}

export default WeekdayItem
