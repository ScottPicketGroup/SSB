import React, { useLayoutEffect, useRef } from "react"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
  MenuDuJourContainer,
  MenuDuJourItemWrapper,
  SeasonalTitleWrapper,
  CocktailContainer,
  NonAlcoholicContainer,
  NonAlcoholicItemWrapper,
  NonAlcoholicSeasonalTitleWrapper,
  DesktopContainer,
  MobileContainer,
} from "./DrinksPage.css"
import { gsap } from "gsap"

const Cocktail = ({ cocktailMenu, nonAlcoholicDrinksMenu }) => {
  const { menuHeadingBottom, menuItems, seasonHeading } = cocktailMenu
  const { backgroundImage, menuTitle, nonAlcoholicMenuItems } =
    nonAlcoholicDrinksMenu

  const ref = useRef(null)
  useLayoutEffect(() => {
    const element = ref.current

    gsap.fromTo(
      element.querySelector(".menuTop"),
      { y: 0 },
      {
        y: 100,
        scrollTrigger: {
          trigger: element.querySelector(".menuTop"),
          start: "top 95% ",
          end: "top 17%",
      
        },
      }
    )
  }, [])
  return (
    <CocktailContainer ref={ref} className="first-paragraph">
      <MenuDuJourContainer coffee>
        <div>
        {menuItems.map((item, index) => (
          <MenuDuJourItemWrapper key={index} cocktail>
            <BC2 bold color="black">
              {item.menuItem}
            </BC2>
            <BC2 color="black">{item.menuItemDescription}</BC2>
          </MenuDuJourItemWrapper>
        ))}
        </div>
        <Heading2
        marginTop="lg"
          marginBottom="md"
          color="black"
          style={{ fontSize: "1.75rem" }}
        >
          {menuHeadingBottom}
        </Heading2>
        <SeasonalTitleWrapper>
          <BC2 bold>{seasonHeading}</BC2>
        </SeasonalTitleWrapper>
      </MenuDuJourContainer>
      <DesktopContainer>
        <NonAlcoholicContainer
          backgroundImage={backgroundImage.file.url}
          className="menuTop"
        >
          <NonAlcoholicItemWrapper style={{
            transform: `translateY(-130px)`
          }}>
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
      </DesktopContainer>

      <MobileContainer>
        <NonAlcoholicContainer
          backgroundImage={backgroundImage.file.url}
          className="menuTop"
        >
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
      </MobileContainer>
    </CocktailContainer>
  )
}

export default Cocktail
