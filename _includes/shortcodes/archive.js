export default eleventyConfig =>
  eleventyConfig.addShortcode('archive', function (_, array) {
    return `<ol reversed class="posts">
      ${array.map(item => `
        <li class="posts__entry${(item.data.highlight !== undefined && item.data.highlight === true) ? ' posts__entry--active' : ''}">
          <time class="posts__entry-date">${this.pageDate(item.data)}</time>
          <a href="${item.data.page.url}">${item.data.title}</a>
        </li>
      `).join('')}
    </ol>`
  })
