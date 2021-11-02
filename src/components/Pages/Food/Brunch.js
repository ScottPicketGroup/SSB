import React from "react"
import { BC1, Heading2 } from "../../StyledComponents/typography.css"
import {
  MenuDuJourContainer,
  BrunchContainer,
  BrunchFirstWrapper,
  BrunchSecondWrapper,
  BrunchHiddenOnMobImage,
  BrunchHorizontalImageWrapper,
  BrunchVerticalImageWrapper,
} from "./FoodPage.css"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Brunch = ({ brunchData, hiddenOnMobImg }) => {
  const { menuLogo, menuItems, bottomMenuTitle } = brunchData
  console.log()
  return (
    <BrunchContainer>
      <BrunchFirstWrapper>
        <MenuDuJourContainer>
          <GatsbyImage
            image={getImage(menuLogo)}
            style={{ margin: "1rem 1rem 1.75rem" }}
            alt="menu-dujour"
          />
          {menuItems.map((item, index) => (
            <div key={index} style={{ marginBottom: "3.25rem" }}>
              <BC1>
                {item.menuItem}, {item.menuItemPrice}$$
              </BC1>
              <BC1>{item.menuItemDescription}</BC1>
            </div>
          ))}
          <Heading2 marginBottom="md">{bottomMenuTitle}</Heading2>
        </MenuDuJourContainer>

        <BrunchHiddenOnMobImage
          style={{
            marginTop: "6rem",
            height: "60%",
            width: "40%",
            aspectRatio: "3/4",
          }}
          image={getImage(hiddenOnMobImg)}
          alt="brunch-hidden"
        />
      </BrunchFirstWrapper>
      <BrunchSecondWrapper>
        <BrunchVerticalImageWrapper>
          <StaticImage
            src="../../../images/brunch-second-left.png"
            alt="brunch-second-left"
          />
        </BrunchVerticalImageWrapper>
        <BrunchHorizontalImageWrapper>
          <StaticImage
            src="../../../images/brunch-second-right.png"
            alt="brunch-second-right"
          />
        </BrunchHorizontalImageWrapper>
      </BrunchSecondWrapper>
    </BrunchContainer>
  )
}

export default Brunch
