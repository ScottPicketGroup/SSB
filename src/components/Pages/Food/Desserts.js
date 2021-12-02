import React, {useLayoutEffect, useRef} from "react"
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
import { gsap } from "gsap"

const Desserts = ({ dessertData }) => {
  const { menuItems, bottomHeading, drinksSection, food_menu_page_content } =
    dessertData[0]
  const ref = useRef(null)
  useLayoutEffect(() => {
    const element = ref.current

    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      { y: 0 },
      {
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".menuTop"),
          start: "top center",
          endTrigger: element.querySelector(".first-paragraph"),
          end: "bottom 92%",
          pin: true,
          markers: true
        },
      }
    )
  }, [])
  return (
    <DessertContainer ref={ref}>
      <DessertImage
        className="menuTop"
        image={getImage(food_menu_page_content[0].imageAdjacentToDessertMenu)}
        alt="dessert"
      />
      <DessertWrapper  className="first-paragraph">
        {menuItems.map((item, index) => (
          <DessertItemWrapper key={index}>
            <DessertDrinkSectionItemWrapper>
              <BC2 color="black" bold>
                {item.menuItem}
              </BC2>
              <BC2 color="black" bold>
                {item.menuItemPrice}$$
              </BC2>
            </DessertDrinkSectionItemWrapper>

            <BC2 color="black">{item.menuItemDescription}</BC2>
          </DessertItemWrapper>
        ))}
        <DessertDrinkSectionContainer>
          {drinksSection.drinkMenuItems.map((item, index) => (
            <DessertDrinkSectionWrapper key={index}>
              <DessertDrinkSectionItemWrapper>
                <BC2 color="black" bold>
                  {item.menuItem}
                </BC2>
                <BC2 color="black" bold>
                  {item.menuItemPrice}$$
                </BC2>
              </DessertDrinkSectionItemWrapper>

              <BC2 color="black">{item.menuItemDescription}</BC2>
            </DessertDrinkSectionWrapper>
          ))}
        </DessertDrinkSectionContainer>

        <Heading2
          marginTop="xl"
          marginBottom="md"
          color="black"
          style={{ fontSize: "1.75rem" }}
        >
          {bottomHeading}
        </Heading2>
        <DessertSeasonalTitleWrapper>
          <BC2 bold>SPRING & SUMMER</BC2>
        </DessertSeasonalTitleWrapper>
      </DessertWrapper>
    </DessertContainer>
  )
}

export default Desserts
