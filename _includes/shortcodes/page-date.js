export default eleventyConfig =>
  eleventyConfig.addShortcode('pageDate', data => {
    const date = data.page.date

    if (Object.prototype.toString.call(date) === "[object Date]") {
      return `${date.toLocaleDateString(
        data.locale,
        data.site[data.locale].dateOptions
      )}`
    }

    return ''
  })
