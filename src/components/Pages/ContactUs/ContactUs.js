import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from 'styled-components';
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
      <ExternalForm id="CONTACTA_61e161a92522549e0446d2be" />
        <FormWrapper>
        <Helmet>
       
        <script type="text/javascript" async>
                        var script = document.createElement("script");
                        script.type = "text/javascript";
                        script.src = "https://forms.contacta.io/61e161a92522549e0446d2be.js";
                        document.getElementsByTagName("head")[0].appendChild(script);
                    </script>
                 
      </Helmet>
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
            style={{ marginBottom: "5.5rem" }}
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
            <BC1 style={{color: `black`}} marginTop="lg"  marginBottom="openingHours" bold> OPENING HOURS</BC1>
          <Lunch>
            <DayWrapper>
              <FBC1 color="black" marginBottom="0" lineHeight="openingHours" style={{fontSize: `1rem`}}>
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
              {/* {data.daysClosed && "Closed"} */}
              </FBC1>
            </TimeWrapper>
          </Lunch>
        </ServiceTime>
        <a href={`tel:${data.phoneNumber}`}>
            <BC1 color="black" marginTop="md" marginBottom=""
            style={{textDecoration: 'underline'}}>
              {data.phoneNumber}
            </BC1>
         </a>
         <a href={`mailto:${data.emailAddress}`}>
         <BC1 color="black" marginBottom="contactEmail" style={{fontSize: `1rem`}}>
              {data.emailAddress}
            </BC1>
           </a> 
           
      
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


export const ExternalForm = styled.div`
 .checkbox-option {
   margin-top: -.75rem;
   margin-left: -1rem;
	-webkit-appearance: none;
	background-color: transparent;
	border: 2px solid black;
	transform: scale(.4);
	padding: 25px;
	border-radius: 3px;
	display: inline-block;
	position: relative;
}


.checkbox-option:checked {
	background-color: #0f231d;
  border: none;
}

select {
  :focus {
      outline: none;
      background: transparent;
      
    }
}

.no-full-width {
  font-family: PitchRegular;
  color: black;
}


  .contacta-webform-table {
    width: 100%;
    table-layout: fixed;
    display: flex;
    flex-wrap: wrap;
  }

  .contacta-row {
    width: 100%;
    margin-bottom: 2.25rem;
    :first-child {
      width: 0;
    }
  
    :nth-child(5) {
      width: 100%;
    }
    :nth-child(6) {
      width: 100%;
      display: flex;
    }
  }

.submission-message {
  font-family: PitchRegular;
}

  .label-option{
    display: flex;
    gap: 1.5rem;
  }
  input {
    height: 2rem;
    background: rgba(255, 255, 255, 0);
    padding: 1.5rem 0;
    font-size: 0.75rem;
    line-height: none;
    border: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "black")};
    font-family: PitchRegular;
    ::placeholder {
      color: ${props => (props.err ? "#CB0000" : "black")};
      font-size: 1rem;
      margin-bottom: 10rem;
      background: transperant;
      font-family: normal;
      font-family: PitchRegular;
    }
    :focus {
      outline: none;
      background: transparent;
      font-family: normal;
      height: 3rem;
      font-size: 150%;
    }
    :valid {
      color: white;
      font-size: 1rem;
      background: transperant;
      font-family: normal;
      color: black;
      font-family: PitchRegular;
    }
    ::-moz-focus-outer {
      color: white;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  label {
    color: white;
  }
  textarea {
    font-family: PitchRegular;
    width: 100%;
    height: 10rem;
    background: rgba(255, 255, 255, 0);
    border: none;
    padding: 1.5rem 0;
    color: white;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "black")};
    overflow: hidden;
    ::placeholder {
      font-family: PitchRegular;

      font-size: 1rem;
      margin-bottom: 10rem;
      color: ${props => (props.err ? "#CB0000" : "black")};
    }
    :focus {
      outline: none;
      background: transparent;

      height: 3rem;
      font-size: 150%;
    }
    :valid {
      color: black;
      font-size: 1rem;
      font-family: PitchRegular;

    }
    ::-moz-focus-outer {
      color: white;
    }
  }

  button .btn, .btn-primary{
    font-family: PitchRegular;
    font-size: 1rem !important;
    background: transparent !important;
    text-transform: uppercase !important;
    line-height: 46px !important;
    border-radius: 0px !important;
    border: 1px solid black !important;
    width: 225px !important;
    color: black !important;
    padding: 0rem 2.75rem !important;
    transition: all 0.2s ease-in-out;
    :hover {
      color: white !important;
      background: black !important;
    }
  }
`
