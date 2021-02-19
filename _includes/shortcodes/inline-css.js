export default eleventyConfig =>
  eleventyConfig.addShortcode('inlineCSS', function (data) {
    var css = `
      ${this.fileToString('style/anchor.css')}
      ${this.fileToString('style/highlight-line.css')}
      ${this.fileToString('style/pre.css')}
      ${this.fileToString('style/permalink.css')}
      ${this.fileToString('style/postslist.css')}
      ${this.fileToString('style/prism-base16-monokai.dark.css')}
      ${this.fileToString('style/tag.css')}
      ${this.fileToString('style/index.css')}
    `;
    return `${this.cssRoot(data)}\n${css}`
  })
