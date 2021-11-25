import * as React from "react"
import { ActiveMenuProvider } from "./src/components/hooks/ActiveMenu"
import GlobalStyles from "./src/components/StyledComponents/GlobalStyles.css"
import { Typography } from "./src/components/StyledComponents/typography.css"
import { ParallaxProvider } from "react-scroll-parallax";
const App = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ActiveMenuProvider>
      <ParallaxProvider>{element}</ParallaxProvider></ActiveMenuProvider>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}



