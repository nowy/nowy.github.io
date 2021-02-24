import { readFileSync } from 'fs'
import includes from './_includes/'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'

export default function (eleventyConfig) {
  includes(eleventyConfig)

  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy({
    'dist/bundle.js': 'assets/bundle.22022024.js',
  })

  eleventyConfig.addWatchTarget('./**/*.css')
  eleventyConfig.addWatchTarget('./**/*.js')

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, bs) => {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = readFileSync('_site/404.html');
          res.write(content_404);
          res.writeHead(404);
          res.end()
        })
      }
    }
  })
}
