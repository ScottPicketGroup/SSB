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
import Gallery from "../components/Pages/Landing/Gallery"

const IndexPage = ({ data }) => {
  const {
    heroImage,
    heroImageTitle,
    quoteHeading,
    quoteText,
    wineMenuLabelText,
    foodMenuLabelText,
    privateDiningHeading,
    privateDiningImage,
    privateDiningIntro,
    whatsOnEvents,
    weekdaySpecials,
    gallery,
  } = data.allContentfulLandingPageContent.edges[0].node

  return (
    <Layout landing>
      <Seo title="Home" />
      {/* <Hero
        heroImage={heroImage}
        heroImageTitle={heroImageTitle}
        alt="landing-hero-image"
      /> */}
      <Intro quoteHeading={quoteHeading} quoteText={quoteText} />
      <WineAndFood wineMenuLabelText={wineMenuLabelText}
          foodMenuLabelText={foodMenuLabelText}/>
      <Gallery gallery={gallery} />
      <WhatsOnEvents whatsOnEvents={whatsOnEvents} />
      <Weekday data={weekdaySpecials} />
      <PrivateDining
        privateDiningHeading={privateDiningHeading}
        privateDiningImage={privateDiningImage}
        privateDiningIntro={privateDiningIntro}
      />
    </Layout>
  )
}

export default IndexPage
// NOTE quote heading has been removed for now and will need to be added back in conditionally at some stage!
export const landingPageData = graphql`
  query LandingPageQuery {
    allContentfulLandingPageContent{
      edges {
        node {
          heroImage {
            fluid {
              aspectRatio
            }
          }
          heroImageTitle
          quoteHeading
          quoteText {
            raw
          }
          wineMenuLabelText
          foodMenuLabelText
          gallery {
            gatsbyImageData(placeholder: BLURRED)
          }
          whatsOnEvents {
            events {
              id
              eventMenuImage {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  aspectRatio: 1.5
                )
              }
              eventDescription {
                raw
              }
              eventTitle
            }
          }
          weekdaySpecials {
            circularMenuText
            menuDuJourMenuItems {
              menuItem
              day
              showLearnMore
            }
          }
          privateDiningHeading
          privateDiningImage {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              aspectRatio: 1.5
            )
          }
          privateDiningIntro
        }
      }
    }
  }
`
