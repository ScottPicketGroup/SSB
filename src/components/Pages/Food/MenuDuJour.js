import React from "react"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
  MenuDuJourContainer,
  MenuDuJourItemWrapper,
  MenuDuJourTitleWrapper,
  SeasonalTitleWrapper,
} from "./FoodPage.css"

const MenuDuJour = ({ menuDuJourData }) => {
  const { menuTitleTop, menuItems, bottomTitle, seasonalMenuTitle } =
    menuDuJourData
  return (
    <MenuDuJourContainer>
      <MenuDuJourTitleWrapper>
        <BC2 style={{ fontWeight: "bold" }} color="black">
          {menuTitleTop}
        </BC2>
      </MenuDuJourTitleWrapper>
      {menuItems.map((item, index) => (
        <MenuDuJourItemWrapper key={index}>
          <BC2 style={{ fontWeight: "bold" }} color="black">
            {item.day}
          </BC2>
          <BC2 color="black">{item.menuItem}</BC2>
        </MenuDuJourItemWrapper>
      ))}
      <Heading2 marginTop="xl" marginBottom="md" color="black">
        {bottomTitle}
      </Heading2>
      {/* <BC2 color="black">{scrollToMenuItem}</BC2> */}
      <SeasonalTitleWrapper>
        <BC2 style={{ fontWeight: "bold" }}>{seasonalMenuTitle}</BC2>
      </SeasonalTitleWrapper>
    </MenuDuJourContainer>
  )
}

export default MenuDuJour
