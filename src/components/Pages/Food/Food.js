import React, { useRef, useEffect } from "react"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
  FoodContainer,
  FoodItemWrapper,
  FoodSectionItemWrapper,
  FoodTitleWrapper,
  FoodSeasonalTitleWrapper,
} from "./FoodPage.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Food = ({ foodData }) => {
  const { topTitleIeFood, menuItems, seasonalTitleTopRight } = foodData

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      {opacity: 1},
      {
        opacity: 1,
      
       maxWidth: 10,
        scrollTrigger: {
          trigger: element.querySelector(".menuTop"),
          start: " 30% ",
          end: "top -60%",
          
          pin: true
   
        },
      }
    );}, []);

  return (
    <FoodContainer ref={ref}>
      <FoodTitleWrapper >
        <Heading2 style={{fontSize: "1.75rem"}}>{topTitleIeFood}</Heading2>
      </FoodTitleWrapper>
      {menuItems.map((item, index) =>
        index === 0 ? (
          <FoodItemWrapper key={index}>
            <FoodSectionItemWrapper>
              <BC2 style={{ color: "#800103" }} bold>
                {item.menuItems[0].menuItem}
              </BC2>
              <BC2 color="black" bold>
                {item.menuItems[0].menuItemPrice}PP
              </BC2>
            </FoodSectionItemWrapper>
          </FoodItemWrapper>
        ) : (
          <FoodItemWrapper key={index}>
            <BC2 marginBottom="sm" bold>
              {item.sectionHeadingIeEntrees}
            </BC2>
            {item.menuItems.map((it, idx) => (
              <React.Fragment key={idx}>
                <FoodSectionItemWrapper>
                  <BC2 color="black" marginBottom="xs" bold>
                    {it.menuItem}
                  </BC2>
                  <BC2 color="black" marginBottom="xs" bold>
                    {it.menuItemPrice}$$
                  </BC2>
                </FoodSectionItemWrapper>
                <BC2 color="black" marginBottom="sm">
                  {it.menuItemDescription}
                </BC2>
              </React.Fragment>
            ))}
          </FoodItemWrapper>
        )
      )}
      <FoodSeasonalTitleWrapper className="menuTop"
        style={{
          maxWidth: `10px !important`
        }}>
        <BC2 bold>{seasonalTitleTopRight}</BC2>
      </FoodSeasonalTitleWrapper>
    </FoodContainer>
  )
}

export default Food
