import React, { useRef, useEffect } from "react"
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
  DessertDrinkContainer,
  DessertsImageWrapepr,
} from "./FoodPage.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const Desserts = ({ dessertData }) => {
  const {
    menuItems,
    bottomHeading,
    drinksSection,
    food_menu_page_content,
    seasonTitle,
  } = dessertData[0]
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      { y: 0 },
      {
        y: 425,
        scrollTrigger: {
          trigger: element,
          start: " top bottom",
          end: "bottom ",
          scrub: true,
        },
      }
    )
  }, [])
  return (
    <DessertContainer ref={ref}>
      <DessertsImageWrapepr>
        <div className="first-paragraph">
          <DessertImage
            className="first-paragraph"
            image={getImage(
              food_menu_page_content[0].imageAdjacentToDessertMenu
            )}
            alt="dessert"
          />
        </div>
      </DessertsImageWrapepr>

      <DessertsImageWrapepr mobile>
        <div className="first-paragraph">
          <DessertImage
            className="first-paragraph"
            image={getImage(
              food_menu_page_content[0].imageAdjacentToDessertMenu
            )}
            alt="dessert"
          />
        </div>
      </DessertsImageWrapepr>

      <DessertWrapper className="menu">
        <div style={{ width: "100%" }}>
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

              {item.menuItemDescription &&
              item.menuItemDescription.includes("<br/>") ? (
                <>
                  <BC2 color="black">
                    {item.menuItemDescription.slice(
                      0,
                      item.menuItemDescription.indexOf("<br/>")
                    )}
                  </BC2>
                  <BC2 color="black" marginBottom="sm">
                    {item.menuItemDescription
                      .slice(item.menuItemDescription.indexOf(">"), 500)
                      .replace(">", "")}
                  </BC2>
                </>
              ) : (
                <BC2 color="black" marginBottom="sm">
                  {item.menuItemDescription}
                </BC2>
              )}
            </DessertItemWrapper>
          ))}
          <DessertDrinkContainer>
            <div></div>
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
          </DessertDrinkContainer>
        </div>
        <Heading2
          // marginTop="xl"
          marginBottom="md"
          color="black"
          style={{ fontSize: "1.75rem" }}
        >
          {bottomHeading}
        </Heading2>
        {seasonTitle && (
          <DessertSeasonalTitleWrapper>
            <BC2 bold>{seasonTitle}</BC2>
          </DessertSeasonalTitleWrapper>
        )}
      </DessertWrapper>
    </DessertContainer>
  )
}

export default Desserts
