import React, { useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
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
  ContactFormRow,
} from "./PrivateDiningForm.css"
import CheckBox from "./CheckBox"
import Dropdown from "./Dropdown"
import { FormWrapper } from "../../ContactUs/ContactUs.css"
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
    finishHour: "",
  })

  const hourOpptions = [
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "0:00",
  ]

  const eventsTypes = ["Sit down event", "Stand up event"]

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
    console.log([
      inputs.fName,
      inputs.sName,
      inputs.email,
      inputs.number,
      inputs.eventType,
      inputs.eventDate,
      inputs.guestNum,
      inputs.addintionalNote,
      inputs.startHour,
      inputs.finishHour,
    ])
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
          subject: "SSB Private Dining Form",
          body: [
            inputs.fName,
            inputs.sName,
            inputs.email,
            inputs.number,
            inputs.eventType,
            inputs.eventDate,
            inputs.guestNum,
            inputs.addintionalNote,
            inputs.startHour,
            inputs.finishHour,
          ],
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
    <ExternalForm id="CONTACTA_61e1aae14478034ca15292b8" />
        <FormWrapper>
        <Helmet>
       
        <script type="text/javascript" async>
                        var script = document.createElement("script");
                        script.type = "text/javascript";
                        script.src = "https://forms.contacta.io/61e1aae14478034ca15292b8.js";
                        document.getElementsByTagName("head")[0].appendChild(script);
                    </script>
                    <div id="CONTACTA_61e161a92522549e0446d2be"></div>
      </Helmet>
        </FormWrapper>
        </>
      ) : (
        <>
          <BC1 color="black" thankyou>
            {" "}
            Thank you for submitting your enquiry.
          </BC1>
          <BC1 color="black" thankyou>
            A member of our staff will be in contact shortly.
          </BC1>
        </>
      )}
    </ContactUsFormContainer>
  )
}

export default PrivateDiningForm

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


.no-full-width {
  font-family: PitchRegular;
  color: black;
}

select {
  border: none;
    border-bottom: 1px solid black;
    padding: 1.5rem 0;
    font-family: 'PitchRegular';
    color: black;
    font-size: .95rem;
    background: white;
    :focus {
      outline: none;
      background: transparent;
      
    }
}
option {
    background-color: white !important;
}
.submission-message {
  font-family: PitchRegular;
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
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "black ")} !important;
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
