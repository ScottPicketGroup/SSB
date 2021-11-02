import React from "react"

import { BC1 } from "../../StyledComponents/typography.css"
import {
  WinesByTheGlassWrapper,
  WineSectionWrapper,
  WineSectionItemWrapper,
} from "./DrinksPage.css"

const WinesByTheGlass = ({ wineByTheGlassMenu }) => {
  const wineData = wineByTheGlassMenu.wineMenuSection
  return (
    <WinesByTheGlassWrapper>
      <BC1 color="red" style={{ fontWeight: "bold" }}>
        BY THE GLASS
      </BC1>
      {wineData.map((item, index) => (
        <WineSectionWrapper key={index}>
          <BC1 color="black" style={{ fontWeight: "bold" }}>
            {item.sectionHeadingIeRed}
          </BC1>
          {item.sectionMenuItems.map((i, idx) => (
            <WineSectionItemWrapper key={idx}>
              <BC1 color="black" style={{width: "50%"}}>{i.producer}</BC1>
              <BC1 color="black" style={{width: "45%"}}>{i.region}</BC1>
              <BC1 color="black" style={{width: "5%"}}>{i.price}</BC1>
            </WineSectionItemWrapper>
          ))}
        </WineSectionWrapper>
      ))}
    </WinesByTheGlassWrapper>
  )
}

export default WinesByTheGlass
