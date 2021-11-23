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
    addressLineTwo,
    openingTimesDinnerDaysOpen,
    openingTimesDinnerOpenTimes,
    openingTimesHeadingDinner,
    openingTimesLunchHeading,
    openingTimesLunchDaysOpen,
    openingTimesLunchOpenTimes,
    daysClosed
  } = data.allContentfulContactUsPageContent.nodes[0]
  return (
    <Layout>
      <Seo title="Home" />
      <ContactUs
        address={address}
        addressLineTwo={addressLineTwo}
        daysClosed={daysClosed}
        openingTimesDinnerDaysOpen={openingTimesDinnerDaysOpen}
        openingTimesDinnerOpenTimes={openingTimesDinnerOpenTimes}
        openingTimesHeadingDinner={openingTimesHeadingDinner}
        openingTimesLunchHeading={openingTimesLunchHeading}
        openingTimesLunchDaysOpen={openingTimesLunchDaysOpen}
        openingTimesLunchOpenTimes={openingTimesLunchOpenTimes}
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
        addressLineTwo
        emailAddress
        openingTimesDinnerDaysOpen
        openingTimesDinnerOpenTimes
        openingTimesHeadingDinner
        openingTimesLunchHeading
        openingTimesLunchDaysOpen
        openingTimesLunchOpenTimes
        findUsOnGoogleMapsHeading
        findUsOnGoogleMapsUrl
        phoneNumber
        tcsLinkHeading
        daysClosed
       
      }
    }
  }
`
