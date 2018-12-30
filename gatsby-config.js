module.exports = {
  siteMetadata: {
    title: 'Jessica Dembe',
    description: 'The technical life and times of Jessica Dembe',
    author: '@jmdembe'
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve:'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
  ],
}
