import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Pages/PrivateDining/Intro"
import GallaryAndDescription from "../components/Pages/PrivateDining/GallaryAndDescription"
import PrivateDiningForm from "../components/Pages/PrivateDining/PrivateDiningForm"

const PrivateDingingPage = ({ data }) => {
  const {
    pageHeadnig,
    introduction,
    gallery,
    description,
    eventsPackageLinkText,
    makeAndEnquiryHeading,
  } = data.allContentfulPrivateDiningPageContent.nodes[0]

  return (
    <Layout>
      <Seo title="Home" />
      <Intro pageHeading={pageHeadnig} introduction={introduction} />
      <GallaryAndDescription gallery={gallery} description={description} eventsPackageLinkText={eventsPackageLinkText} />
      <PrivateDiningForm makeAndEnquiryHeading={makeAndEnquiryHeading} />
    </Layout>
  )
}

export default PrivateDingingPage

export const privateDiningPageData = graphql`
  query PrivateDiningQuery {
    allContentfulPrivateDiningPageContent {
      nodes {
        pageHeadnig
        introduction
        gallery {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
        description {
          raw
        }
        eventsPackageLinkText
        makeAndEnquiryHeading
      }
    }
  }
`
