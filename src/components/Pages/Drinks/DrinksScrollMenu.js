import React from "react"
import { Link } from "gatsby"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { BBHeading2 } from "../../StyledComponents/typography.css"
import { DrinksScrollMenuDesktopWrapper, DrinksScrollMenuMobileWrapper, wineMenuPdf } from "./DrinksPage.css"

const DrinksScrollMenu = ({ excuteScroll, wineMenuPdf }) => {
  return (
    <SectionContainer marginBottom="xl" centered={true} full={true}>
      <DrinksScrollMenuDesktopWrapper>
          <BBHeading2 color="black" onClick={()=>excuteScroll(0)}>Wines by the Glass</BBHeading2>
          <BBHeading2 color="black" onClick={()=>excuteScroll(1)}>Cocktails</BBHeading2>
          <Link to="" style={{ textDecoration: "none" }}><BBHeading2 color="black">
          <a href={wineMenuPdf.file.url} target="_blank" rel="noreferrer" style={{textDecoration: `none`}}>
          Download Menu
        </a>
            </BBHeading2></Link>
      </DrinksScrollMenuDesktopWrapper>
      <DrinksScrollMenuMobileWrapper>
          <BBHeading2 color="black" onClick={()=>excuteScroll(0)}>Wines by the Glass</BBHeading2>
          <BBHeading2 color="black" onClick={()=>excuteScroll(1)}>Cocktails</BBHeading2>
          <Link to="" style={{ textDecoration: "none" }}><BBHeading2 color="black">Download Menu</BBHeading2></Link>
      </DrinksScrollMenuMobileWrapper>
    </SectionContainer>
  )
}

export default DrinksScrollMenu
