import React from "react"
import styled from "styled-components"
const FunctionTrackerForm = () => {
  return (
    <FunctionTrackerFormContainer id="ftenquire907"></FunctionTrackerFormContainer>
  )
}

export default FunctionTrackerForm

export const FunctionTrackerFormContainer = styled.div`
#enquireform > div:nth-child(14) > input {
  padding: 0.75rem 4.5rem;
    color: black;
    background-color: #FFFFFF;
    border: 1px solid black !important;
    font-size: 1rem;
    font-family: 'PitchRegular';
    text-transform: uppercase;
    border-radius: 0;
    transition: all .3 ease;
    :hover {
      background-color: black;
      color: white;
    }
}
#uniform-subcribemailinglistfield > span {
  content: "";
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid black;
    transition: all 300ms ease-in-out 0s;
    margin-top: 1rem;
}
#enquireform > div:nth-child(11) > div > div > label {
  padding-left: 30px !important;
    padding-top: 5px;
    margin-top: 1rem;
    position: absolute;
    font-size: 1rem;
    font-family: 'PitchRegular';
}
.form-control input {
  color: pink !important;
  font-size: 10rem !important;
}

.checker span {
  margin-top: 1rem;
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid black;
    transition: all 300ms ease-in-out 0s;
}
.checker input {

    padding-left: 30px;
    padding-top: 5px;
    margin-top: 10p;
    position: absolute;
    font-size: 1rem;
    font-family: 'PitchRegular';
}

.checker span:after {
    content: "";
    font-family: 'icomoon';
    font-size: 16px;
    line-height: 1;
    position: absolute;
    top: -1px;
    left: -1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    opacity: 0;
    filter: alpha(opacity=0);
}
.select2-results {
    color: black;
    background-color: #FFFFFF;
    border: 1px solid black;
}
.select2-results__option {
    padding: 7px 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: black;
    font-family: PitchRegular;
}
.select2-container {
    border: 0px;
    width: 100% !important;
    margin: 2rem 0px !important;
    border: 1px solid black !important;
}

.form-control {
    border: none !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid black !important;
    border-radius: 0;
    padding: 0 !important;
    font-family: PitchRegular !important;
    font-size: 1rem;
    color: black !important;
    margin-top: 2rem;
}
.picker {
    font-size: 16px;
    text-align: left;
    line-height: 1.2;
    color: #000000;
    position: absolute;
    z-index: 10000000;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 1rem;
    font-family: PitchRegular;
    color: black !important;
}
  background-color: inherit !important;
  .ftpage-container {
    background-color: inherit !important;
  }
  .ftform-group {
    color: white !important;
  }
  .ftrow {
    margin-left: -10px !important;
    margin-right: -00px !important;
    display: flex !important;
    flex-direction: column !important;
  }
  #enquireform > div:nth-child(9) > div > div > div {
    display: flex;
    flex-direction: row !important;
  }
  #enquireform > div:nth-child(10) > div > div > div {
    display: flex;
    flex-direction: row !important;
  }

  #enquireform > div:nth-child(1) {
    font-size: 1rem;
  }
  //*[@id="enquireform"]/div[9]/div
  .ftcontrol-label {
    color: white !important;
    text-transform: uppercase !important;
  }
  .ftform-control {
    border-radius: 0px !important;
    background-color: transparent !important;
    color: white !important;
    box-shadow: none !important;
    border: none !important;
    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")} !important;
  }
  input {
 
    background: rgba(255, 255, 255, 0) !important;
    border: none !important;
    padding: 1.5rem 0 !important;
    font-size: 0.75rem !important;
    line-height: none !important;

    border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "white")} !important;
    ::placeholder {
      color: ${props => (props.err ? "#CB0000" : "#B1B1B1")};
      font-size: 1rem;
      margin-bottom: 10rem;
      background: transperant;
      font-family: normal;
    }
    :focus {
      outline: none !important;
      background: transparent !important;
      font-family: normal !important;
      height: 3rem !important;
      font-size: 150% !important;
    }
    :valid {
      box-shadow: none !important;
      color: white !important;
      font-size: 1rem !important;
      font-family: normal !important;
    }
    ::-moz-focus-outer {
      color: white !important;
    }
    @media screen and (max-width: 450px) {
      width: 100% !important;
    }
  }
  .eventadditionalnotesfield {
    background: inherit !important;
  }
  .select2-selection--single:not([class*="bg-"]):not([class*="border-"]) {
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    border-bottom: 1px solid white;
    border-radius: 0;
  }
  .select2-selection--single:not([class*="bg-"]) {


    background-color: transparent !important;
  }
  .select2-selection__rendered {
    color: white !important;
    background-color: transparent !important;
  }
  .select2-results {
    color: #5F5F5F;
    background-color: #FFFFFF;
    font-family: PitchRegular !important;
    border: black 1px solid;
    -web: hidden;
}
  
`
{/* 

*/}