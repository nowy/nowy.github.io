export default {
  layout: 'layouts/page',
  eleventyComputed: {
    permalink: data => `/${data.page.fileSlug}/index.html`
  },
  tags: [
    'pages'
  ]
}
