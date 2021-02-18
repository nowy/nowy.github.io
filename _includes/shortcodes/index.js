import archive from './archive.js'
import cssRoot from './css-root.js'
import description from './description.js'
import externalCSS from './external-css.js'
import favicon from './favicon.js'
import headTag from './head-tag.js'
import inlineCSS from './inline-css.js'
import pageDate from './page-date.js'
import socialMeta from './social-meta.js'
import titleTag from './title-tag.js'

export default function (eleventyConfig) {
  archive(eleventyConfig)
  cssRoot(eleventyConfig)
  description(eleventyConfig)
  externalCSS(eleventyConfig)
  favicon(eleventyConfig)
  headTag(eleventyConfig)
  inlineCSS(eleventyConfig)
  pageDate(eleventyConfig)
  socialMeta(eleventyConfig)
  titleTag(eleventyConfig)
}
