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
        <BC2 bold color="black">
          {menuTitleTop}
        </BC2>
      </MenuDuJourTitleWrapper>
      {menuItems.map((item, index) => (
        <MenuDuJourItemWrapper key={index}>
          <BC2 bold color="black">
            {item.day}
          </BC2>
          <BC2 color="black">{item.menuItem}</BC2>
        </MenuDuJourItemWrapper>
      ))}
      <Heading2 marginBottom="md" color="black" style={{fontSize: "1.75rem"}}>
        {bottomTitle.substr(0, 1).toUpperCase() + bottomTitle.substr(1).toLowerCase()}
      </Heading2>
      <SeasonalTitleWrapper>
        <BC2 bold>{seasonalMenuTitle}</BC2>
      </SeasonalTitleWrapper>
    </MenuDuJourContainer>
  )
}

export default MenuDuJour
