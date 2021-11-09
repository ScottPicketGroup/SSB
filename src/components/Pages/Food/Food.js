import React from "react"
import { BC2, Heading2 } from "../../StyledComponents/typography.css"
import {
    FoodContainer,
    FoodItemWrapper,
    FoodSectionItemWrapper,
    FoodTitleWrapper,
    FoodSeasonalTitleWrapper,
} from "./FoodPage.css"

const Food = ({ foodData }) => {
    const { topTitleIeFood, menuItems, seasonalTitleTopRight } =
        foodData
    return (
        <FoodContainer>
            <FoodTitleWrapper>
                <Heading2>
                    {topTitleIeFood}
                </Heading2>
            </FoodTitleWrapper>
            {menuItems.map((item, index) => (

                index === 0 ? (<FoodItemWrapper key={index}><FoodSectionItemWrapper><BC2 style={{color: "#800103"}} bold>{item.menuItems[0].menuItem}</BC2><BC2 color="black" bold>
                    {item.menuItems[0].menuItemPrice}PP</BC2></FoodSectionItemWrapper></FoodItemWrapper>) : (
                    (<FoodItemWrapper key={index}>
                        <BC2 marginBottom="sm" bold>{item.sectionHeadingIeEntrees}</BC2>
                        {item.menuItems.map((it, idx) => (
                            <>
                                <FoodSectionItemWrapper key={idx}>
                                    <BC2 color="black" marginBottom="xs" bold>
                                        {it.menuItem}
                                    </BC2>
                                    <BC2 color="black" marginBottom="xs" bold>
                                        {it.menuItemPrice}$$
                                    </BC2>
                                </FoodSectionItemWrapper>
                                <BC2 color="black" marginBottom="sm">{it.menuItemDescription}</BC2>
                            </>))}
                    </FoodItemWrapper>)
                )))}
            <FoodSeasonalTitleWrapper>
                <BC2 bold>{seasonalTitleTopRight}</BC2>
            </FoodSeasonalTitleWrapper>
        </FoodContainer>
    )
}

export default Food
