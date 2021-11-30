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
    reserverationsLinks
  } = data.allContentfulReservationsPageContent.nodes[0]

  return (
    <Layout>
      <Seo title="Home" />
      <PageContainer red>
        <Reservation
          pageTitle={pageTitle}
          introduction={introduction}
          image={image}
          reserverationsLinks={reserverationsLinks}
        />
      </PageContainer>
    </Layout>
  )
}

export default ReservationPage

export const reservationPageData = graphql`
  query ReservationQuery {
    allContentfulReservationsPageContent(
      filter: { id: { eq: "22f1b23c-cd97-5652-8a58-d8c038e6a1f7" } }
    ) {
      nodes {
        pageTitle
        introduction {
          raw
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.5)
        }
        reserverationsLinks {
          id
          url
          label
        }
      }
    }
  }
`
