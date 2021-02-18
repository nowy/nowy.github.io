import Terser from 'terser'

export default eleventyConfig =>
  eleventyConfig.addFilter('minifyJS', script => {
    if(process.env.ELEVENTY_ENV === 'production') {
      const minified = Terser.minify(script)

      if (minified.error) {
        console.log('Terser error: ', minified.error)
        return script
      }

      return minified.script
    }
    
    return script
  })
