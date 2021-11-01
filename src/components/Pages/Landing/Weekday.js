import React from "react"
import { WeekdayItemsWrapper } from "./landingPage.css"
import WeekdayItem from "./WeekdayItem"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { StaticImage } from "gatsby-plugin-image"

const Weekday = ({ data }) => {
  return (
    <SectionContainer marginBottom="xxl">
      <div>
        <StaticImage
          src="../../../images/weekday-icon.png"
          alt="weekday"
          width={400}
        />
      </div>
      <WeekdayItemsWrapper>
        {data.map((item, index) => (
          <WeekdayItem
            key={index}
            day={item.day}
            description={item.description}
          />
        ))}
      </WeekdayItemsWrapper>
    </SectionContainer>
  )
}

export default Weekday
