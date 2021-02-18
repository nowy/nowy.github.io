export default eleventyConfig =>
  eleventyConfig.addShortcode('inlineCSS', function (data) {
    var css = `
      ${this.fileToString('css/anchor.css')}
      ${this.fileToString('css/highlight-line.css')}
      ${this.fileToString('css/pre.css')}
      ${this.fileToString('css/permalink.css')}
      ${this.fileToString('css/postslist.css')}
      ${this.fileToString('css/prism-base16-monokai.dark.css')}
      ${this.fileToString('css/tag.css')}
      ${this.fileToString('css/index.css')}
    `;
    return `${this.cssRoot(data)}\n${css}`
  })
