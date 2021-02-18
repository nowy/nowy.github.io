export default eleventyConfig =>
  eleventyConfig.addShortcode('socialMeta', data => {
    var meta = '';
    meta += (data.title)
      ? `<meta property="og:title" content="${data.title}">
        <meta name="twitter:title" content="${data.title}">`
      : `<meta property="og:title" content="${data.site.title}">
        <meta name="twitter:title" content="${data.site.title}">`
    meta += (data.description)
      ? `<meta property="og:description" content="${data.description}">
        <meta property="twitter:description" content="${data.description}">`
      : `<meta property="og:description" content="${data.pkg.description}">
        <meta property="twitter:description" content="${data.pkg.description}">`
    meta += (data.thumbnail)
      ? `<meta property="og:image" content="${data.site.baseUrl}/img/${data.thumbnail}">
        <meta name="twitter:image" content="${data.site.baseUrl}/img/${data.thumbnail}">
        <meta name="twitter:card" content="summary_large_image">`
        // Create a file named ./img/headshot.jpg to make the fallback work
      : `<meta property="og:image" content="${data.site.baseUrl}/img/headshot.jpg">
        <meta name="twitter:image" content="${data.site.baseUrl}/img/headshot.jpg">
        <meta name="twitter:card" content="summary_large_image">`
    meta += `<meta property="og:url" content="${data.page.url}">`
    return meta
  })
