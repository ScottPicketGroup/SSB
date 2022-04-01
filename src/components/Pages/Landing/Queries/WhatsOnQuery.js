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
                eventDescription {
                  raw
                }
                eventTitle
                galleryImages {
                  gatsbyImageData(
    
                   placeholder: BLURRED
                            layout: FULL_WIDTH
                            aspectRatio: 1.5)
                }
              }
            }
          }
        }
      }
    }
    
    `);
 
  return data.allContentfulZzzIgnoreDevtestingarea.edges[0].node.eventsForLandingPage[0].events
}

