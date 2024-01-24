import React, { useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
  HeaderContainer,
  HeaderLogoWrapper,
  HamburgerMenuWrapper,
  ReservationMenuWrapper,
  BookATableText,
} from "./Header.css"
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
  const data = useStaticQuery(
    graphql`
    query  {
      allContentfulReservationsLinks(
        filter: {id: {eq: "0d647c38-723b-54d9-9f32-8c8b5714f9d7"}}
      ) {
        edges {
          node {
            label
            url
            id
          }
        }
      }
    }
    `
  )

 
  const bookATableLink = data.allContentfulReservationsLinks.edges[0].node.url
  return (
    <HeaderContainer ref={headerRef}>
      {elementWidth > 450 ? (
        <HeaderLogoWrapper>
          <ReservationMenuWrapper>
          <Link to="/reservations" style={{ textAlign: "center", minWidth: `3rem` }}>
              <BookATableText>BOOK A TABLE STAGING</BookATableText>
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
          {landing ? (
            scrollPosition > 150 && (
              <Link to="/" style={{ textAlign: "center" }}>
                <LogoIcon mobile="true" />
              </Link>
            )
          ) : (
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
