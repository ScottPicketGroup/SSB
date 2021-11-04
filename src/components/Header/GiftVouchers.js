import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GiftVouchersContainer } from "../StyledComponents/containers.css"
import useActiveMenu from "../hooks/ActiveMenu"
import MenuCancelIcon from "../Icons/MenuCancelIcon"
import {
  MenuCancelIconWrapper,
  MenuWrapper,
  MenuLogoWrapper,
  GiftVouchersItemContainer,
  GiftVouchersItemWrapper,
  GiftItemImage
} from "./Header.css"
import { StaticImage } from "gatsby-plugin-image"
import {
  BC1, BBHeading3, NoneDecorationLink,
} from "../StyledComponents/typography.css"

const GiftVouchers = () => {
  const { giftOpen } = useActiveMenu()
  const data = useStaticQuery(graphql`
    query giftVouchersQuery {
      allContentfulGiftVouchersPageContent {
        nodes {
          address
          phoneNumber
          venueGiftVoucherHeading
          venueGiftVoucherImage {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              aspectRatio: 0.7
            )
          }
          smithStBistroGiftVoucherLink
          scottPicketGroupGiftVoucherHeading
          spgGiftVoucherImageOnlyImageOnMob {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              aspectRatio: 0.7
            )
          }
          spgGvLink
        }
      }
    }
  `)

  const giftVouchersData = data.allContentfulGiftVouchersPageContent.nodes[0]

  return (
    <GiftVouchersContainer giftOpen={giftOpen}>
      <MenuCancelIconWrapper>
        <MenuCancelIcon />
      </MenuCancelIconWrapper>
      <MenuWrapper>
        <MenuLogoWrapper>
          <StaticImage src="../../images/menu-logo.png" alt="menu-logo" />
        </MenuLogoWrapper>
        <BC1 marginBottom="md" color="white">Select your gift voucher bellow</BC1>
        <GiftVouchersItemContainer>
            <GiftVouchersItemWrapper>
                <NoneDecorationLink to={giftVouchersData.smithStBistroGiftVoucherLink}><BBHeading3 color="white">{giftVouchersData.venueGiftVoucherHeading}</BBHeading3></NoneDecorationLink>
                <GiftItemImage image={getImage(giftVouchersData.venueGiftVoucherImage)} onMobHidden />
            </GiftVouchersItemWrapper>
            <GiftVouchersItemWrapper>
                <NoneDecorationLink to={giftVouchersData.spgGvLink}><BBHeading3 color="white">{giftVouchersData.scottPicketGroupGiftVoucherHeading}</BBHeading3></NoneDecorationLink>
                <GiftItemImage image={getImage(giftVouchersData.spgGiftVoucherImageOnlyImageOnMob)} />
            </GiftVouchersItemWrapper>
        </GiftVouchersItemContainer>

        <BC1 color="white" marginBottom="sm">
          {giftVouchersData.address}
        </BC1>
        <BC1 color="white">{giftVouchersData.phoneNumber}</BC1>
      </MenuWrapper>
    </GiftVouchersContainer>
  )
}

export default GiftVouchers
