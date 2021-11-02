import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BC1, Heading2 } from "../../StyledComponents/typography.css"
import {
  DessertContainer,
  MenuDuJourContainer,
  DessertSeasonalTitleWrapper,
  DessertImage,
} from "./FoodPage.css"

const Desserts = ({ dessertData, hiddenOnMobImg }) => {
  const { menuItems, bottomHeading, drinksSection } = dessertData[0]
  return (
    <DessertContainer>
      <DessertImage  image={getImage(hiddenOnMobImg)} alt="dessert" />
      <MenuDuJourContainer coffee style={{paddingTop: "3.5rem", paddingLeft: "5.5rem",paddingRight:"5.25rem"}}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "3.25rem", width: "80%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <BC1>{item.menuItem}</BC1>
              <BC1>{item.menuItemPrice}$$</BC1>
            </div>

            <BC1>{item.menuItemDescription}</BC1>
          </div>
        ))}
        <div style={{paddingLeft: "4.4rem"}}>
        {drinksSection.drinkMenuItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "3.25rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <BC1>{item.menuItem}</BC1>
              <BC1>{item.menuItemPrice}$$</BC1>
            </div>

            <BC1>{item.menuItemDescription}</BC1>
          </div>
        ))}
        </div>

        <Heading2 marginBottom="md">{bottomHeading}</Heading2>
        <DessertSeasonalTitleWrapper>
          <BC1 >SPRING & SUMMER</BC1>
        </DessertSeasonalTitleWrapper>
      </MenuDuJourContainer>
    </DessertContainer>
  )
}

export default Desserts
