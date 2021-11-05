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
      <BC1 color="red" bold>
        BY THE GLASS
      </BC1>
      {wineData.map((item, index) => (
        <WineSectionWrapper key={index}>
          <BC1 color="black" bold>
            {item.sectionHeadingIeRed}
          </BC1>
          {item.sectionMenuItems.map((i, idx) => (
            <WineSectionItemWrapper key={idx}>
              <BC1 color="black" style={{width: "50%", fontSize: "0.5rem"}}>{i.producer}</BC1>
              <BC1 color="black" style={{width: "45%", fontSize: "0.5rem"}}>{i.region}</BC1>
              <BC1 color="black" style={{width: "5%", fontSize: "0.5rem"}}>{i.price}</BC1>
            </WineSectionItemWrapper>
          ))}
        </WineSectionWrapper>
      ))}
    </WinesByTheGlassWrapper>
  )
}

export default WinesByTheGlass
