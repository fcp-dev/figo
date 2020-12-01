module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-theme-material-ui`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/utils/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`de`, `pt`],
        defaultLanguage: `de`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    }
  ]  
}
