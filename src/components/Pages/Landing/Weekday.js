import React from "react"
import {
  WeekdayItemsWrapper,
  WeekdayWrapper,
  CircleImageWrapper,
} from "./landingPage.css"
import WeekdayItem from "./WeekdayItem"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { StaticImage } from "gatsby-plugin-image"

const Weekday = ({ data }) => {
  return (
    <SectionContainer marginBottom="xxl">
      <WeekdayWrapper>
        <CircleImageWrapper>
          <StaticImage
            src="../../../images/weekday-icon.png"
            alt="weekday"
            width={400}
          />
        </CircleImageWrapper>
        <WeekdayItemsWrapper>
          {data.menuDuJourMenuItems.map((item, index) => (
            <WeekdayItem
              key={index}
              day={item.day}
              description={item.menuItem}
            />
          ))}
        </WeekdayItemsWrapper>
      </WeekdayWrapper>
    </SectionContainer>
  )
}

export default Weekday
