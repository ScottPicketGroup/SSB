import React, { useState } from "react"
import {
  FooterFormWrapper,
  Input,
  Button,
  FormWrapper,
  FBC2,
  FooterThankyouWrapper,
} from "./Footer.css"

const FooterForm = () => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [signUp, setSignup] = useState(true)
  const [thankyou, setThankyou] = useState(false)
  const handleChange = event => {
    setEmail(event.target.value)
    !email.includes(".") || !email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const timestamp = Date.now()
    if ((email && email.includes(".")) || email.includes("@")) {
      var myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", { timestamp })
      myHeaders.append("Content-Type", "application/json")

      var raw = JSON.stringify({
        data: {
          email: email,
          tags: ["Smith St Bistrot - Footer"],
        },
      })

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(setSignup(false))
        .then(setThankyou(true))

        .catch(error => console.log("error", error))
    } else {
      setEmailErr(true)
    }
  }
  return (
    <FooterFormWrapper>
      {signUp ? (
        <FormWrapper onSubmit={handleSubmit}>
          <FBC2>Sign up to updates from the Scott Pickett Group</FBC2>
          <Input
            placeholder="Enter your email address"
            onChange={handleChange}
            name="email"
            type="email"
          />
          <Button type="submit">
            <FBC2>Submit</FBC2>
          </Button>
        </FormWrapper>
      ) : (
        <FooterThankyouWrapper>
          <FBC2 marginBottom="0">
            Thank you. You are now signed up to our mailing list.
          </FBC2>
        </FooterThankyouWrapper>
      )}
    </FooterFormWrapper>
  )
}

export default FooterForm
