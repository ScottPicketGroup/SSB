const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    query EventsQuery {
      allContentfulWhatsOnPageContent {
        edges {
          node {
            id
            eventTitle
            eventDateAndStartTime(formatString: "dddd MMM DD YYYY LT")
            eventEndDateAndTime(formatString: "dddd MMM DD YYYY LT")
            bookNowLinkText
            bookNowLinkUrl
            galleryImages {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 0.75)
            }
            eventDescription {
              raw
            }
            eventMenu {
              menuName
              sideMenuName
              eventMenuItems {
                menuITem
                menuItemLongDescription
                menuItemShortDescription
              }
            }
            eventMenuImage {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const EventTemplate = path.resolve(`src/templates/EventTemplate/index.js`)
  result.data.allContentfulWhatsOnPageContent.edges.forEach(({ node }) => {
    const path = `/events/${node.id}`
    createPage({
      path,
      component: EventTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        eventData: node,
      },
    })
  })
}
