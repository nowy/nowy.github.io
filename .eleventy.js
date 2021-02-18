import { readFileSync } from 'fs'
import includes from './_includes/'

export default function (eleventyConfig) {
  includes(eleventyConfig)

  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('img')

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
