require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Welcome to Smith St Bistrot`,
    description: `Welcome to Smith St Bistrot, Scott Pickett's take on a classic French Bistrot with influence from all over Europe.`,
    author: `@marek.reid`,
    siteUrl: `https://smithstbistrot.com.au/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        exclude: {
          plugins: [`gatsby-source-npm-package-search`],
        },
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PXJL7GH",
       
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/LOGO.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
  ],
}
