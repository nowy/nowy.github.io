import filters from './filters/index.js'
import shortcodes from './shortcodes/index.js'
import transforms from './transforms/index.js'

export default function (eleventyConfig) {
  filters(eleventyConfig)
  shortcodes(eleventyConfig)
  transforms(eleventyConfig)
}
