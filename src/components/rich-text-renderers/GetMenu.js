import React from 'react'
import { BC2, Heading2 } from "../StyledComponents/typography.css"
import {
  FoodContainer,
  FoodItemWrapper,
  FoodSectionItemWrapper,
  FoodTitleWrapper,
  FoodSeasonalTitleWrapper,
} from "../Pages/Food/FoodPage.css"

const DisplayMenu = ({menu}) => {
    console.log(menu)
  return (
    <FoodContainer >
      <FoodTitleWrapper className="container">
        {/* <Heading2 style={{ fontSize: "1.75rem" }}>{topTitleIeFood}</Heading2> */}
      </FoodTitleWrapper>
      {menu && menu.menuItems.map((item, index) =>
        index === 0 && item.menuItems ? (
          <FoodItemWrapper key={index}>
            <FoodSectionItemWrapper>
              <BC2 style={{ color: "#800103" }} bold>
                {item.menuItems[0].menuItem}
              </BC2>
              <BC2 style={{ color: "#800103" }} bold>
                {item.menuItems[0].menuItemPrice}PP
              </BC2>
            </FoodSectionItemWrapper>
          </FoodItemWrapper>
        ) : (
          <FoodItemWrapper key={index}>
            <BC2 marginBottom="sm" bold>
              {item.sectionHeadingIeEntrees}
            </BC2>
            {item.menuItems && item.menuItems.map((it, idx) => (
              <React.Fragment key={idx}>
                <FoodSectionItemWrapper>
                  <BC2 color="black" marginBottom="xs" bold>
                    {it.menuItem}
                  </BC2>
                  <BC2 color="black" marginBottom="xs" bold>
                    {it.menuItemPrice}
                  </BC2>
                </FoodSectionItemWrapper>
  
                {
                  it.menuItemDescription && it.menuItemDescription.includes('<br/>') ? (
                    <>
                    <BC2 color="black">
                      {it.menuItemDescription.slice(0, it.menuItemDescription.indexOf('<br/>'))}
                    </BC2>
                    <BC2 color="black" marginBottom="sm">
                      {it.menuItemDescription
                      .slice(it.menuItemDescription
                      .indexOf('>'), 500)
                      .replace('>', '')}
                    </BC2>
                    </>
                  ) :
                  <BC2 color="black" marginBottom="sm">
                    {it.menuItemDescription}
                  </BC2>
                }
              </React.Fragment>
            ))}
          </FoodItemWrapper>
        ) 
      )}
      <FoodSeasonalTitleWrapper
        className="menuTop"
        style={{
          maxWidth: `10px !important`,
        }}
      >
        {/* <BC2 bold>{seasonalTitleTopRight}</BC2> */}
      </FoodSeasonalTitleWrapper>
    </FoodContainer>
  )
}

export default DisplayMenu