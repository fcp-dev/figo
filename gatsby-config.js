module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-theme-material-ui`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`de`, `pt`],
        defaultLanguage: `de`,
  
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        }
      }
    }
  ]  
}
