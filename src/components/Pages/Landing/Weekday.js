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
  const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]"
    })(
      !window["safari"] ||
        (typeof window["safari"] !== "undefined" &&
          window["safari"].pushNotification)
    )
  return (
    <SectionContainer marginBottom="xl">
      <WeekdayWrapper>
        {isSafari ? (
          <CircleImageWrapper>
            {/* <WeekdaySpecialsIcon text={data.circularMenuText} /> */}
          </CircleImageWrapper>
        ) : (
          <CircleImageWrapper>
            <WeekdaySpecialsIcon text={data.circularMenuText} />
          </CircleImageWrapper>
        )}

        <WeekdayItemsWrapper>
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


