import React from "react"
import { FooterFormWrapper, Input, Button, FormWrapper, FBC2 } from "./Footer.css"

const FooterForm = () => {
  return (
    <FooterFormWrapper>
      <FormWrapper>
        <FBC2>Sign up to updates from the Scott Pickett Group</FBC2>
        <Input
          placeholder="Enter your email address"
          name="email"
          type="text"
        />
        <Button type="submit">
          <FBC2>Submit</FBC2>
        </Button>
      </FormWrapper>
    </FooterFormWrapper>
  )
}

export default FooterForm
