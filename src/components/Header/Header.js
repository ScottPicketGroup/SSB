import React, { useRef } from "react"
import { Link } from "gatsby"

import { HeaderContainer, HeaderLogoWrapper, HamburgerMenuWrapper, ReservationMenuWrapper, BookATableText } from "./Header.css"
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
          <ReservationMenuWrapper>
            <Link to="/reservations">
              <BookATableText>BOOK A TABLE</BookATableText>
            </Link>
          </ReservationMenuWrapper>

          {landing ? (
            scrollPosition > 400 && (
              <Link to="/" style={{ textAlign: "center" }}>
                <LogoIcon header />
              </Link>
            )
          ) : (
            <Link to="/" style={{ textAlign: "center" }}>
              <LogoIcon header />
            </Link>
          )}
          <HamburgerMenuWrapper>
            <MenuHamburgerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </HamburgerMenuWrapper>
        </HeaderLogoWrapper>
      ) : (
        <HeaderLogoWrapper>
          <ReservationMenuWrapper>
            <Link to="/reservations">
              <BookATableText>BOOK A TABLE</BookATableText>
            </Link>
          </ReservationMenuWrapper>
          {scrollPosition > 150 && (
            <Link to="/" style={{ textAlign: "center" }}>
              <LogoIcon mobile="true" />
            </Link>
          )}
          <HamburgerMenuWrapper>
            <MenuHamburgerIcon
              mobile
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          </HamburgerMenuWrapper>
        </HeaderLogoWrapper>
      )}
    </HeaderContainer>
  )
}

export default Header
