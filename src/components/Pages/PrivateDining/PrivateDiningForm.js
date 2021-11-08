import React from "react"

import { Heading2 } from "../../StyledComponents/typography.css"
import ContactUsForm from "./ContactUsForm/ContactUsForm"
import { FormWrapper, TitleWrapper } from "./PrivateDining.css"

const PrivateDiningForm = ({ makeAndEnquiryHeading }) => {
  return (
    <FormWrapper>
      <TitleWrapper>
        <Heading2 color="black">{makeAndEnquiryHeading}</Heading2>
      </TitleWrapper>
      <ContactUsForm />
    </FormWrapper>
  )
}

export default PrivateDiningForm
