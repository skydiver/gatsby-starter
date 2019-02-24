module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    description: 'My Gatsby starter',
    author: '@skydiver',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${ __dirname }/static/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter',
        short_name: 'gatsby',
        start_url: '/',
        background_color: '#F7DF1D',
        theme_color: '#000000',
        display: 'standalone',
        // icon: 'static/your_icon.png',
      },
    },
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-remove-serviceworker',
  ],
};