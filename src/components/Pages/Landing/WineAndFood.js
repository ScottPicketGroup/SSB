import React from "react"
import {
  BBHeading2,
  NoneDecorationLink,
} from "../../StyledComponents/typography.css"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { WineAndFoodWrapper } from "./landingPage.css"
import { useStaticQuery, graphql } from "gatsby"

const WineAndFood = ({ foodMenuLabelText, wineMenuLabelText }) => {
  const imageData = useStaticQuery(graphql`
    query FlowerURL {
      file(name: { eq: "flower-1" }) {
        publicURL
      }
    }
  `)
  const backgroundImage = imageData.file.publicURL
  return (
    <SectionContainer marginBottom="md" mbOnMob="1rem" full>
      <WineAndFoodWrapper>
        <NoneDecorationLink to="/drinks">
          <BBHeading2>{wineMenuLabelText}</BBHeading2>
        </NoneDecorationLink>
        <img src={backgroundImage} alt="rose" style={{width: "30%"}} />
        <NoneDecorationLink to="/food">
          <BBHeading2>{foodMenuLabelText}</BBHeading2>
        </NoneDecorationLink>
      </WineAndFoodWrapper>
    </SectionContainer>
  )
}

export default WineAndFood
