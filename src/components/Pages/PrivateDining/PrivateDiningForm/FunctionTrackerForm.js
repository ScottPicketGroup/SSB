import React from "react"
import styled from "styled-components"
const FunctionTrackerForm = () => {
  return (
    <FunctionTrackerFormContainer id="ftenquire907"></FunctionTrackerFormContainer>
  )
}

export default FunctionTrackerForm

export const FunctionTrackerFormContainer = styled.div`
div.form-group:nth-child(13) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2) {
  padding-left: 30.1px !important;

top: 1rem;
position: absolute;
font-family: PitchRegular;
font-size: 1rem;
}
#enquireform > div:nth-child(14) > input {
  padding: 0.75rem 4.5rem;
  margin-top: 3rem !important;
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

#enquireform p {
  font-family: 'PitchRegular';
  font-size: 1rem;
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
#select2-startminute-results, #select2-starthours-results, #select2-eventdescriptionfield-results {
  color: black !important;
  font-family: PitchRegular !important;
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

#select2-starthours-results
#select2-startminute-container > span, #select2-startminute-container > span {
  font-family: PitchRegular !important;
  
}
#select2-eventdescriptionfield-result-2dyd-Anniversary {
  font-family: PitchRegular !important;
}
#select2-eventdescriptionfield-container > span {
  color: black !important;
  font-family: PitchRegular;
}
.select2-results {
    color: black !important;
    background-color: #FFFFFF;
    border: 1px solid black !important;
    font-family: PitchRegular !important;
}
.select2-results__option {
    padding: 7px 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: black !important;
    font-family: PitchRegular !important;
}
.select2-container {
    border: 0px;
    width: 100% !important;
    margin-top: 2rem !important;
    border: 1px solid black !important;
}
.select2-selection__placeholder {
    font-family: PitchRegular !important;
    color: black !important;
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
 
  .ftform-control {
    border-radius: 0px !important;
    background-color: transparent !important;
  
    box-shadow: none !important;
    border: none !important;
    border-bottom: 1px solid ${props =>
      props.err ? "#CB0000" : "white"} !important;
  }
  input {
 
    background: rgba(255, 255, 255, 0) !important;
    border: none !important;
    padding: 1.5rem 0 !important;
    font-size: 0.75rem !important;
    line-height: none !important;

    border-bottom: 1px solid ${props =>
      props.err ? "#CB0000" : "white"} !important;
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
       !important;
      font-size: 1rem !important;
      font-family: normal !important;
    }
    ::-moz-focus-outer {
       !important;
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
     !important;
    background-color: transparent !important;
  }
  .select2-results {
    color: #5F5F5F;
    
    font-family: PitchRegular !important;
    border: black 1px solid;
    -web: hidden;
}
Around the search field
  .select2-search {
    ;
    background-color: transparent !important;
  }

  /* Search field */
  .select2-search input {
    ;
    background-color: transparent !important;
  }

 

  /* Higlighted (hover) result */
  


  element.style .select2-selection--single:not([class*="bg-"]) {
    background-color: transparent !important;
  }
  .select2-selection--single:not([class*="bg-"]) {
    background-color: transparent !important;
  }

  .select2-selection--multiple:not([class*="bg-"]) {
    background-color: transparent !important;
  }

  .select2-selection__arrow {
    background-color: inherit;
  }
  
  
  .select2-selection__arrow::before {
    content: "";
    display: none;
  }

  .form-control-uniform {
    
    font-weight: bold !important;
  }
  .ftform-control::-webkit-input-placeholder {
    
  } /* WebKit, Blink, Edge */
  .ftform-control:-moz-placeholder {
    
  } /* Mozilla Firefox 4 to 18 */
  .ftform-control::-moz-placeholder {
    
  } /* Mozilla Firefox 19+ */
  .ftform-control:-ms-input-placeholder {
    
  } /* Internet Explorer 10-11 */
  .ftform-control::-ms-input-placeholder {
    
  } /* Microsoft Edge */
  .checker span {
    color: #dddddd;
    border: 2px solid #dddddd;
  }
  .picker__header {
    
  }
  .picker__table {
    
  }
  .select2-selection--single:not([class*="bg-"]):not([class*="border-"]) {
    border-color: transparent !important;
  }
  .select2-results__option[aria-selected="true"] {
    background-color: white !important;
    color: inherit;
  }
  .select2-results__option select2-results__option--highlighted {
    background-color: white !important;
  }
  #enquireform > div:nth-child(15) > input {
    font-family: normal !important;
    font-size: 1rem !important;
    background: transparent !important;
    text-transform: uppercase !important;
    // line-height: 46px !important;
    border-radius: 0px !important;
    border: 1px solid white !important;
    width: 225px !important;
    display: flex !important;
    flex-direction: column !important;
    padding: 1rem 2.75rem !important;
    justify-content: center !important;
    align-items: center !important;
    transition: all 0.2s ease-in-out;
    :hover {
      color: #2b3c31 !important;
      background: white !important;
    }
  }
  .checker input[type=checkbox], .choice input[type=radio] {
    border: none;
    background: none;
    display: -moz-inline-box;
    display: inline-block;
    margin: 0;
    vertical-align: top;
    cursor: pointer;
    position: absolute;
    height: 30px;
    width: 30px;
    z-index: 2;
    opacity: 0;
    filter: alpha(opacity=0);
}
.checker span {
  content: '';
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #F0E9D5;
  transition: all ease-in-out 300ms;
}
span.checked {
  background: rgb(15, 35, 29);
}
#enquireform > div:nth-child(14) > div {
  flex-direction: row !important;
}
#enquireform > div:nth-child(14) > div > div {
  width: 10% !important;
}
#enquireform > div:nth-child(14) > div > label {
  order: 1 !important;
  width: 70% !important;
}
#enquireform > p:nth-child(1) {
  margin-left: .25rem;
}
`
{
  /* 

*/
}
