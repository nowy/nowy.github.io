import { readFileSync } from 'fs'

export default eleventyConfig =>
  eleventyConfig.addFilter('fileToString', file =>
    readFileSync(`${file}`).toString()
  )
