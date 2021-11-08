import React from "react"
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
} from "./FoodPage.css"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Brunch = ({ brunchData, hiddenOnMobImg }) => {
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
            <MenuDuJourItemWrapper menus="brunch">
              <BC2 color="black" bold>
                {item.menuItem}{item.menuItem.includes(",") ? "" : ","} {item.menuItemPrice}$$
              </BC2>
              <BC2 color="black">{item.menuItemDescription ? item.menuItemDescription : "No Description"}</BC2>
            </MenuDuJourItemWrapper>
          ))}
          <Heading2 marginBottom="md" style={{fontSize: "1.75rem"}} color="black">
            {bottomMenuTitle}
          </Heading2>
        </MenuDuJourContainer>

        <BrunchHiddenOnMobImage
          image={getImage(hiddenOnMobImg)}
          alt="brunch-hidden"
        />
      </BrunchFirstWrapper>
      <BrunchSecondWrapper>
        <BrunchVerticalImageWrapper>
          <StaticImage
            src="../../../images/brunch-second-left.png"
            alt="brunch-second-left"
            layout="fullWidth"
            aspectRatio="0.8"
          />
        </BrunchVerticalImageWrapper>
        <BrunchHorizontalImageWrapper>
          <StaticImage
            src="../../../images/brunch-second-right.png"
            layout="fullWidth"
            alt="brunch-second-right"
            aspectRatio="1.4"
          />
        </BrunchHorizontalImageWrapper>
      </BrunchSecondWrapper>
    </BrunchContainer>
  )
}

export default Brunch
