module.exports = {
  siteMetadata: {
    title: 'Jessica Dembe',
    description: 'The technical life and times of Jessica Dembe'
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
    'gatsby-transformer-remark',
    'gatsby-plugin-typography'
  ],
}
