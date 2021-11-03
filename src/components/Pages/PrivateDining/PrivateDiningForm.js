import React from "react"

import { Heading3 } from "../../StyledComponents/typography.css"
import ContactUsForm from "./ContactUsForm/ContactUsForm"
import { FormWrapper, TitleWrapper } from "./PrivateDining.css"

const PrivateDiningForm = ({ makeAndEnquiryHeading }) => {
  return (
    <FormWrapper>
      <TitleWrapper>
        <Heading3 color="black">{makeAndEnquiryHeading}</Heading3>
      </TitleWrapper>
      <ContactUsForm />
    </FormWrapper>
  )
}

export default PrivateDiningForm
