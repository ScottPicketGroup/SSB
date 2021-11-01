import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/Pages/Landing/Hero"
import Intro from "../components/Pages/Landing/Intro"
import WineAndFood from "../components/Pages/Landing/WineAndFood"
import Weekday from "../components/Pages/Landing/Weekday"
import PrivateDining from "../components/Pages/Landing/PrivateDining"
import WhatsOnEvents from "../components/Pages/Landing/WhatsOnEvents"

const IndexPage = ({ data }) => {
  const {
    heroImage,
    heroImageTitle,
    quoteHeading,
    quoteText,
    privateDiningHeading,
    privateDiningImage,
    privateDiningIntro,
    whatsOnEvents,
  } = data.allContentfulLandingPageContent.edges[0].node

  const weekdays = [
    { day: "Mondays", description: "Lorem ipsum dolor sit amet, consectetur" },
    { day: "Tuesdays", description: "Lorem ipsum dolor sit amet, consectetur" },
    {
      day: "Wednesdays",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      day: "Thursdays",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    { day: "Fridays", description: "Lorem ipsum dolor sit amet, consectetur" },
  ]

  return (
    <Layout landing>
      <Seo title="Home" />
      <Hero heroImage={heroImage} heroImageTitle={heroImageTitle} />
      <Intro quoteHeading={quoteHeading} quoteText={quoteText} />
      <WineAndFood />
      <WhatsOnEvents whatsOnEvents={whatsOnEvents} />
      <Weekday data={weekdays} />
      <PrivateDining
        privateDiningHeading={privateDiningHeading}
        privateDiningImage={privateDiningImage}
        privateDiningIntro={privateDiningIntro}
      />
    </Layout>
  )
}

export default IndexPage

export const landingPageData = graphql`
  query LandingPageQuery {
    allContentfulLandingPageContent {
      edges {
        node {
          heroImage {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
          heroImageTitle
          quoteHeading
          quoteText {
            raw
          }
          privateDiningHeading
          privateDiningImage {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
          privateDiningIntro
          whatsOnEvents {
            events {
              eventMenuImage {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
              eventDescription {
                raw
              }
              eventTitle
            }
          }
        }
      }
    }
  }
`
