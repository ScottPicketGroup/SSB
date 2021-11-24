import React from "react"
import { Link } from "gatsby"
import Renderer from "../../../components/rich-text-renderers/ContactSample"

import { SectionContainer } from "../../StyledComponents/containers.css"
import {
  BC1,
  FBC1,
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
import { DayWrapper, Lunch, ServiceTime, TimeWrapper } from "../../Footer/Footer.css"

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
          <BC1 color="black" marginBottom="" style={{fontSize: `1rem`}}>
            {data.address}
          </BC1>
          <BC1 color="black" marginBottom="md" style={{fontSize: `1rem`}}>
            {data.addressLineTwo}
          </BC1>
          <BC1>
          <NoneDecorationLink
            to={data.findUsOnGoogleMapsUrl}
            style={{ marginBottom: "4.5rem" }}
          >
            Find us on &nbsp;
            <span
            style={{
              marginBottom: `1rem`,
              textDecoration: `underline`,
              textUnderlineOffset: `5px`
            }}>Google Maps</span>
          </NoneDecorationLink>
          </BC1>
          <ServiceTime>
            <BC1 style={{color: `black`}} marginTop="lg" marginBottom="openingHours"> OPENING HOURS</BC1>
          <Lunch>
            <DayWrapper>
              <FBC1 color="black" marginBottom="sm" style={{fontSize: `1rem`}}>
               {data.openingTimesLunchHeading}
              </FBC1>
              <FBC1 color="black" marginBottom="md" style={{fontSize: `1rem`}}>
              {data.openingTimesLunchDaysOpen}
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="black" marginBottom="md" style={{fontSize: `1rem`}}>
                {data.openingTimesLunchOpenTimes}
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch style={{
            marginBottom: ".75rem"
          }}>
            <DayWrapper>
              <FBC1 color="black" marginBottom="sm" style={{fontSize: `1rem`}}>
              {data.openingTimesHeadingDinner}
              </FBC1>
              <FBC1 color="black" marginBottom="md" style={{fontSize: `1rem`}}>
              {data.openingTimesDinnerDaysOpen}
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="black" marginBottom="md" style={{fontSize: `1rem`}}>
              {data.openingTimesDinnerOpenTimes}
              </FBC1>
            </TimeWrapper>
          </Lunch>
          <Lunch>
            <DayWrapper>
              <FBC1 color="black" marginBottom="sm" style={{fontSize: `1rem`}}>
              {data.daysClosed && data.daysClosed}
              </FBC1>
            </DayWrapper>
            <TimeWrapper>
              <FBC1 color="black" marginBottom="sm"  style={{fontSize: `1rem`}}>
              {data.daysClosed && "Closed"}
              </FBC1>
            </TimeWrapper>
          </Lunch>
        </ServiceTime>
          <Link to={data.phoneNumber}>
            <BC1 color="black" marginTop="md" marginBottom="">
              {data.phoneNumber}
            </BC1>
          </Link>
          <Link to={data.emailAddress}>
            <BC1 color="black" marginBottom="xl" style={{fontSize: `1rem`}}>
              {data.emailAddress}
            </BC1>
          </Link>
          <BC1 color="black" marginTop="md">
            View our{" "}
            <Link to="/terms-conditions">
              privacy policy 
            </Link>
            &nbsp; and &nbsp;
            <Link to="/terms-conditions">
            terms & conditions
            </Link>
          </BC1>
        </InformationWrapper>
      </ContactUsContainer>
    </SectionContainer>
  )
}

export default ContactUs
