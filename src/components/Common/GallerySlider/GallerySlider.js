import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { Card, GalleryContainer, ImageContainer } from "./GallerySlider.css"
import Navigations from "./Navigations"
import NavigationsBgRed from "./NavigationsBgRed"

const GallerySlider = ({ images, bgRed, page, width }) => {
  const [active, setActive] = React.useState(0)

  useEffect(() => {
    const i_id = setInterval(() => {
      setActive(active => {
        if (active >= images.length - 1) {
          return 0
        } else {
          return active + 1
        }
      })
    }, 4000)
    return () => {
      clearInterval(i_id)
    }
  }, [])

  return (
    <GalleryContainer column full>
      <ImageContainer page={page}>
        {images.length &&
          images.map(
            (item, i) =>
              item && (
                <Card key={i} i={i} active={active} width={width}>
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
