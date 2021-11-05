import React from "react"
import GallerySlider from "../../Common/GallerySlider/GallerySlider"

import { SectionContainer } from "../../StyledComponents/containers.css"

const Gallery = ({ gallery }) => {
  return (
    <SectionContainer marginBottom="xxl">
      <GallerySlider images={gallery} />
    </SectionContainer>
  )
}

export default Gallery
