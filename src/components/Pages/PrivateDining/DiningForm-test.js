import React from "react"


import { Heading2 } from "../../StyledComponents/typography.css"
import PrivateDiningForm from "./PrivateDiningForm/PrivateDiningForm"
import { FormWrapper, TitleWrapper } from "./PrivateDining.css"
import FunctionTrackerForm from "./PrivateDiningForm/FunctionTrackerForm"

const DiningForm = ({ makeAndEnquiryHeading }) => {
React.useEffect(() => {
  const isBrowser = typeof window !== "undefined"
  if (!isBrowser) {
    return
  }

  return console.log(
    "form info:", window &&    window.ftenquireinit(907, "smithstreetbistrot")
  )
},[])

  // console.log('window', window)
  return (
    <FormWrapper>
      <TitleWrapper>
        <Heading2 color="black">{makeAndEnquiryHeading}</Heading2>
      </TitleWrapper>
      <FunctionTrackerForm/>
    </FormWrapper>
  )
}
export default DiningForm
