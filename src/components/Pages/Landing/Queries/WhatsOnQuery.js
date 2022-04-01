import { useStaticQuery, graphql } from "gatsby"
export const useTestEventsData = () => {
    const stuff = "stuff"
  const data = useStaticQuery(
    graphql`
    query testData {
        allContentfulZzzIgnoreDevtestingarea {
          edges {
            node {
              eventsForLandingPage {
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
            }
          }
        }
      }
    `);
 
  return data.allContentfulZzzIgnoreDevtestingarea.edges[0].node.eventsForLandingPage[0].events
}

