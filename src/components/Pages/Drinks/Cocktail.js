import React from "react"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
  MenuDuJourContainer,
  MenuDuJourItemWrapper,
  SeasonalTitleWrapper,
  CocktailContainer,
  NonAlcoholicContainer,
  NonAlcoholicItemWrapper,
  NonAlcoholicSeasonalTitleWrapper,
} from "./DrinksPage.css"

const Cocktail = ({ cocktailMenu, nonAlcoholicDrinksMenu }) => {
  const { menuHeadingBottom, menuItems, seasonHeading } = cocktailMenu
  const { backgroundImage, menuTitle, nonAlcoholicMenuItems } =
    nonAlcoholicDrinksMenu
  return (
    <CocktailContainer>
      <MenuDuJourContainer coffee>
        {menuItems.map((item, index) => (
          <MenuDuJourItemWrapper key={index} cocktail >
            <BC2 bold color="black">
              {item.menuItem}
            </BC2>
            <BC2 color="black">{item.menuItemDescription}</BC2>
          </MenuDuJourItemWrapper>
        ))}
        <Heading2 marginBottom="md" color="black" style={{fontSize: "1.75rem"}}>
          {menuHeadingBottom}
        </Heading2>
        <SeasonalTitleWrapper>
          <BC2 bold>{seasonHeading}</BC2>
        </SeasonalTitleWrapper>
      </MenuDuJourContainer>
      <NonAlcoholicContainer backgroundImage={backgroundImage.file.url}>
        <NonAlcoholicItemWrapper>
          <BC2 marginBottom="md" bold color="black">
            {menuTitle}
          </BC2>
          {nonAlcoholicMenuItems.map((item, index) => (
            <MenuDuJourItemWrapper key={index}>
              <BC2 bold color="black">
                {item.menuItem}
              </BC2>
              <BC2 color="black">{item.menuItemDescription}</BC2>
            </MenuDuJourItemWrapper>
          ))}
        </NonAlcoholicItemWrapper>
        <NonAlcoholicSeasonalTitleWrapper>
          <BC2 bold>{seasonHeading}</BC2>
        </NonAlcoholicSeasonalTitleWrapper>
      </NonAlcoholicContainer>
    </CocktailContainer>
  )
}

export default Cocktail
