import React from "react"
import { BC1, BC2, Heading2 } from "../../StyledComponents/typography.css"
import { MenuDuJourContainer, SeasonalTitleWrapper } from "./FoodPage.css"

const MenuDuJour = ({ menuDuJourData }) => {
  const {
    menuTitleTop,
    menuItems,
    bottomTitle,
    scrollToMenuItem,
    seasonalMenuTitle,
  } = menuDuJourData
  return (
    <MenuDuJourContainer>
      <BC1 marginTop="lg" style={{ marginBottom: "2.25rem" }}>
        {menuTitleTop}
      </BC1>
      {menuItems.map((item, index) => (
        <div key={index} style={{ width: "80%", marginBottom: "3.25rem" }}>
          <BC1>{item.day}</BC1>
          <BC1>{item.menuItem}</BC1>
        </div>
      ))}
      <Heading2 marginBottom="md">{bottomTitle}</Heading2>
      <BC2>{scrollToMenuItem}</BC2>
      <SeasonalTitleWrapper>
        <BC1>{seasonalMenuTitle}</BC1>
      </SeasonalTitleWrapper>
    </MenuDuJourContainer>
  )
}

export default MenuDuJour
