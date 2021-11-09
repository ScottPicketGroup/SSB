import React from "react"

import { Heading2 } from "../../StyledComponents/typography.css"
import PrivateDiningForm from "./PrivateDiningForm/PrivateDiningForm"
import { FormWrapper, TitleWrapper } from "./PrivateDining.css"

const DiningForm = ({ makeAndEnquiryHeading }) => {
  return (
    <FormWrapper>
      <TitleWrapper>
        <Heading2 color="black">{makeAndEnquiryHeading}</Heading2>
      </TitleWrapper>
      <PrivateDiningForm />
    </FormWrapper>
  )
}

export default DiningForm
