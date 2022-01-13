import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WhatsOnEvents from "../components/Pages/WhatsOn/WhatsOnEvents"
import Intro from "../components/Pages/WhatsOn/Intro"

const WhatsOnPage = ({ data }) => {
  const { events, pageHeading } =
    data.allContentfulWhatsOnPageEventsPageContent.edges[0].node
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
    allContentfulWhatsOnPageEventsPageContent(
      filter: { id: { eq: "4437fbd8-135c-5422-b690-67964664d1f9" } }
    ) {
      edges {
        node {
          id
          pageHeading
          events {
            id
            eventTitle
            eventDescription {
              raw
            }
            eventMenuImage {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                aspectRatio: 1.5
              )
            }
          }
        }
      }
    }
  }
`
