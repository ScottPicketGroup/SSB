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
import { ScrollTrigger } from "gsap/ScrollTrigger"
const Desserts = ({ dessertData }) => {
  const { menuItems, bottomHeading, drinksSection, food_menu_page_content } =
    dessertData[0]
    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {
      const element = ref.current;
  
      ScrollTrigger.create({
        trigger: element.querySelector(".image"),
        start: "center 59%",
        endTrigger: element.querySelector(".menu"),
        end: "bottom 88%",
        scrub: 1,
        pin: true,
      })
      }, []);
  return (
    <DessertContainer ref={ref}>
      <DessertImage
        className="image"
        image={getImage(food_menu_page_content[0].imageAdjacentToDessertMenu)}
        alt="dessert"
      />
      <DessertWrapper  className="menu">
        {menuItems.map((item, index) => (
          <DessertItemWrapper key={index}>
            <DessertDrinkSectionItemWrapper>
              <BC2 color="black" bold>
                {item.menuItem}
              </BC2>
              <BC2 color="black" bold>
                {item.menuItemPrice}
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
                  {item.menuItemPrice}
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
