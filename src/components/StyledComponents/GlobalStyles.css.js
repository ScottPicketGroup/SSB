import { createGlobalStyle } from "styled-components"
import PitchRegular from "../../assetts/fonts/Pitch-Regular.woff"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
  }

  html, body {
    font-size: 16px;
    font-family: ${PitchRegular};
  
  }
  a {
    color: #333333;
  }
  h1 {
    font-weight: normal;
  }
`

export default GlobalStyles
