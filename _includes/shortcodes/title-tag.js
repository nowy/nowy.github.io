export default eleventyConfig =>
  eleventyConfig.addShortcode('titleTag', data => {
    var l10n = data.site[data.locale]
    return `<title>
      ${data.page.url !== '/'
        ? `${l10n.title}${l10n.separator}${data.title}`
        : data.title
          ? `${data.title}${l10n.separator}${l10n.tagline}`
          : `${l10n.title}${l10n.separator}${l10n.tagline}`
      }
    </title>`
  })
