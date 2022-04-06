const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  // type definitions go here
  const typeDefs = ` 
    type ContentfulZzzIgnoreDevtestingarea implements Node @infer{
      posts: [postsList] 
      title: String!
    }
    type postsList implements Node @infer {
      blogTitle: String!
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  // NOTE bookNowLinkText
  // bookNowLinkUrl have been removed for now and will need to be added back in conditionally at some stage!

  const result = await graphql(`

  
    query EventsQuery {
      allContentfulZzzIgnoreDevtestingarea {
        edges {
          node {
            id
            title
            posts {
              blogTitle
            }
          }
        }
      }
      allContentfulWhatsOnPageContent {
        edges {
          node {
            id
            eventTitle
            eventDateAndTimeInfo
            eventDateAndTimeInfoLineTwo
            galleryImages {
              gatsbyImageData
            }
            eventDescription {
              raw
              references {
                id
                menuItems {
                  id
                  sectionHeadingIeEntrees
                  menuItems {
                    menuItem
                  }
                }
              }
            }
            eventMenu {
              ... on ContentfulEventMenu {
                __typename
                id
                eventMenuItems {
                  menuITem
                  menuItemLongDescription
                  menuItemShortDescription
                  menuItemPrice
                  __typename
                }
                sideMenuName
                menuName
              }
              ... on ContentfulLunchDinnerMenu {
                __typename
                id
                menuItems {
                  id
                  sectionHeadingIeEntrees
                  menuItems {
                    menuItem
                    menuItemDescription
                    menuItemPrice
                  }
                }
                topTitleIeFood
                seasonalTitleTopRight
              }
            }
            bookNowLinkText
            bookNowLinkUrl
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
    const path = `/events/${node.eventTitle.toLowerCase().replaceAll(' ' , '-')}`
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
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
   
   resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        assert: require.resolve("assert/"),
        fs: false

      },
    },
  })
}
