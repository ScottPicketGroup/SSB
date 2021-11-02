import React from "react"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { BBHeading2 } from "../../StyledComponents/typography.css"
import { FoodScrollMenuDesktopWrapper, FoodScrollMenuMobileWrapper } from "./FoodPage.css"

const FoodScrollMenu = () => {
  return (
    <SectionContainer marginBottom="xl" centered={true} red={true} full={true}>
      <FoodScrollMenuDesktopWrapper>
          <BBHeading2 color="white">Menu do Jour</BBHeading2>
          <BBHeading2 color="white">Brunch</BBHeading2>
          <BBHeading2 color="white">Lunch & Dinner</BBHeading2>
      </FoodScrollMenuDesktopWrapper>
      <FoodScrollMenuMobileWrapper>
          <BBHeading2 color="white">Menu do Jour</BBHeading2>
          <BBHeading2 color="white">Brunch</BBHeading2>
          <BBHeading2 color="white">Lunch & Dinner</BBHeading2>
      </FoodScrollMenuMobileWrapper>
    </SectionContainer>
  )
}

export default FoodScrollMenu
