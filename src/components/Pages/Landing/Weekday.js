import React from "react"
import {
  WeekdayItemsWrapper,
  WeekdayWrapper,
  CircleImageWrapper,
} from "./landingPage.css"
import WeekdayItem from "./WeekdayItem"
import WeekdaySpecialsIcon from "../../Icons/WeekDaySpecialsIcon"
import { SectionContainer } from "../../StyledComponents/containers.css"

const Weekday = ({ data }) => {
  return (
    <SectionContainer marginBottom="xxl">
      <WeekdayWrapper>
        <CircleImageWrapper>
          {/* <StaticImage
            src="../../../images/weekday-icon.png"
            alt="weekday"
            width={400}
          /> */}
          <WeekdaySpecialsIcon text={data.circularMenuText}/>
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
