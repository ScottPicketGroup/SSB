import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Reservation from "../components/Pages/Reservation/Reservation"
import { PageContainer } from "../components/StyledComponents/containers.css"

const ReservationPage = ({ data }) => {
  const {
    pageTitle,
    introduction,
    image,
    privateFunctionsHeading,
    bookATableHeading,
  } = data.allContentfulReservationsPageContent.nodes[0]

  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red>
        <Reservation
          pageTitle={pageTitle}
          introduction={introduction}
          image={image}
          privateFunctionsHeading={privateFunctionsHeading}
          bookATableHeading={bookATableHeading}
        />
      </PageContainer>
    </Layout>
  )
}

export default ReservationPage

export const reservationPageData = graphql`
  query ReservationQuery {
    allContentfulReservationsPageContent {
      nodes {
        pageTitle
        introduction {
          raw
        }
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
        privateFunctionsHeading
        bookATableHeading
      }
    }
  }
`
