import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TermsAndConditions from "../components/Pages/TermsAndConditions/TermsAndConditions"

const TermsAndConditionsPage = ({ data }) => {

    const { pageHeading, content } = data.allContentfulTermsAndConditionsPageContent.nodes[0]
  return (
    <Layout landing>
      <Seo title="Home" />
      <TermsAndConditions pageHeading={pageHeading} content={content} />
    </Layout>
  )
}

export default TermsAndConditionsPage

export const landingPageData = graphql`
query TermsAndConditionsQuery {
    allContentfulTermsAndConditionsPageContent {
      nodes {
        pageHeading
        content {
          raw
        }
      }
    }
  }
`
