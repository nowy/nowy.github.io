import fileToString from './file-to-string.js'
import minifyCSS from './minify-css.js'
import minifyJS from './minify-js.js'

export default function (eleventyConfig) {
  fileToString(eleventyConfig)
  minifyCSS(eleventyConfig)
  minifyJS(eleventyConfig)

  return
}
