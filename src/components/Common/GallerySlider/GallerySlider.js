import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { Card, ImageContainer } from "./GallerySlider.css"
import Navigations from "./Navigations"

const GallerySlider = ({ images }) => {
  const [active, setActive] = React.useState(0)

  return (
    <SectionContainer marginBottom="xxl" column>
      <ImageContainer>
        {images.length &&
          images.map((item, i) => (
            item && <Card key={i} i={i} active={active}>
              <GatsbyImage image={item.gatsbyImageData} alt={`${i}`} />
            </Card>
          ))}
      </ImageContainer>
      <Navigations active={active} setActive={setActive} images={images} />
    </SectionContainer>
  )
}

export default GallerySlider
