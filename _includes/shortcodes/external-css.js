export default eleventyConfig =>
  eleventyConfig.addShortcode('externalCSS', data => {
    var stylesheets = [
      'pages',
      'posts'
    ]
    var files = []
    var html = '';
    if (data.externalCSS !== undefined || data.tags !== undefined) {
      if (Array.isArray(data.externalCSS)) {
        files = [...data.externalCSS]
      }
      if (typeof data.externalCSS === 'string') {
        files.push(data.externalCSS)
      }
      if (stylesheets.includes(data.tags[0])) {
        files.push(data.tags[0]) 
      }
      files.map(file =>
        html += `<link href="/css/${file}.css" rel="stylesheet" media="screen">`)
    }
    return html
  })
