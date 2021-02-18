import htmlmin from 'html-minifier'

export default eleventyConfig =>
  eleventyConfig.addTransform('minifyHTML', (content, outputPath) => {
    if(process.env.ELEVENTY_ENV === 'production' &&
      (outputPath !== false && outputPath.endsWith('.html'))) {
      var minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }

    return content
  })
