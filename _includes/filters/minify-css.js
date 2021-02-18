import CleanCSS from 'clean-css'

export default eleventyConfig =>
  eleventyConfig.addFilter('minifyCSS', stylesheet => {

    if(process.env.ELEVENTY_ENV === 'production') {
      var minified = new CleanCSS({}).minify(stylesheet).styles
      return minified
    }
    
    return stylesheet
  })
