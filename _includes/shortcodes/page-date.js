export default eleventyConfig =>
  eleventyConfig.addShortcode('pageDate', data => {
    const date = data.page.date

    return Object.prototype.toString.call(date) === "[object Date]"
      ? `${date.toLocaleDateString(
          data.locale ? data.page.locale : data.site.defaultLocale,
          data.site[data.locale].dateOptions
        )}`
        : ''
  })
