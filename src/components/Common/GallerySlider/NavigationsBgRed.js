import React from "react"

import { BC3 } from "../../StyledComponents/typography.css"
import { Controls, Control, ActiveControlBgRed } from "./GallerySlider.css"

const NavigationsBgRed = ({ active, setActive, images }) => {

  return (
    <Controls>
      {images.map((item, index) =>
        active === index ? (
          <ActiveControlBgRed key={index}>
            <BC3 onClick={() => setActive(index)}>
              {index + 1}
            </BC3>
          </ActiveControlBgRed>
        ) : (
          <Control key={index}>
            <BC3 color="white" onClick={() => setActive(index)}>
              {index + 1}
            </BC3>
          </Control>
        )
      )}
    </Controls>
  )
}

export default NavigationsBgRed
