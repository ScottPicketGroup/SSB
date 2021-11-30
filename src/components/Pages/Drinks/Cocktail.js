import React, { useLayoutEffect, useRef } from "react"
import { Parallax } from "react-scroll-parallax"
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
import { gsap } from "gsap"

const Cocktail = ({ cocktailMenu, nonAlcoholicDrinksMenu }) => {
  const { menuHeadingBottom, menuItems, seasonHeading } = cocktailMenu
  const { backgroundImage, menuTitle, nonAlcoholicMenuItems } =
    nonAlcoholicDrinksMenu

    const ref = useRef(null)
  // useLayoutEffect(() => {
  //   const element = ref.current

  //   gsap.fromTo(
  //     element.querySelector(".first-paragraph"),
  //     { y: 0 },
  //     {
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: element.querySelector(".menuTop"),
  //         start: " 27.5% ",
  //         end: "top 0%",
  //         pin: false,
  //       },
  //     }
  //   )
  // }, [])
  return (
    <CocktailContainer>
      <Parallax
        y={[15, 0]}
        styleOuter={{
          marginTop: `-5rem`,
        }}
      >
        <MenuDuJourContainer coffee ref={ref} className="first-paragraph">
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
      </Parallax>
      <Parallax
        y={[15, 0]}
        styleOuter={{
          marginTop: `-5rem`,
        }}
      >
        <NonAlcoholicContainer backgroundImage={backgroundImage.file.url} className="menuTop">
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
      </Parallax>
    </CocktailContainer>
  )
}

export default Cocktail
