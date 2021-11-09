import React, { useState } from "react"

import { BC1 } from "../../../StyledComponents/typography.css"
import {
  ContactUsFormContainer,
  TixboxContainer,
  ContactDetailsContainer,
  InputContainer,
  SignUp,
  Input,
  Label,
  Button,
  ContactFormRow
} from "./PrivateDiningForm.css"
import CheckBox from "./CheckBox"
import Dropdown from "./Dropdown"
const PrivateDiningForm = () => {
  const functionURL = "https://pear-cobra-4528.twil.io/send-email"
  const [error, setError] = useState({
    fName: false,
  })
  const [inputs, setInputs] = useState({
    fName: "",
    sName: "",
    email: "",
    number: "",
    newsletter: false,
    eventType: "",
    eventDate: "",
    guestNum: "",
    addintionalNote: "",
    startHour: "",
    finishHour: ""
  })

  const hourOpptions = [
    "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "0:00", 
  ]

  const eventsTypes = ["Type 1", "Type 2", "Type 3"]

  const [thankyou, setThankyou] = useState(false)
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleChange = e => {
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))

    !inputs.email.includes(".") || !inputs.email.includes("@")
      ? setError(error => ({ ...error, email: true }))
      : setError(error => ({ ...error, email: false }))
    inputs.fName === ""
      ? setError(error => ({ ...error, fName: true }))
      : setError(error => ({ ...error, fName: false }))
    inputs.sName === ""
      ? setError(error => ({ ...error, sName: true }))
      : setError(error => ({ ...error, sName: false }))
    inputs.number === ""
      ? setError(error => ({ ...error, number: true }))
      : setError(error => ({ ...error, number: false }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const timestamp = Date.now()

    if (
      (inputs.fName &&
        inputs.sName &&
        inputs.email &&
        inputs.email.includes(".")) ||
      inputs.email.includes("@")
    )
      fetch(functionURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // body: encode({ "form-name": "cont", ...inputs }),
        body: encode({
          fromEmail: inputs.email,
          subject: "Longsong Contact Form",
          body: inputs.message,
        }),
      })
        .then(setThankyou(true))
        .catch(error => alert(error))

    if (
      (inputs.newsletter === true &&
        inputs.email &&
        inputs.email.includes(".")) ||
      inputs.email.includes("@")
    ) {
      var myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", { timestamp })
      myHeaders.append("Content-Type", "application/json")

      var raw = JSON.stringify({
        data: {
          email: inputs.email,
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
        .then(result => console.log("result", result))

        .catch(error => console.log("error", error))
    }
  }
  return (
    <ContactUsFormContainer>
      {!thankyou ? (
        <>
          <SignUp
            name="cont"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="cont" />

            <ContactDetailsContainer>
              <InputContainer>
                <Input
                  placeholder="First Name*"
                  name="fName"
                  type="text"
                  value={inputs.fName}
                  onChange={handleChange}
                  err={error.fName}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="Surname*"
                  name="sName"
                  type="text"
                  value={inputs.sName}
                  onChange={handleChange}
                  err={error.sName}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="Mobile Number*"
                  name="number"
                  type="text"
                  value={inputs.number}
                  onChange={handleChange}
                  err={error.number}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="Email*"
                  name="email"
                  type="text"
                  value={inputs.email}
                  onChange={handleChange}
                  err={error.email}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="Event Date"
                  name="eventDate"
                  type="text"
                  value={inputs.eventDate}
                  onChange={handleChange}
                  err={error.eventDate}
                />
              </InputContainer>
              <InputContainer>
                <Dropdown title="Type Of Events" options={eventsTypes} dropWidth="40.1%" />
              </InputContainer>

              <InputContainer>
                <Input
                  placeholder="Number Of Guests"
                  name="guestNum"
                  type="text"
                  value={inputs.guestNum}
                  onChange={handleChange}
                  err={error.guestNum}
                />
              </InputContainer>

              <InputContainer>
                <Input
                  placeholder="Additional Note"
                  name="addintionalNote"
                  type="text"
                  value={inputs.addintionalNote}
                  onChange={handleChange}
                  err={error.addintionalNote}
                />
              </InputContainer>
              <ContactFormRow>
                <InputContainer hour>
                  <Dropdown title="Start Hours" options={hourOpptions} />
                </InputContainer>
                <InputContainer hour>
                  <Dropdown title="Finish Hours" options={hourOpptions} />
                </InputContainer>
              </ContactFormRow>
              <TixboxContainer>
                <div
                  onClick={() =>
                    setInputs(inputs => ({ ...inputs, newsletter: true }))
                  }
                  aria-hidden="true"
                >
                  <CheckBox />
                </div>
                <BC1 color="black" style={{ width: `90%` }}>
                  Receive updates from the Scott Pickett Group
                </BC1>
              </TixboxContainer>
              <Button
                onClick={handleSubmit}
                err={error.email}
                type="submit"
                submit
              >
                <BC1 color="black" style={{ marginBottom: "0" }}>Submit</BC1>
              </Button>
            </ContactDetailsContainer>
          </SignUp>
        </>
      ) : (
        <>
          <Label thankyou> Thank you for submitting your enquirey.</Label>
          <Label thankyou>
            A member of our staff will be in contact shortly.
          </Label>
        </>
      )}
    </ContactUsFormContainer>
  )
}

export default PrivateDiningForm
