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
          <Link to="#">
            <BC1 style={{ fontWeight: "bold" }}>BOOK A TABLE</BC1>
          </Link>
          {landing ? (
            scrollPosition > 400 && <LogoIcon header />
          ) : (
            <LogoIcon header />
          )}
          <MenuHamburgerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </HeaderLogoWrapper>
      ) : (
        <HeaderLogoWrapper>
          <Link to="#">
            <BC1 style={{ fontWeight: "bold" }}>BOOK A TABLE</BC1>
          </Link>
          {scrollPosition > 150 && <LogoIcon mobile />}
          <MenuHamburgerIcon
            mobile
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </HeaderLogoWrapper>
      )}
    </HeaderContainer>
  )
}

export default Header
