import React, { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useStaticQuery, graphql } from "gatsby"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
  MenuDuJourContainer,
  BrunchContainer,
  BrunchFirstWrapper,
  BrunchSecondWrapper,
  BrunchHiddenOnMobImage,
  BrunchHorizontalImageWrapper,
  BrunchVerticalImageWrapper,
  MenuDuJourItemWrapper,
  BrunchHeadingWrapper,
  BrunchHorizontalImage
} from "./FoodPage.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
const Brunch = ({ brunchData, hiddenOnMobImg }) => {
  const data = useStaticQuery(graphql`
    query brunchMenuImages {
      allContentfulFoodMenuPageContent {
        edges {
          node {
            vertImgUnderMenu {
              id
              gatsbyImageData(aspectRatio: 0.8)
            }
            horizontalImageUnderFoodMenu {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const { vertImgUnderMenu, horizontalImageUnderFoodMenu } =
    data.allContentfulFoodMenuPageContent.edges[0].node
  const { menuLogo, menuItems, bottomMenuTitle } = brunchData
  const ref = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const element = ref.current

    ScrollTrigger.create({
      trigger: element.querySelector(".image"),
      start: "center 59%",
      endTrigger: element.querySelector(".menu"),
      end: "bottom 90.5%",
      scrub: 1,
      pin: true,
    })
  }, [])

  return (
    <BrunchContainer ref={ref}>
      <BrunchFirstWrapper>
        <MenuDuJourContainer menus="brunch" className="menu">
          <div>
            <GatsbyImage
              image={getImage(menuLogo)}
              style={{ margin: "1rem 1rem 3.5rem", overflow: "visible" }}
              alt="menu-dujour"
            />
            {menuItems.map((item, index) => (
              <MenuDuJourItemWrapper key={index} menus="brunch">
                <BC2 color="black" bold>
                  {item.menuItem }  
                  {item.menuPrice ? (`&#160;` + item.menuPrice) : null}
                </BC2>
                {
                  item.menuItemDescription && item.menuItemDescription.includes('<br/>') ? (
                    <>
                    <BC2 color="black">
                      {item.menuItemDescription.slice(0, item.menuItemDescription.indexOf('<br/>'))}
                    </BC2>
                    <BC2 color="black" marginBottom="sm">
                      {item.menuItemDescription
                      .slice(item.menuItemDescription
                      .indexOf('>'), 500)
                      .replace('>', '')}
                    </BC2>
                    </>
                  ) :
                  <BC2 color="black" marginBottom="sm">
                    {item.menuItemDescription}
                  </BC2>
                }
              </MenuDuJourItemWrapper>
            ))}
          </div>
          <BrunchHeadingWrapper>
            <Heading2
              marginBottom="md"
              style={{ fontSize: "1.75rem" }}
              color="black"
            >
              {bottomMenuTitle}
            </Heading2>
          </BrunchHeadingWrapper>
        </MenuDuJourContainer>

        <BrunchHiddenOnMobImage
          className="image"
          image={getImage(hiddenOnMobImg)}
          alt="brunch-hidden"
        />
      </BrunchFirstWrapper>
      <BrunchSecondWrapper>
        <BrunchVerticalImageWrapper>
          <GatsbyImage
            image={getImage(vertImgUnderMenu)}
            style={{
              margin: "1rem 1rem 1.75rem",
              overflow: "visible",
              aspectRatio: `3/2`,
            }}
            alt="menu-dujour"
          />
        </BrunchVerticalImageWrapper>
        <BrunchHorizontalImageWrapper>
          <BrunchHorizontalImage
            image={getImage(horizontalImageUnderFoodMenu)}
            alt="menu-dujour"
          />
        </BrunchHorizontalImageWrapper>
      </BrunchSecondWrapper>
    </BrunchContainer>
  )
}

export default Brunch
