module.exports = {
  siteMetadata: {
    title: "Seth Industries",
    author: "Seth Industries Pty Ltd",
    description: "Seth Industries - Business Automation Specialists"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Seth Industries',
        short_name: 'Seth Industries',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/title-bar-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
