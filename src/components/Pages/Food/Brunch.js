import React from "react"

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
  BrunchHeadingWrapper
} from "./FoodPage.css"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

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
const {vertImgUnderMenu, horizontalImageUnderFoodMenu} = data.allContentfulFoodMenuPageContent.edges[0].node
  const { menuLogo, menuItems, bottomMenuTitle } = brunchData
  return (
    <BrunchContainer>
      <BrunchFirstWrapper>
        <MenuDuJourContainer menus="brunch">
          <GatsbyImage
            image={getImage(menuLogo)}
            style={{ margin: "1rem 1rem 1.75rem", overflow: "visible" }}
            alt="menu-dujour"
          />
          {menuItems.map((item, index) => (
            <MenuDuJourItemWrapper key={index} menus="brunch">
              <BC2 color="black" bold>
                {item.menuItem}{item.menuItem.includes(",") ? "" : ","} {item.menuItemPrice}$$
              </BC2>
              <BC2 color="black">{item.menuItemDescription ? item.menuItemDescription : null}</BC2>
            </MenuDuJourItemWrapper>
          ))}
          <BrunchHeadingWrapper>
          <Heading2 marginBottom="md" style={{fontSize: "1.75rem"}} color="black">
            {bottomMenuTitle}
          </Heading2>
          </BrunchHeadingWrapper>
        </MenuDuJourContainer>

        <BrunchHiddenOnMobImage
          image={getImage(hiddenOnMobImg)}
          alt="brunch-hidden"
        />
      </BrunchFirstWrapper>
      <BrunchSecondWrapper>
        <BrunchVerticalImageWrapper>
          
          <GatsbyImage
            image={getImage(vertImgUnderMenu)}
            style={{ margin: "1rem 1rem 1.75rem", overflow: "visible", aspectRatio: `3/2` }}
            alt="menu-dujour"
          />
        </BrunchVerticalImageWrapper>
        <BrunchHorizontalImageWrapper>
        <GatsbyImage
            image={getImage(horizontalImageUnderFoodMenu)}
            style={{ margin: "1rem 1rem 1.75rem", overflow: "visible", aspectRatio: `3/2` }}
            alt="menu-dujour"
          />
        </BrunchHorizontalImageWrapper>
      </BrunchSecondWrapper>
    </BrunchContainer>
  )
}

export default Brunch
