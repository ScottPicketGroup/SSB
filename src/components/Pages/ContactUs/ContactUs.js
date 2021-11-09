import React from "react"
import { Link } from "gatsby"
import Renderer from "../../../components/rich-text-renderers/BlackSample"

import { SectionContainer } from "../../StyledComponents/containers.css"
import {
  BC1,
  Heading1,
  Heading3,
  NoneDecorationLink,
} from "../../StyledComponents/typography.css"
import {
  FormWrapper,
  ContactUsContainer,
  InformationWrapper,
  DesktopHeadingWrapper,
  MobileHeadingWrapper,
} from "./ContactUs.css"
import ContactUsForm from "./ContactUsForm/ContactUsForm"

const ContactUs = ({...data}) => {

  return (
    <SectionContainer marginBottom="lg" column>
      <DesktopHeadingWrapper>
        <Heading1 color="black">Contact Us</Heading1>
      </DesktopHeadingWrapper>
      <MobileHeadingWrapper>
        <Heading3>Contact Us</Heading3>
      </MobileHeadingWrapper>
      <ContactUsContainer>
        <FormWrapper>
          <ContactUsForm />
        </FormWrapper>
        <InformationWrapper>
          <BC1 color="black" marginBottom="md">
            {data.address}
          </BC1>
          <BC1 color="black">{data.findUsOnGoogleMapsHeading}</BC1>
          <NoneDecorationLink
            to={data.findUsOnGoogleMapsUrl}
            style={{ marginBottom: "4.5rem" }}
          >
            <BC1 color="black">{data.findUsOnGoogleMapsUrl}</BC1>
          </NoneDecorationLink>
          <BC1 color="black" bold marginBottom="md">
            {data.openingHoursHeading}
          </BC1>
          <Renderer node={data.hoursToBeDisplayed} />
          <Link to={data.phoneNumber}>
            <BC1 color="black" marginTop="md" marginBottom="sm">
              {data.phoneNumber}
            </BC1>
          </Link>
          <Link to={data.emailAddress}>
            <BC1 color="black" marginBottom="xl">
              {data.emailAddress}
            </BC1>
          </Link>
          <BC1 color="black" marginTop="md">
            View our{" "}
            <Link to="/terms-conditions">
              privacy policy and terms & conditions
            </Link>
          </BC1>
        </InformationWrapper>
      </ContactUsContainer>
    </SectionContainer>
  )
}

export default ContactUs
