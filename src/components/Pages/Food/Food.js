import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const { topTitleIeFood, seasonalTitleTopRight } = foodData

  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    gsap.fromTo(
      element.querySelector(".menuTop"),
      { opacity: 1 },
      {
        opacity: 1,

        maxWidth: 10,
        scrollTrigger: {
          trigger: element.querySelector(".menuTop"),
          start: " 30% ",
          end: "top -60%",
          pin: true,
        },
      }
    )
  }, [])

  const menuQuery = useStaticQuery(graphql`
    query PrivateDiningQuery1 {
      allContentfulMenuSection {
        edges {
          node {
            id
            sectionHeadingIeEntrees
            menuItems {
              menuItem
              menuItemPrice
              menuItemDescription
            }
          }
        }
      }
    }
  `)

  const menuData = menuQuery.allContentfulMenuSection.edges

  return (
    <div ref={ref} className="first-paragraph" style={{ position: "relative" }}>
      <FoodContainer>
        <FoodTitleWrapper>
          <Heading2 style={{ fontSize: "1.75rem" }}>{topTitleIeFood}</Heading2>
        </FoodTitleWrapper>
        {menuData.map((item, index) => (
          <FoodItemWrapper key={index}>
            <BC2 marginBottom="sm" bold>
              {item.node.sectionHeadingIeEntrees ? item.node.sectionHeadingIeEntrees : "No Heading"}
            </BC2>
            {item.node.menuItems.map((it, idx) => (
              <React.Fragment key={idx}>
                <FoodSectionItemWrapper>
                  <BC2 color="black" marginBottom="xs" bold>
                    {it.menuItem ? it.menuItem : "No Item"}
                  </BC2>
                  <BC2 color="black" marginBottom="xs" bold>
                    {it.menuItemPrice ? it.menuItemPrice : "No Price"}
                  </BC2>
                </FoodSectionItemWrapper>
                <BC2 color="black" marginBottom="sm">
                  {it.menuItemDescription ? it.menuItemDescription : "No Description"}
                </BC2>
              </React.Fragment>
            ))}
          </FoodItemWrapper>
        ))}
      </FoodContainer>
      <FoodSeasonalTitleWrapper
        className="menuTop"
        style={{
          maxWidth: `10px !important`,
        }}
      >
        <BC2 bold>{seasonalTitleTopRight}</BC2>
      </FoodSeasonalTitleWrapper>
    </div>
  )
}

export default Food
