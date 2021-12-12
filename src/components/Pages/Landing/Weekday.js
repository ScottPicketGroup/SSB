import React from "react"
import {
  WeekdayItemsWrapper,
  WeekdayWrapper,
  CircleImageWrapper,
  WeekdayHeadingWrapper
} from "./landingPage.css"
import WeekdayItem from "./WeekdayItem"
import WeekdaySpecialsIcon from "../../Icons/WeekDaySpecialsIcon"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { Heading1 } from "../../StyledComponents/typography.css"

const Weekday = ({ data }) => {
  // const isSafari =
  //   /constructor/i.test(window.HTMLElement) ||
  //   (function (p) {
  //     return p.toString() === "[object SafariRemoteNotification]"
  //   })(
  //     !window["safari"] ||
  //       (typeof window["safari"] !== "undefined" &&
  //         window["safari"].pushNotification)
  //   )
  return (
    <SectionContainer marginBottom="xl" column>
     
      <WeekdayWrapper>
        <CircleImageWrapper>
          <WeekdaySpecialsIcon text={data.circularMenuText} />
        </CircleImageWrapper>
        <WeekdayItemsWrapper>
      
        <Heading1 font="pitch">{data.sectionHeading}</Heading1>
    
          {data.menuDuJourMenuItems.map((item, index) => (
            <WeekdayItem
              key={index}
              day={item.day}
              description={item.menuItem}
              showLearnMore={item.showLearnMore}
            />
          ))}
        </WeekdayItemsWrapper>
      </WeekdayWrapper>
    </SectionContainer>
  )
}

export default Weekday
