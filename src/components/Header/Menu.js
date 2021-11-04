import React from "react"
import { Link } from "gatsby"
import { MenuContainer } from "../StyledComponents/containers.css"
import useActiveMenu from "../hooks/ActiveMenu"
import MenuCancelIcon from "../Icons/MenuCancelIcon"
import {
  MenuCancelIconWrapper,
  MenuWrapper,
  MenuLogoWrapper,
  MenuItemWrapper,
} from "./Header.css"
import { StaticImage } from "gatsby-plugin-image"
import { BC1, Heading3 } from "../StyledComponents/typography.css"

const MenuComponent = () => {
  const { menuOpen, setGiftOpen } = useActiveMenu()

  const menuItems = [
    { title: "Home", pageNum: 0, to: "#" },
    { title: "Book a Table", pageNum: 1, to: "#" },
    { title: "What's On", pageNum: 2, to: "#" },
    { title: "Daily Spacials", pageNum: 3, to: "#" },
    { title: "Wine", pageNum: 4, to: "#" },
    { title: "Food", pageNum: 5, to: "#" },
    { title: "Private Events", pageNum: 6, to: "#" },
    { title: "Vouchers", pageNum: 7, to: "#" },
    { title: "Contact Us", pageNum: 8, to: "#" },
  ]

  return (
    <MenuContainer menuOpen={menuOpen}>
      <MenuCancelIconWrapper>
        <MenuCancelIcon />
      </MenuCancelIconWrapper>
      <MenuWrapper>
        <MenuLogoWrapper>
          <StaticImage src="../../images/menu-logo.png" alt="menu-logo" />
        </MenuLogoWrapper>
        <MenuItemWrapper>
          {menuItems.map((item, index) => (
            index === 7 ? (<Link onClick={()=>setGiftOpen(true)} key={index} to="#" style={{ textDecoration: "none" }}>
            <Heading3 color="white">{item.title}</Heading3>
          </Link>) :
            (<Link key={index} to="#" style={{ textDecoration: "none" }}>
              <Heading3 color="white">{item.title}</Heading3>
            </Link>)
          ))}
        </MenuItemWrapper>

        <BC1 color="white" marginBottom="sm">
          300 SMITH ST, COLLINGWOOD VIC 3066
        </BC1>
        <BC1 color="white">03 9419 2202</BC1>
      </MenuWrapper>
    </MenuContainer>
  )
}

export default MenuComponent
