module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-LCF9YDNXNE", // Google Analytics / GA
  
        ],
        pluginConfig: {
          head: true        
        },
      }
    }
  ],
};
