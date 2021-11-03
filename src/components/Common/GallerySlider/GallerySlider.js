import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Card, GalleryContainer, ImageContainer } from "./GallerySlider.css"
import Navigations from "./Navigations"

const GallerySlider = ({ images }) => {
  const [active, setActive] = React.useState(0)
  console.log(images)
  return (
    <GalleryContainer column full>
      <ImageContainer>
        {images.length &&
          images.map((item, i) => (
            item && <Card key={i} i={i} active={active}>
              <GatsbyImage image={item.gatsbyImageData} alt={`${i}`} />
            </Card>
          ))}
      </ImageContainer>
      <Navigations active={active} setActive={setActive} images={images} />
    </GalleryContainer>
  )
}

export default GallerySlider
