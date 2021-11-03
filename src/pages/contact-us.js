import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactUs from "../components/Pages/ContactUs/ContactUs"

const ContactUsPage = () => {

  return (
    <Layout>
      <Seo title="Home" />
      <ContactUs />
    </Layout>
  )
}

export default ContactUsPage

