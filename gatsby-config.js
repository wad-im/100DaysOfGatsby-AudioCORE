module.exports = {
  siteMetadata: {
    title: "AudioCORE",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "\u0016",
        spaceId: "\u0016",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
