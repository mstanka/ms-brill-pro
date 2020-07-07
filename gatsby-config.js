const { apiEndpoint } = require("./prismic-config")
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint)

module.exports = {
  siteMetadata: {
    title: `Gatsby Prismic Landing page`,
    description: `This is a Gatsby Prismic Landing page based on Gatsby default starter.`,
    author: `@mstanka`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1], // Loads the repo name from prismic configuration
        path: `/preview`,
        previews: true,
        pages: [
          {
            type: `Page`,
            match: `/:uid`,
            path: `/page-preview`,
            component: require.resolve(`${__dirname}/src/templates/page.js`),
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
