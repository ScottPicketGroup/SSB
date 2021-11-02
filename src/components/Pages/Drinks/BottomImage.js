import React from "react"
import { getImage } from "gatsby-plugin-image"
import { SectionContainer } from "../../StyledComponents/containers.css"
import { BottomGatsByImage } from "./DrinksPage.css"

const BottomImage = ({ bottomImage }) => {
  return (
    <SectionContainer
      marginBottom="xxl"
      width="50%"
      centered={true}
    >
      <BottomGatsByImage image={getImage(bottomImage)} alt="drinks-bottom-image" />
    </SectionContainer>
  )
}

export default BottomImage
