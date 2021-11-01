import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useSwipeable } from "react-swipeable"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { Card, ImageContainer } from "./GallerySlider.css"
import Navigations from "./Navigations"

const GallerySlider = ({ images }) => {
  const [active, setActive] = React.useState(0)
  const [imagesArr, setImagesArr] = React.useState([])

  React.useEffect(() => {
    const newArr = [...images]
    newArr.push(imagesArr[active])
    setImagesArr(newArr)
    // eslint-disable-next-line
  }, [active])

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      active >= 0 && active < imagesArr.length - 1
        ? setActive(active + 1)
        : null,
    onSwipedRight: () =>
      active >= 0 && active < imagesArr.length ? setActive(active - 1) : null,
  })

  return (
    <SectionContainer {...handlers} marginBottom="xxl" column>
      <ImageContainer>
        {imagesArr &&
          imagesArr.map((image, i) => (
            <Card key={i} i={i} active={active}>
              <GatsbyImage image={getImage(image)} />
            </Card>
          ))}
      </ImageContainer>
      <Navigations active={active} setActive={setActive} images={imagesArr} />
    </SectionContainer>
  )
}

export default GallerySlider
