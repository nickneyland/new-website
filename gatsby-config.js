/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
  siteMetadata: {
    title: "Nick Neyland",
    description:
      "Personal website of web developer and writer Nick Neyland.",
    url: "https://nickneyland.com",
    twitterUsername: "@nickneyland",
  },
}
