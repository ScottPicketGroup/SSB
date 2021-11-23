import React from "react"

import { BC1 } from "../../StyledComponents/typography.css"
import { GallaryWrapper, DescriptionWrapper, GallerySliderWrapper } from "./PrivateDining.css"
import GallerySlider from "../../Common/GallerySlider/GallerySlider"
import Renderer from "../../rich-text-renderers/BlackSample"
import { Link } from "gatsby"

const GallaryAndDescription = ({
  gallery,
  description,
  eventsPackageLinkText,
}) => {
  return (
    <GallaryWrapper>
      <GallerySliderWrapper>
        <GallerySlider images={gallery} page="dining" />
      </GallerySliderWrapper>

      <DescriptionWrapper>
        <Renderer node={description} />
      </DescriptionWrapper>
      <Link to="" style={{textUnderlineOffset: "5px"}}>
        <BC1 style={{fontSize: "1rem"}} color="black">{eventsPackageLinkText}…</BC1>
      </Link>
    </GallaryWrapper>
  )
}

export default GallaryAndDescription
