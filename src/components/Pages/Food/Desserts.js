import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
  DessertContainer,
  DessertWrapper,
  DessertSeasonalTitleWrapper,
  DessertImage,
  DessertItemWrapper,
  DessertDrinkSectionWrapper,
  DessertDrinkSectionItemWrapper,
  DessertDrinkSectionContainer,
} from "./FoodPage.css"

const Desserts = ({ dessertData }) => {
  const { menuItems, bottomHeading, drinksSection, food_menu_page_content } =
    dessertData[0]
  return (
    <DessertContainer>
      <DessertImage
        image={getImage(food_menu_page_content[0].imageAdjacentToDessertMenu)}
        alt="dessert"
      />
      <DessertWrapper>
        {menuItems.map((item, index) => (
          <DessertItemWrapper key={index}>
            <DessertDrinkSectionItemWrapper>
              <BC2 color="black" style={{ fontWeight: "bold" }}>
                {item.menuItem}
              </BC2>
              <BC2 color="black" style={{ fontWeight: "bold" }}>
                {item.menuItemPrice}$$
              </BC2>
            </DessertDrinkSectionItemWrapper>

            <BC2 color="black">{item.menuItemDescription}</BC2>
          </DessertItemWrapper>
        ))}
        <DessertDrinkSectionContainer>
          {drinksSection.drinkMenuItems.map((item, index) => (
            <DessertDrinkSectionWrapper>
              <DessertDrinkSectionItemWrapper>
                <BC2 color="black" style={{ fontWeight: "bold" }}>
                  {item.menuItem}
                </BC2>
                <BC2 color="black" style={{ fontWeight: "bold" }}>
                  {item.menuItemPrice}$$
                </BC2>
              </DessertDrinkSectionItemWrapper>

              <BC2 color="black">{item.menuItemDescription}</BC2>
            </DessertDrinkSectionWrapper>
          ))}
        </DessertDrinkSectionContainer>

        <Heading2 marginTop="lg" marginBottom="md" color="black">
          {bottomHeading}
        </Heading2>
        <DessertSeasonalTitleWrapper>
          <BC2 style={{ fontWeight: "bold" }}>SPRING & SUMMER</BC2>
        </DessertSeasonalTitleWrapper>
      </DessertWrapper>
    </DessertContainer>
  )
}

export default Desserts
