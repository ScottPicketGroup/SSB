/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { PageContainer } from "./StyledComponents/containers.css"
import Header from "../components/Header/Header"
import Menu from "./Header/Menu"
import GiftVouchers from "./Header/GiftVouchers"
import Footer from "../components/Common/Footer/Footer"

const Layout = ({ landing,  children }) => {
  return (
    <>
      <PageContainer>
        <Header landing={landing}/>
        <Menu />
        <GiftVouchers />
        {children}
        <Footer />
      </PageContainer>
    </>
  )
}

export default Layout
