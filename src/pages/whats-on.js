import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WhatsOnEvents from "../components/Pages/WhatsOn/WhatsOnEvents"
import Intro from "../components/Pages/WhatsOn/Intro"

const WhatsOnPage = ({ data }) => {

    const { events, pageHeading } = data.allContentfulWhatsOnPageEventsLandingPageContent.edges[0].node
  return (
    <Layout>
      <Seo title="Home" />
      <Intro pageHeading={pageHeading} />
      <WhatsOnEvents events={events} />
    </Layout>
  )
}

export default WhatsOnPage

export const whatsOnPageData = graphql`
query WhatsOnQuery {
    allContentfulWhatsOnPageEventsLandingPageContent {
      edges {
        node {
          pageHeading
          events {
            eventTitle
            eventDescription {
              raw
            }
            eventMenuImage {
              gatsbyImageData(aspectRatio: 0.7, layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
