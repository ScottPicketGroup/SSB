import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { MenuContainer } from "../StyledComponents/containers.css"
import useActiveMenu from "../hooks/ActiveMenu"
import MenuCancelIcon from "../Icons/MenuCancelIcon"
import {
  MenuCancelIconWrapper,
  MenuWrapper,
  MenuLogoWrapper,
  MenuItemWrapper,
  GiftVouchersContainer,
  GiftVouchersItemContainer,
  GiftVouchersItemWrapper,
  GiftItemImage,
  MobileHiddenGiftItemImage,
  InformationWrapper,
} from "./Header.css"
import { StaticImage } from "gatsby-plugin-image"
import { BC1, Heading2, FBC1 } from "../StyledComponents/typography.css"
import { color } from "../../components/StyledComponents/variables"

const MenuComponent = () => {
  const { menuOpen, setMenuOpen, giftOpen, setGiftOpen } = useActiveMenu()
  const data = useStaticQuery(graphql`
    query giftVouchersQuery {
      allContentfulGiftVouchersPageContent(
        filter: { id: { eq: "2aba3ce8-60f6-5edb-b6cd-37b5e9cfddfb" } }
      ) {
        nodes {
          address
          phoneNumber
          venueGiftVoucherHeading
          venueGiftVoucherImage {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              aspectRatio: 1.5
            )
          }
          smithStBistroGiftVoucherLink
          scottPicketGroupGiftVoucherHeading
          spgGiftVoucherImageOnlyImageOnMob {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              aspectRatio: 1.5
            )
          }
          spgGvLink
        }
      }
    }
  `)

  const giftVouchersData = data.allContentfulGiftVouchersPageContent.nodes[0]

  const menuItems = [
    { title: "Home", pageNum: 0, to: "/" },
    { title: "Book a Table", pageNum: 1, to: "/reservations" },
    { title: "What's On", pageNum: 2, to: "/whats-on" },
    { title: "Wine etc.", pageNum: 4, to: "/drinks" },
    { title: "Food", pageNum: 5, to: "/food" },
    { title: "Private Events", pageNum: 6, to: "/private-dining" },
    { title: "Vouchers", pageNum: 7, to: "" },
    { title: "Contact Us", pageNum: 8, to: "/contact-us" },
  ]

  return (
    <MenuContainer menuOpen={menuOpen}>
      <MenuCancelIconWrapper>
        <MenuCancelIcon />
      </MenuCancelIconWrapper>
      <MenuWrapper>
        <MenuLogoWrapper>
          <StaticImage src="../../images/SSB_Tertiary_Black_RGB@2x.png" alt="menu-logo" 
          style={{width: `247px`}}
          />
        </MenuLogoWrapper>
        <MenuItemWrapper giftOpen={giftOpen}>
          {menuItems.map((item, index) =>
            item.pageNum === 7 ? (
              <Link
                onClick={() => setGiftOpen(true)}
                key={index}
                to="#"
                style={{ textDecoration: "none" }}
              >
                <Heading2 color="white" marginBottom="none">
                  {item.title}
                </Heading2>
              </Link>
            ) : (
              <Link
                key={index}
                onClick={() => setMenuOpen(false)}
                to={item.to}
                style={{ textDecoration: "none" }}
              >
                <Heading2 color="white" marginBottom="none">
                  {item.title}
                </Heading2>
              </Link>
            )
          )}
        </MenuItemWrapper>
        <GiftVouchersContainer giftOpen={giftOpen}>
          <BC1 marginBottom="md" color="white">
            Select your gift voucher below
          </BC1>
          <GiftVouchersItemContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GiftVouchersItemWrapper>
              <a
                  href={giftVouchersData.spgGvLink}
                  style={{ textDecorationColor: color.SECONDARY_WHITE, textDecorationThickness: '1px' }}
                  target="_blank"
                  rel="noreferrer"
              >
                <Heading2 color="white">
                  {giftVouchersData.scottPicketGroupGiftVoucherHeading}
                </Heading2>
              </a>
              <GiftItemImage
                  image={getImage(
                      giftVouchersData.spgGiftVoucherImageOnlyImageOnMob
                  )}
                  alt="gift-right-image"
              />
            </GiftVouchersItemWrapper>
          </GiftVouchersItemContainer>
        </GiftVouchersContainer>
        <InformationWrapper>
          <FBC1 color="white" marginBottom="sm">
            {giftVouchersData.address.toUpperCase()}
          </FBC1>
          <FBC1 color="white">{giftVouchersData.phoneNumber}</FBC1>
        </InformationWrapper>
      </MenuWrapper>
    </MenuContainer>
  )
}

export default MenuComponent
