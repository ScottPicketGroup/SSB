import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Renderer from "../../../components/rich-text-renderers/BlackSample"

import { SectionContainer } from "../../StyledComponents/containers.css"
import { BC1, Heading2 } from "../../StyledComponents/typography.css"
import {
  FormWrapper,
  ContactUsContainer,
  InformationWrapper,
  HeadingWrapper
} from "./ContactUs.css"
import ContactUsForm from "./ContactUsForm/ContactUsForm"

const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query contactUsQuery {
      allContentfulContactUsPageContent {
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
  `)

  const information = data.allContentfulContactUsPageContent.nodes[0]
  return (
    <SectionContainer marginBottom="lg" column>
      <HeadingWrapper>
        <Heading2 color="black">Contact Us</Heading2>
      </HeadingWrapper>
      <ContactUsContainer>
        <FormWrapper>
          <ContactUsForm />
        </FormWrapper>
        <InformationWrapper>
          <BC1 color="black" marginBottom="md">
            {information.address}
          </BC1>
          <BC1 color="black">{information.findUsOnGoogleMapsHeading}</BC1>
          <Link
            to={information.findUsOnGoogleMapsUrl}
            style={{ marginBottom: "4.5rem" }}
          >
            <BC1 color="black">{information.findUsOnGoogleMapsUrl}</BC1>
          </Link>
          <BC1 color="black" bold marginBottom="md">
            {information.openingHoursHeading}
          </BC1>
          <Renderer node={information.hoursToBeDisplayed} />
          <Link to={information.phoneNumber}>
            <BC1 color="black" marginTop="md" marginBottom="sm">
              {information.phoneNumber}
            </BC1>
          </Link>
          <Link to={information.emailAddress}>
            <BC1 color="black" marginBottom="xl">
              {information.emailAddress}
            </BC1>
          </Link>
          <BC1 color="black" marginTop="md">
            {information.tcsLinkHeading}
          </BC1>
        </InformationWrapper>
      </ContactUsContainer>
    </SectionContainer>
  )
}

export default ContactUs
