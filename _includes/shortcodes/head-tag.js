export default eleventyConfig =>
  eleventyConfig.addShortcode('headTag', function (data) {
    return `<head>
      ${this.titleTag(data)}
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${this.description(data)}
      ${this.favicon(data)}
      ${this.socialMeta(data)}
      <style>
        ${this.minifyCSS(this.inlineCSS(data))}
      </style>
    </head>`
  })
