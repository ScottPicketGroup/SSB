import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactUs from "../components/Pages/ContactUs/ContactUs"

const ContactUsPage = ({ data }) => {
  const {
    address,
    emailAddress,
    findUsOnGoogleMapsHeading,
    findUsOnGoogleMapsUrl,
    phoneNumber,
    tcsLinkHeading,
    openingHoursHeading,
    hoursToBeDisplayed,
  } = data.allContentfulContactUsPageContent.nodes[0]
  return (
    <Layout>
      <Seo title="Home" />
      <ContactUs
        address={address}
        emailAddress={emailAddress}
        findUsOnGoogleMapsHeading={findUsOnGoogleMapsHeading}
        findUsOnGoogleMapsUrl={findUsOnGoogleMapsUrl}
        phoneNumber={phoneNumber}
        tcsLinkHeading={tcsLinkHeading}
        openingHoursHeading={openingHoursHeading}
        hoursToBeDisplayed={hoursToBeDisplayed}
      />
    </Layout>
  )
}

export default ContactUsPage

export const contactPageData = graphql`
  query contactUsQuery {
    allContentfulContactUsPageContent(
      filter: { id: { eq: "b66c7393-2fd4-50a0-bbd0-c4a2a2c7a34e" } }
    ) {
      nodes {
        address
        emailAddress
        findUsOnGoogleMapsHeading
        findUsOnGoogleMapsUrl
        phoneNumber
        tcsLinkHeading
        openingHoursHeading
        hoursToBeDisplayed {
          raw
        }
      }
    }
  }
`
