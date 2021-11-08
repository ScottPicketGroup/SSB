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
    { title: "Book a Table", pageNum: 1, to: "/book-a-table" },
    { title: "What's On", pageNum: 2, to: "/whats-on" },
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
                <Heading2 color="white" marginBottom="sm">
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
                <Heading2 color="white" marginBottom="sm">
                  {item.title}
                </Heading2>
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
                style={{ textDecorationColor: color.SECONDARY_WHITE }}
                target="_blank"
                rel="noreferrer"
              >
                <Heading2 color="white">
                  {giftVouchersData.venueGiftVoucherHeading}
                </Heading2>
              </a>
              <MobileHiddenGiftItemImage
                image={getImage(giftVouchersData.venueGiftVoucherImage)}
                alt="gift-left-image"
              />
            </GiftVouchersItemWrapper>
            <GiftVouchersItemWrapper>
              <a
                href={giftVouchersData.spgGvLink}
                style={{ textDecorationColor: color.SECONDARY_WHITE }}
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
