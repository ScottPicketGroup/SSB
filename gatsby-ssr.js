import * as React from "react"
import { ActiveMenuProvider } from "./src/components/hooks/ActiveMenu"
import GlobalStyles from "./src/components/StyledComponents/GlobalStyles.css"
import { Typography } from "./src/components/StyledComponents/typography.css"

const App = ({ element }) => {
  return (
    <>
      <Helmet>
      <script language="javascript" src="https://smithstreetbistrot.functiontracker.com/public/v4/enquire.js"></script>
      </Helmet>
      <GlobalStyles />
      <Typography />
      <ActiveMenuProvider>{element}</ActiveMenuProvider>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}
