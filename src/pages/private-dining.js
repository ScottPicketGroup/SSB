import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Pages/PrivateDining/Intro"
import GallaryAndDescription from "../components/Pages/PrivateDining/GallaryAndDescription"
import DiningForm from "../components/Pages/PrivateDining/DiningForm"

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
      <GallaryAndDescription
        gallery={gallery}
        width={"55%"}
        description={description}
        eventsPackageLinkText={eventsPackageLinkText}
      />
      <DiningForm makeAndEnquiryHeading={makeAndEnquiryHeading} />
    </Layout>
  )
}

export default PrivateDingingPage

export const privateDiningPageData = graphql`
  query PrivateDiningQuery {
    allContentfulPrivateDiningPageContent(
      filter: { id: { eq: "1d66eb88-1242-5a61-9f0a-5643609cee15" } }
    ) {
      nodes {
        pageHeadnig
        introduction
        gallery {
          gatsbyImageData(
           layout: FULL_WIDTH
            placeholder: BLURRED
            aspectRatio: 1.4
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
