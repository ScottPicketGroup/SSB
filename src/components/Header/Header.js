import React, { useRef } from "react"
import { Link } from "gatsby"

import { BC1 } from "../StyledComponents/typography.css"
import { HeaderContainer, HeaderLogoWrapper } from "./Header.css"
import MenuHamburgerIcon from "../Icons/MenuHamburgerIcon"
import useActiveMenu from "../hooks/ActiveMenu"
import LogoIcon from "../Icons/LogoIcon"
import useScrollPosition from "../hooks/ScrollPosition"
import useGetElementSize from "../hooks/ItemSizing"

const Header = ({ landing }) => {
  const { menuOpen, setMenuOpen } = useActiveMenu()
  const scrollPosition = useScrollPosition()
  const headerRef = useRef(null)
  const { elementWidth } = useGetElementSize(headerRef)

  return (
    <HeaderContainer ref={headerRef}>
      {elementWidth > 450 ? (
        <HeaderLogoWrapper>
          <div style={{width: "20%"}}>
          <Link to="/book-a-table">
            <BC1 style={{ fontWeight: "bold" }}>BOOK A TABLE</BC1>
          </Link>
          </div>
          
          {landing ? (
            scrollPosition > 400 && <Link to="/" style={{width: "75%", textAlign: "center"}}><LogoIcon header /></Link>
          ) : (
            <Link to="/" style={{width: "75%", textAlign: "center"}}><LogoIcon header /></Link>
          )}
          <div style={{width: "10%"}}>
          <MenuHamburgerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </HeaderLogoWrapper>
      ) : (
        <HeaderLogoWrapper>
          <div style={{width: "10%"}}>
          <Link to="/book-a-table">
            <BC1 style={{ fontWeight: "bold" }}>BOOK A TABLE</BC1>
          </Link>
          </div>
          {scrollPosition > 150 && <Link to="/" style={{width: "75%", textAlign: "center"}}><LogoIcon mobile="true" /></Link>}
          <div style={{width: "10%"}}>
          <MenuHamburgerIcon
            mobile
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          </div>
        </HeaderLogoWrapper>
      )}
    </HeaderContainer>
  )
}

export default Header
