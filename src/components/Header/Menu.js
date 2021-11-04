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
import { BC1, Heading3, BBHeading3 } from "../StyledComponents/typography.css"

const MenuComponent = () => {
  const { menuOpen, setMenuOpen, giftOpen, setGiftOpen } = useActiveMenu()
  const data = useStaticQuery(graphql`
    query giftVouchersQuery {
      allContentfulGiftVouchersPageContent {
        nodes {
          address
          phoneNumber
          venueGiftVoucherHeading
          venueGiftVoucherImage {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
          smithStBistroGiftVoucherLink
          scottPicketGroupGiftVoucherHeading
          spgGiftVoucherImageOnlyImageOnMob {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
          spgGvLink
        }
      }
    }
  `)

  const giftVouchersData = data.allContentfulGiftVouchersPageContent.nodes[0]

  const menuItems = [
    { title: "Home", pageNum: 0, to: "/" },
    { title: "Book a Table", pageNum: 1, to: "" },
    { title: "What's On", pageNum: 2, to: "/whats-on" },
    { title: "Daily Spacials", pageNum: 3, to: "" },
    { title: "Wine", pageNum: 4, to: "/drinks" },
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
          <StaticImage src="../../images/menu-logo.png" alt="menu-logo" />
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
                <Heading3 color="white" marginBottom="xs">
                  {item.title}
                </Heading3>
              </Link>
            ) : (
              <Link
                key={index}
                onClick={() => setMenuOpen(false)}
                to={item.to}
                style={{ textDecoration: "none" }}
              >
                <Heading3 color="white" marginBottom="xs">
                  {item.title}
                </Heading3>
              </Link>
            )
          )}
        </MenuItemWrapper>
        <GiftVouchersContainer giftOpen={giftOpen}>
          <BC1 marginBottom="md" color="white">
            Select your gift voucher bellow
          </BC1>
          <GiftVouchersItemContainer>
            <GiftVouchersItemWrapper>
              <a
                href={giftVouchersData.smithStBistroGiftVoucherLink}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <BBHeading3 color="white">
                  {giftVouchersData.venueGiftVoucherHeading}
                </BBHeading3>
              </a>
              <MobileHiddenGiftItemImage
                image={getImage(giftVouchersData.venueGiftVoucherImage)}
                alt="gift-left-image"
              />
            </GiftVouchersItemWrapper>
            <GiftVouchersItemWrapper>
              <a
                href={giftVouchersData.spgGvLink}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <BBHeading3 color="white">
                  {giftVouchersData.scottPicketGroupGiftVoucherHeading}
                </BBHeading3>
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
          <BC1 color="white" marginBottom="sm">
            {giftVouchersData.address}
          </BC1>
          <BC1 color="white">{giftVouchersData.phoneNumber}</BC1>
        </InformationWrapper>
      </MenuWrapper>
    </MenuContainer>
  )
}

export default MenuComponent
