import React from "react"

import { BC3 } from "../../StyledComponents/typography.css"
import { Controls, Control, ActiveControl } from "./GallerySlider.css"

const Navigations = ({ active, setActive, images }) => {

  return (
    <Controls>
      {images.map((item, index) =>
        active === index ? (
          <ActiveControl key={index}>
            <BC3 color="white" onClick={() => setActive(index)}>
              {index + 1}
            </BC3>
          </ActiveControl>
        ) : (
          <Control key={index}>
            <BC3 color="black" onClick={() => setActive(index)}>
              {index + 1}
            </BC3>
          </Control>
        )
      )}
    </Controls>
  )
}

export default Navigations
