import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Card, GalleryContainer, ImageContainer } from "./GallerySlider.css"
import Navigations from "./Navigations"
import NavigationsBgRed from "./NavigationsBgRed"

const GallerySlider = ({ images, bgRed }) => {
  const [active, setActive] = React.useState(0)
  return (
    <GalleryContainer column full>
      <ImageContainer>
        {images.length &&
          images.map(
            (item, i) =>
              item && (
                <Card key={i} i={i} active={active}>
                  <GatsbyImage image={item.gatsbyImageData} alt={`${i}`} />
                </Card>
              )
          )}
      </ImageContainer>
      {bgRed ? (
        <NavigationsBgRed
          active={active}
          setActive={setActive}
          images={images}
        />
      ) : (
        <Navigations active={active} setActive={setActive} images={images} />
      )}
    </GalleryContainer>
  )
}

export default GallerySlider
