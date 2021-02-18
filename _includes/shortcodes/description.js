export default eleventyConfig =>
  eleventyConfig.addShortcode('description', data =>
    `<meta name="description"
      content="${data.description
        ? data.description
        : data.site.description
          ? data.site.description
          : data.pkg.description}">`
  )
